(function () {
  "use strict";

  // ---------------------------------------------------------------
  // 定数・保存
  // ---------------------------------------------------------------
  var LEVEL_NAMES = {
    basic: "基礎", daily: "日常会話", business: "ビジネス",
    advanced: "上級", bizadv: "ビジネス上級", story: "ストーリー",
    words: "単語帳",
    "phrase-basic": "よく使う表現・基礎", "phrase-daily": "よく使う表現・日常", "phrase-biz": "よく使う表現・ビジネス"
  };
  // 以前からのキー（形式は変えない）
  var KEY_SETTINGS = "englishRsvp.settings.v1";
  var KEY_WEAK = "englishRsvp.weak.v1";
  var KEY_CUSTOM = "englishRsvp.custom.v1";
  // 新しく追加したキー
  var KEY_CHECK = "englishRsvp.check.v1";   // 理解チェック：文ごとの「わかった」の連続回数
  var KEY_STATS = "englishRsvp.stats.v1";   // 学習記録：日付ごとの読んだ文の数
  var KEY_FREE = "englishRsvp.free.v1";     // 自由英文：最後に貼り付けた英文

  var UNMARK_STREAK = 2; // 「わかった」がこの回数続いたら苦手マークを外す

  var DEFAULTS = {
    mode: "alternate",   // alternate | english | both | check
    enTime: 1.6,         // 秒
    jaTime: 1.6,
    fullTime: 4,
    tts: false,
    ttsFull: false,
    ttsRate: 0.9,
    voiceURI: "",        // 空 = 自動
    shuffle: false,
    weakOnly: false,
    level: "all",
    font: 1,
    theme: "auto",
    lastId: null,
    chunkGroup: 1,       // 1 | 2 | 3
    speedUp: false,
    speedRate: 3,        // 1文ごとに短くする割合（%）
    speedMin: 0.6,       // 英語の表示時間の下限（秒）
    freeMax: 6,
    freeFull: true,
    storyFlow: true,     // ストーリーでは文末の全文表示を挟まずに続けて読む
    cardReverse: false   // 単語帳を日→英（日本語を見て英語を思い出す）で出す
  };

  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* 保存できない環境では無視 */ }
  }

  var settings = Object.assign({}, DEFAULTS, load(KEY_SETTINGS, {}));
  if (["alternate", "english", "both", "check"].indexOf(settings.mode) < 0) settings.mode = "alternate";
  if ([1, 2, 3].indexOf(settings.chunkGroup) < 0) settings.chunkGroup = 1;
  var weak = new Set(load(KEY_WEAK, []));
  var customRaw = load(KEY_CUSTOM, []);
  var checkRec = load(KEY_CHECK, {}) || {};
  var stats = load(KEY_STATS, null) || { days: {} };
  if (!stats.days) stats.days = {};
  if (!stats.cards) stats.cards = {}; // 単語帳のカードの枚数（日付ごと）

  function saveSettings() { save(KEY_SETTINGS, settings); }
  function saveWeak() { save(KEY_WEAK, Array.from(weak)); }

  // ---------------------------------------------------------------
  // テキスト形式の解析
  //   英語 / 英語 || 日本語 / 日本語 || 自然な訳
  //   英語 / 英語 || 日本語 / 日本語 || 自然な訳 || 表現メモ（4つ目は省略できる）
  // ---------------------------------------------------------------
  function splitChunks(s) {
    return s.split(/[\/／]/).map(function (c) { return c.trim(); }).filter(Boolean);
  }

  function parseLine(line) {
    var parts = line.split(/\|\||｜｜/).map(function (p) { return p.trim(); });
    if (parts.length !== 3 && parts.length !== 4) {
      return { error: "「||」で3つ（英語・日本語チャンク・自然な訳）か、4つ（＋表現メモ）に区切ってください（いまは " + parts.length + " つ）" };
    }
    var en = splitChunks(parts[0]);
    var ja = splitChunks(parts[1]);
    var natural = parts[2];
    if (!en.length) return { error: "英語チャンクがありません" };
    if (!ja.length) return { error: "日本語チャンクがありません" };
    if (!natural) return { error: "自然な訳がありません" };
    if (en.length !== ja.length) {
      return { error: "英語と日本語のチャンク数が違います（英語 " + en.length + "・日本語 " + ja.length + "）" };
    }
    var r = { en: en, ja: ja, natural: natural };
    if (parts[3]) r.note = parts[3];
    return r;
  }

  function parseText(text) {
    var items = [], errors = [];
    text.split(/\r?\n/).forEach(function (line, i) {
      var t = line.trim();
      if (!t || t.charAt(0) === "#") return;
      var r = parseLine(t);
      if (r.error) errors.push({ line: i + 1, msg: r.error, text: t });
      else items.push(r);
    });
    return { items: items, errors: errors };
  }

  // 英文から安定した ID を作る（FNV-1a）。大文字小文字・記号・空白の違いは無視する
  function makeId(en) {
    var s = en.join(" ").toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim();
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193);
    }
    return "s" + (h >>> 0).toString(36);
  }

  function toLine(s) {
    return s.en.join(" / ") + " || " + s.ja.join(" / ") + " || " + s.natural + (s.note ? " || " + s.note : "");
  }

  function countWords(text) {
    var m = text.match(/[A-Za-z0-9][A-Za-z0-9'’\-]*/g);
    return m ? m.length : 0;
  }

  // ---------------------------------------------------------------
  // 自由英文：文に分けて、自動でチャンクに分ける
  // ---------------------------------------------------------------
  function wordSet(s) {
    var o = {};
    s.split(/\s+/).forEach(function (w) { if (w) o[w] = true; });
    return o;
  }
  // この語の前で区切りやすい（前置詞・接続詞・関係詞・疑問詞など）
  var BREAK_BEFORE = wordSet(
    "about above across after against along amid among around at before behind below beneath beside besides between beyond " +
    "by despite during except for from in inside into near off on onto outside over per since through throughout " +
    "toward towards under underneath until till unlike upon via with within without to " +
    "and but or nor yet so because although though while whereas unless if whether once whenever wherever " +
    "than as " +
    "who whom whose which that where when why how what whatever whoever"
  );
  // この語のすぐ後では区切らない（冠詞・前置詞・助動詞など、後ろとつながる語）
  var NO_BREAK_AFTER = wordSet(
    "a an the this these those my your his her its our their some any no every each either neither another such " +
    "of to in on at by for with from into about as than and or but nor so " +
    "very too more most less least much many few several all both half " +
    "is am are was were be been being do does did have has had will would shall should can could may might must " +
    "not never just only also even rather quite " +
    "who whom whose which that where when why how what " +
    "i you he she it we they there here"
  );
  var ABBREVIATIONS = wordSet(
    "mr. mrs. ms. dr. prof. sr. jr. st. vs. etc. e.g. i.e. inc. ltd. co. corp. no. fig. approx. dept. " +
    "jan. feb. mar. apr. jun. jul. aug. sep. sept. oct. nov. dec. a.m. p.m. u.s. u.k. u.n. e.u."
  );

  function cleanWord(w) {
    return w.toLowerCase().replace(/[’‘]/g, "'").replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, "");
  }

  function splitSentences(text) {
    var words = text.replace(/\s+/g, " ").trim().split(" ").filter(Boolean);
    var out = [], cur = [];
    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      cur.push(w);
      var next = words[i + 1];
      if (/[.!?]["”’)\]]*$/.test(w)) {
        var lw = w.toLowerCase().replace(/["”’)\]]+$/, "");
        var isAbbr = ABBREVIATIONS[lw] || /^[a-z]\.$/i.test(lw);
        var nextStarts = !next || /^["“‘(\[]?[A-Z0-9]/.test(next);
        if (!isAbbr && nextStarts) { out.push(cur.join(" ")); cur = []; }
      }
    }
    if (cur.length) out.push(cur.join(" "));
    return out;
  }

  function chunkSentence(sentence, maxWords) {
    maxWords = maxWords || 6;
    var words = sentence.split(/\s+/).filter(Boolean);
    var chunks = [], cur = [];
    function flush() { if (cur.length) { chunks.push(cur.join(" ")); cur = []; } }

    for (var i = 0; i < words.length; i++) {
      var w = words[i];
      // ダッシュ単体は前のチャンクにつけて区切る
      if (/^[—–-]+$/.test(w)) { cur.push(w); flush(); continue; }
      if (cur.length) {
        var lw = cleanWord(w);
        var prev = cleanWord(cur[cur.length - 1]);
        var canBreak = !NO_BREAK_AFTER[prev];
        var brk = false;
        if (BREAK_BEFORE[lw] && cur.length >= 2 && canBreak) brk = true;
        if (/^[("“‘\[]/.test(w) && cur.length >= 2) brk = true;
        if (cur.length >= maxWords && canBreak) brk = true;
        if (cur.length >= maxWords + 2) brk = true;
        if (brk) flush();
      }
      cur.push(w);
      // 句読点の後で区切る
      if (/[,;:]["”’)\]]*$|[—–]$/.test(w)) flush();
    }
    // 最後に1語だけ残ったら前のチャンクにつなげる
    if (cur.length === 1 && chunks.length && !/[,;:—–]["”’)\]]*$/.test(chunks[chunks.length - 1])) {
      chunks[chunks.length - 1] += " " + cur[0];
      cur = [];
    }
    flush();
    return chunks;
  }

  function buildFreeSentences(text, maxWords) {
    return splitSentences(text).map(function (sent, i) {
      return { id: "f" + i, en: chunkSentence(sent, maxWords), ja: [], natural: "", level: "free", free: true };
    }).filter(function (s) { return s.en.length; });
  }

  // ---------------------------------------------------------------
  // 例文の読み込み
  // ---------------------------------------------------------------
  var sentences = [];      // すべての文
  var byId = {};

  function addSentence(s) {
    s.id = makeId(s.en);
    if (byId[s.id]) return false;
    byId[s.id] = s;
    sentences.push(s);
    return true;
  }

  // ストーリー（順番に読む長めの話）
  var STORIES = [];
  var STORY_MAP = {};
  var STORY_GROUPS = []; // 「オリジナル」「名作・初級」などのまとまり（出てきた順）

  (window.RSVP_DATA || []).forEach(function (group) {
    var story = null;
    if (group.level === "story" && group.story && !STORY_MAP[group.story]) {
      story = {
        key: String(group.story), title: group.title || String(group.story),
        titleJa: group.titleJa || group.title || String(group.story), note: group.note || "",
        group: group.group || "オリジナル", source: group.source || "", ids: []
      };
      STORIES.push(story);
      STORY_MAP[story.key] = story;
      if (STORY_GROUPS.indexOf(story.group) < 0) STORY_GROUPS.push(story.group);
    }
    parseText(group.text || "").items.forEach(function (s) {
      s.level = group.level;
      s.custom = false;
      if (story) { s.story = story.key; s.storyIndex = story.ids.length; }
      if (addSentence(s) && story) story.ids.push(s.id);
    });
    if (story) story.ids.forEach(function (id) { byId[id].storyLen = story.ids.length; });
  });
  customRaw.forEach(function (c) {
    if (!c || !Array.isArray(c.en) || !Array.isArray(c.ja)) return;
    var cs = { en: c.en, ja: c.ja, natural: c.natural || "", level: c.level || "basic", custom: true };
    if (c.note) cs.note = c.note;
    addSentence(cs);
  });

  // ---------------------------------------------------------------
  // 単語帳（words.js）
  //   英語 || 日本語 || ヒント || 絵文字（ヒントと絵文字は省略できる）
  // ---------------------------------------------------------------
  var SCENES = [];
  var SCENE_MAP = {};
  var WORD_CATS = []; // 「家の中」「外出・旅行」などの見出し（出てきた順）
  var EMOJI_ONLY = /^[^A-Za-z0-9\u3040-\u30ff\u3400-\u9fff\uff10-\uff5a]+$/;

  function parseCards(text) {
    var out = [];
    text.split(/\r?\n/).forEach(function (line) {
      var t = line.trim();
      if (!t || t.charAt(0) === "#") return;
      var parts = t.split(/\|\||｜｜/).map(function (p) { return p.trim(); });
      if (parts.length < 2 || !parts[0] || !parts[1]) return;
      var rest = parts.slice(2).filter(Boolean), emoji = "", hint = "";
      if (rest.length && EMOJI_ONLY.test(rest[rest.length - 1])) emoji = rest.pop();
      if (rest.length) hint = rest[0];
      out.push({ en: parts[0], ja: parts[1], hint: hint, emoji: emoji });
    });
    return out;
  }

  (window.RSVP_WORDS || []).forEach(function (g) {
    if (!g || !g.scene || SCENE_MAP[g.scene]) return;
    var sc = {
      key: String(g.scene), title: g.title || String(g.scene), emoji: g.emoji || "", desc: g.desc || "",
      category: g.category || "その他", count: 0
    };
    SCENES.push(sc);
    SCENE_MAP[sc.key] = sc;
    if (WORD_CATS.indexOf(sc.category) < 0) WORD_CATS.push(sc.category);
    parseCards(g.text || "").forEach(function (c) {
      var card = {
        en: [c.en], ja: [c.ja], natural: "", hint: c.hint, emoji: c.emoji,
        card: true, level: "words", scene: sc.key, custom: false
      };
      card.id = makeId(["card", c.en]); // 例文と ID が重ならないようにする
      if (byId[card.id]) return;
      byId[card.id] = card;
      sentences.push(card);
      sc.count++;
    });
  });

  function saveCustom() {
    save(KEY_CUSTOM, sentences.filter(function (s) { return s.custom; }).map(function (s) {
      var o = { en: s.en, ja: s.ja, natural: s.natural, level: s.level };
      if (s.note) o.note = s.note;
      return o;
    }));
  }

  // ---------------------------------------------------------------
  // 再生リスト
  // ---------------------------------------------------------------
  var playlist = [];   // id の配列
  var pos = 0;         // playlist 上の位置
  var current = null;  // 表示中の文

  // 自由英文モード
  var freeActive = false;
  var freeMap = {};
  var deckKeepId = null;

  function S(id) { return freeActive ? freeMap[id] : byId[id]; }

  function matchesLevel(s, level) {
    var lv = level || settings.level;
    if (lv === "all") return s.level !== "story" && !s.card; // 「すべての例文」はストーリーと単語帳を除く
    if (lv === "words") return !!s.card;
    if (lv.indexOf("words:") === 0) return !!s.card && s.scene === lv.slice(6);
    if (lv.indexOf("wordcat:") === 0) return !!s.card && SCENE_MAP[s.scene].category === lv.slice(8);
    if (lv === "custom") return s.custom;
    if (lv === "story") return s.level === "story";
    if (lv.indexOf("story:") === 0) return s.story === lv.slice(6);
    if (lv.indexOf("stories:") === 0) return !!s.story && STORY_MAP[s.story].group === lv.slice(8);
    return s.level === lv;
  }
  // ストーリーを選んでいるときは順番どおりに読む
  function isStoryLevel() {
    return !freeActive && (settings.level === "story" || settings.level.indexOf("story:") === 0 || settings.level.indexOf("stories:") === 0);
  }
  function inFilter(s) {
    return matchesLevel(s) && (!settings.weakOnly || weak.has(s.id));
  }
  function shuffleArray(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function buildPlaylist(keepId) {
    playlist = sentences.filter(inFilter).map(function (s) { return s.id; });
    if (settings.shuffle && !isStoryLevel()) {
      shuffleArray(playlist);
      // いまの文を先頭にして続きから再生できるようにする
      var k = keepId ? playlist.indexOf(keepId) : -1;
      if (k > 0) { playlist.splice(k, 1); playlist.unshift(keepId); }
    }
    var idx = keepId ? playlist.indexOf(keepId) : -1;
    pos = idx >= 0 ? idx : 0;
    current = playlist.length ? byId[playlist[pos]] : null;
  }

  function currentInList() {
    return current && playlist[pos] === current.id;
  }

  function rememberCurrent() {
    if (!freeActive && current) { settings.lastId = current.id; }
    saveSettings();
  }

  // ---------------------------------------------------------------
  // ステップ（1文の中の表示の並び）
  // ---------------------------------------------------------------
  var steps = [];
  var stepIndex = 0;
  var view = { en: [], ja: [] }; // チャンクの大きさを反映した表示用チャンク

  function effectiveMode() { return freeActive ? "english" : settings.mode; }
  function isCheck() { return effectiveMode() === "check"; }

  function groupChunks(arr, g) {
    if (g <= 1) return arr.slice();
    var out = [];
    for (var i = 0; i < arr.length; i += g) out.push(arr.slice(i, i + g).join(" "));
    return out;
  }

  function buildSteps() {
    steps = [];
    view = { en: [], ja: [] };
    if (!current) return;
    var g = settings.chunkGroup || 1;
    view.en = groupChunks(current.en, g);
    view.ja = groupChunks(current.ja || [], g);
    var mode = effectiveMode();
    if (current.card) {
      // 単語帳：表（英語、日→英なら日本語）→ 裏（答え）
      if (mode === "alternate") steps = [{ type: "cfront" }, { type: "cback" }];
      else if (mode === "english") steps = [{ type: "cen" }];
      else if (mode === "both") steps = [{ type: "cback", both: true }];
      else steps = [{ type: "cfront" }, { type: "eval" }];
      return;
    }
    for (var i = 0; i < view.en.length; i++) {
      if (mode === "alternate") {
        steps.push({ type: "en", i: i });
        steps.push({ type: "ja", i: i });
      } else if (mode === "english") {
        steps.push({ type: "en", i: i });
      } else if (mode === "both") {
        steps.push({ type: "both", i: i });
      } else { // check
        steps.push({ type: "en", i: i });
        steps.push({ type: "enja", i: i });
      }
    }
    if (mode === "check") steps.push({ type: "eval" });
    else if (freeActive ? settings.freeFull : !(current.story && settings.storyFlow)) steps.push({ type: "full" });
    // ストーリーの最初の文の前に題名を出す
    if (!freeActive && current.story && current.storyIndex === 0) steps.unshift({ type: "title" });
  }

  // ---------------------------------------------------------------
  // だんだん速く
  // ---------------------------------------------------------------
  var speedEn = settings.enTime; // いまの英語の表示時間（秒）

  function speedFloor() { return Math.min(settings.speedMin, settings.enTime); }
  function resetSpeed() { speedEn = settings.enTime; updateSpeedInfo(); updateMeta(); }
  function enSeconds() { return settings.speedUp ? speedEn : settings.enTime; }
  function speedStep() {
    if (!settings.speedUp) return;
    speedEn = Math.max(speedFloor(), speedEn * (1 - settings.speedRate / 100));
    updateSpeedInfo();
  }

  function stepDuration(step) {
    switch (step.type) {
      case "en": return enSeconds() * 1000;
      case "ja": return settings.jaTime * 1000;
      case "both": return (enSeconds() + settings.jaTime) * 1000;
      case "cfront": case "cen": return enSeconds() * 1000;
      case "cback": return (step.both ? enSeconds() + settings.jaTime : settings.jaTime) * 1000;
      default: return settings.fullTime * 1000;
    }
  }

  // 英語の表示速度（1分あたりの語数）
  function currentWpm(sec) {
    if (!current || !view.en.length) return 0;
    if (current.card) {
      // 単語帳は1分あたりの枚数
      var m = effectiveMode(), t = sec != null ? sec : enSeconds();
      var per = m === "english" ? t : t + settings.jaTime;
      return Math.round(60 / per);
    }
    var per = sec != null ? sec : enSeconds();
    if (effectiveMode() === "both") per += settings.jaTime;
    return Math.round(countWords(current.en.join(" ")) / (view.en.length * per) * 60);
  }

  // ---------------------------------------------------------------
  // 学習記録
  // ---------------------------------------------------------------
  function dateKey(d) {
    var m = d.getMonth() + 1, day = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (day < 10 ? "0" : "") + day;
  }
  function todayCount() { return stats.days[dateKey(new Date())] || 0; }
  function todayCards() { return stats.cards[dateKey(new Date())] || 0; }
  function studied(k) { return (stats.days[k] || 0) + (stats.cards[k] || 0) > 0; }
  function streakDays() {
    var d = new Date();
    if (!studied(dateKey(d))) d.setDate(d.getDate() - 1); // 今日まだなら昨日から数える
    var n = 0;
    while (studied(dateKey(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function completeSentence(isCard) {
    var k = dateKey(new Date());
    var book = isCard ? stats.cards : stats.days;
    book[k] = (book[k] || 0) + 1;
    // 古い記録（400日より前）は消す
    var limit = new Date(); limit.setDate(limit.getDate() - 400);
    var lk = dateKey(limit);
    [stats.days, stats.cards].forEach(function (b) {
      Object.keys(b).forEach(function (key) { if (key < lk) delete b[key]; });
    });
    save(KEY_STATS, stats);
    updateStats();
  }

  // ---------------------------------------------------------------
  // 読み上げ
  // ---------------------------------------------------------------
  var synth = window.speechSynthesis || null;
  var hasTTS = !!(synth && window.SpeechSynthesisUtterance);
  var voice = null;

  function englishVoices() {
    if (!hasTTS) return [];
    var list = [];
    try { list = synth.getVoices() || []; } catch (e) { list = []; }
    return list.filter(function (v) { return /^en([-_]|$)/i.test(v.lang || ""); });
  }

  function pickVoice() {
    var en = englishVoices();
    voice = null;
    if (settings.voiceURI) {
      voice = en.filter(function (v) { return v.voiceURI === settings.voiceURI; })[0] ||
              en.filter(function (v) { return v.name === settings.voiceURI; })[0] || null;
    }
    if (!voice) {
      var us = en.filter(function (v) { return /^en[-_]US/i.test(v.lang); });
      var pool = us.length ? us : en;
      var preferred = pool.filter(function (v) { return /Samantha|Google US English|Aria|Jenny|Alex/i.test(v.name); });
      voice = preferred[0] || pool.filter(function (v) { return v.localService; })[0] || pool[0] || null;
    }
    populateVoices(en);
  }

  function populateVoices(en) {
    var sel = document.getElementById("voiceSelect");
    if (!sel) return;
    sel.textContent = "";
    var auto = document.createElement("option");
    auto.value = "";
    auto.textContent = "自動（おすすめ）";
    sel.appendChild(auto);
    var found = false;
    en.slice().sort(function (a, b) {
      return (a.lang + a.name).localeCompare(b.lang + b.name);
    }).forEach(function (v) {
      var o = document.createElement("option");
      o.value = v.voiceURI || v.name;
      o.textContent = v.name + "（" + v.lang + "）";
      if (o.value === settings.voiceURI) found = true;
      sel.appendChild(o);
    });
    if (settings.voiceURI && !found) {
      // 保存した声がこの端末に（まだ）ない場合も、設定は消さずに残す
      var miss = document.createElement("option");
      miss.value = settings.voiceURI;
      miss.textContent = "保存した声（この端末では使えません）";
      sel.appendChild(miss);
    }
    sel.value = settings.voiceURI || "";
  }

  if (hasTTS) {
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", pickVoice);
    else synth.onvoiceschanged = pickVoice;
  }

  function stopSpeech() {
    if (hasTTS && (synth.speaking || synth.pending)) synth.cancel();
  }

  // 読み終わったら（またはエラー・時間切れで）解決する Promise
  function speak(text) {
    return new Promise(function (resolve) {
      if (!hasTTS) return resolve();
      var done = false;
      function finish() { if (!done) { done = true; resolve(); } }
      try {
        stopSpeech();
        var u = new SpeechSynthesisUtterance(text);
        u.lang = voice ? voice.lang : "en-US";
        if (voice) u.voice = voice;
        u.rate = settings.ttsRate;
        u.onend = finish;
        u.onerror = finish;
        synth.speak(u);
        // onend が来ない環境のための保険
        setTimeout(finish, 2500 + text.length * 110 / settings.ttsRate);
      } catch (e) { finish(); }
    });
  }

  // iOS Safari はユーザー操作の中で一度話させないと読み上げが始まらない
  var ttsUnlocked = false;
  function unlockTTS() {
    if (!hasTTS || ttsUnlocked) return;
    ttsUnlocked = true;
    try {
      var u = new SpeechSynthesisUtterance(" ");
      u.volume = 0;
      synth.speak(u);
    } catch (e) { /* noop */ }
  }

  // ---------------------------------------------------------------
  // 再生制御
  // ---------------------------------------------------------------
  var playing = false;
  var started = false;  // この文で一度でも再生したか（一時停止表示の切替用）
  var timer = null;
  var runToken = 0;
  var hintOverride = "";

  function cancelRun() {
    runToken++;
    if (timer) { clearTimeout(timer); timer = null; }
    stopSpeech();
  }

  function delay(ms) {
    return new Promise(function (resolve) { timer = setTimeout(resolve, ms); });
  }

  function runStep() {
    cancelRun();
    var token = runToken;
    var step = steps[stepIndex];
    if (!step) return;
    hintOverride = "";
    render();
    var speech = null;
    if (settings.tts && current.card) {
      // 英語が初めて見えたときに読む
      var rev = settings.cardReverse;
      if (step.type === "cen" || (step.type === "cfront" && !rev) ||
          ((step.type === "cback" || step.type === "eval") && (rev || step.both))) speech = speak(current.en[0]);
    } else if (settings.tts) {
      if (step.type === "en" || step.type === "both") speech = speak(view.en[step.i]);
      else if ((step.type === "full" || step.type === "eval") && settings.ttsFull) speech = speak(current.en.join(" "));
      else if (step.type === "title") speech = speak(STORY_MAP[current.story].title);
    }
    // 理解チェックは自分のペースで進める（タップを待つ）
    if (isCheck()) return;
    var waits = [delay(stepDuration(step))];
    if (speech) waits.push(speech);
    Promise.all(waits).then(function () {
      if (token !== runToken || !playing) return;
      advanceStep();
    });
  }

  function advanceStep() {
    stepIndex++;
    if (stepIndex >= steps.length) {
      completeSentence(current && current.card);
      speedStep();
      goSentence(1, true);
    } else {
      runStep();
    }
  }

  function play() {
    if (!current) { render(); return; }
    unlockTTS();
    playing = true;
    started = true;
    runStep();
    updateControls();
  }

  function pause() {
    playing = false;
    cancelRun();
    render();
    updateControls();
  }

  function togglePlay() {
    if (playing) pause(); else play();
  }

  // 画面タップ・スペースキー
  function primaryAction() {
    if (!current) return;
    if (isCheck() && playing) {
      var step = steps[stepIndex];
      if (step && step.type === "eval") {
        hintEl.textContent = "下のボタンで理解度を選んでください（1・2・3）";
        return;
      }
      advanceStep();
      return;
    }
    togglePlay();
  }

  // dir: +1 / -1
  function goSentence(dir, auto) {
    if (!playlist.length) {
      current = null;
      pause();
      return;
    }
    var next;
    if (dir > 0) {
      next = pos + 1;
      if (next >= playlist.length) {
        next = 0;
        if (auto && (freeActive || isStoryLevel())) {
          // 自由英文とストーリーは最後まで読んだら止める
          pos = 0;
          current = S(playlist[0]);
          playing = false;
          started = false;
          buildSteps();
          stepIndex = 0;
          cancelRun();
          hintOverride = freeActive ? "最後まで読みました — タップでもう一度" : "おしまい — タップでもう一度最初から";
          render();
          updateControls();
          return;
        }
        if (auto && settings.shuffle && !isStoryLevel() && playlist.length > 1) {
          var last = playlist[playlist.length - 1];
          shuffleArray(playlist);
          // 同じ文が続かないようにする
          if (playlist[0] === last) { playlist.push(playlist.shift()); }
        }
      }
    } else {
      next = currentInList() ? pos - 1 : pos;
      if (next < 0) next = playlist.length - 1;
    }
    pos = next;
    current = S(playlist[pos]);
    rememberCurrent();
    buildSteps();
    stepIndex = 0;
    hintOverride = "";
    if (playing) {
      runStep();
    } else {
      started = false;
      cancelRun();
      render();
    }
    updateControls();
  }

  function jumpTo(id) {
    var idx = playlist.indexOf(id);
    if (idx < 0) return;
    pos = idx;
    current = S(id);
    rememberCurrent();
    buildSteps();
    stepIndex = 0;
    started = false;
    hintOverride = "";
    if (playing) runStep(); else { cancelRun(); render(); }
    updateControls();
  }

  // 設定変更などで文の頭から出し直す
  function restartSentence() {
    buildSteps();
    stepIndex = 0;
    hintOverride = "";
    if (playing) runStep();
    else { started = false; cancelRun(); render(); }
    updateControls();
  }

  function leaveFree() {
    if (!freeActive) return;
    freeActive = false;
    freeMap = {};
    current = deckKeepId ? byId[deckKeepId] || null : null;
  }

  function rebuildAndRestart() {
    leaveFree();
    var keep = current ? current.id : settings.lastId;
    buildPlaylist(keep);
    rememberCurrent();
    if (!current) {
      playing = false;
      cancelRun();
    }
    restartSentence();
  }

  // ---------------------------------------------------------------
  // 苦手マーク・理解チェック
  // ---------------------------------------------------------------
  function setWeak(id, on, manual) {
    if (freeActive) return;
    if (on) weak.add(id); else weak.delete(id);
    saveWeak();
    if (manual && on && checkRec[id]) { delete checkRec[id]; save(KEY_CHECK, checkRec); }
    if (settings.weakOnly) {
      var idx = playlist.indexOf(id);
      if (!on && idx >= 0) {
        // リストから外す。表示中の文なら表示は続け、次へ進んだら次の文になる
        playlist.splice(idx, 1);
        if (idx <= pos) pos--;
        if (pos < 0 && !(current && current.id === id)) pos = 0;
      } else if (on && idx < 0 && byId[id] && matchesLevel(byId[id])) {
        if (current && current.id === id) {
          playlist.splice(pos + 1, 0, id);
          pos++;
        } else {
          playlist.push(id);
        }
      }
    }
    updateMeta();
    updateControls();
    if (!listSheet.hidden) renderList();
  }

  function toggleWeakCurrent() {
    if (!current || freeActive) return;
    setWeak(current.id, !weak.has(current.id), true);
  }

  // kind: ok | unsure | ng
  function evaluate(kind) {
    if (!current || freeActive) return;
    var id = current.id;
    if (kind === "ok") {
      checkRec[id] = (checkRec[id] || 0) + 1;
      if (checkRec[id] >= UNMARK_STREAK && weak.has(id)) setWeak(id, false);
    } else {
      checkRec[id] = 0;
      if (!weak.has(id)) setWeak(id, true);
    }
    if (!checkRec[id]) delete checkRec[id];
    save(KEY_CHECK, checkRec);
    completeSentence(current.card);
    goSentence(1, true);
  }

  // ---------------------------------------------------------------
  // 描画
  // ---------------------------------------------------------------
  var $ = function (id) { return document.getElementById(id); };
  var stage = $("stage"), display = $("display"), dotsEl = $("dots"), hintEl = $("hint"), evalRow = $("evalRow");
  var levelBadge = $("levelBadge"), counterEl = $("counter"), weakBadge = $("weakBadge"), wpmEl = $("wpm");
  var playBtn = $("playBtn"), playIcon = $("playIcon"), weakBtn = $("weakBtn");
  var prevBtn = $("prevBtn"), nextBtn = $("nextBtn"), freeExitBtn = $("freeExitBtn");
  var settingsSheet = $("settingsSheet"), listSheet = $("listSheet"), addSheet = $("addSheet"), freeSheet = $("freeSheet");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function renderFull(container) {
    var box = el("div", "full");
    var pEn = el("p", "full-en");
    view.en.forEach(function (c, i) {
      if (i > 0) {
        pEn.appendChild(document.createTextNode(" "));
        pEn.appendChild(el("span", "sep", "/"));
        pEn.appendChild(document.createTextNode(" "));
      }
      pEn.appendChild(document.createTextNode(c));
    });
    box.appendChild(pEn);
    if (current.natural) box.appendChild(el("p", "full-ja", current.natural));
    if (view.ja.length && (effectiveMode() !== "alternate" || !started)) {
      // 交互モード以外と再生前は、語順どおりの訳も添える
      box.appendChild(el("p", "full-lit", view.ja.join(" / ")));
    }
    if (current.note) box.appendChild(noteEl("full-note", current.note));
    container.appendChild(box);
  }

  // 表現メモ。「／」で区切った複数の表現は1行ずつ並べる
  function noteEl(cls, text) {
    var box = el(cls === "s-note" ? "span" : "div", cls); // 一覧ではボタンの中に入るので span
    box.appendChild(el("span", "note-label", "表現メモ"));
    text.split("／").forEach(function (t) {
      t = t.trim();
      if (t) box.appendChild(el("span", "note-line", t));
    });
    return box;
  }

  // 単語帳のカード。face: front（表）／back（答え）／en（英語だけ）
  function renderCard(container, face) {
    var c = current, rev = settings.cardReverse;
    var box = el("div", "wcard " + face);
    if (face === "en" || (face === "front" && !rev)) {
      box.appendChild(el("div", "wcard-en big", c.en[0]));
    } else if (face === "front") {
      // 日→英の表：日本語と絵文字とヒントを見て英語を思い出す
      if (c.emoji) box.appendChild(el("div", "wcard-emoji", c.emoji));
      box.appendChild(el("div", "wcard-ja big", c.ja[0]));
      // ヒントに英語が入っていると答えがわかってしまうので、そのときは出さない
      if (c.hint && !/[A-Za-z]/.test(c.hint)) box.appendChild(el("div", "wcard-hint", c.hint));
    } else {
      if (c.emoji) box.appendChild(el("div", "wcard-emoji", c.emoji));
      box.appendChild(el("div", "wcard-en", c.en[0]));
      box.appendChild(el("div", "wcard-ja", c.ja[0]));
      if (c.hint) box.appendChild(el("div", "wcard-hint", c.hint));
    }
    container.appendChild(box);
  }

  var EVAL_LABELS = { sentence: ["わかった", "あやしい", "わからなかった"], card: ["知ってた", "あやしい", "知らなかった"] };
  function setEvalLabels(isCard) {
    var labels = EVAL_LABELS[isCard ? "card" : "sentence"];
    evalRow.querySelectorAll(".eval-label").forEach(function (sp, i) { sp.textContent = labels[i]; });
  }

  function renderTitle(container) {
    var st = STORY_MAP[current.story];
    var box = el("div", "title-card");
    box.appendChild(el("p", "title-label", "STORY"));
    box.appendChild(el("p", "title-en", st.title));
    box.appendChild(el("p", "title-ja", st.titleJa));
    if (st.note) box.appendChild(el("p", "title-note", st.note));
    if (st.source) box.appendChild(el("p", "title-source", "原作：" + st.source + "（やさしい英語に書き直したもの）"));
    container.appendChild(box);
  }

  function render() {
    display.textContent = "";
    display.className = "display";
    dotsEl.textContent = "";
    evalRow.hidden = true;

    if (!current) {
      var msg;
      if (settings.weakOnly) msg = "苦手マークの付いた文がありません。★ボタンで苦手な文に印を付けるか、「苦手だけ再生」をオフにしてください。";
      else if (settings.level === "custom") msg = "まだ追加した文がありません。右上の「追加」から文を貼り付けてください。";
      else msg = "表示できる文がありません。";
      display.appendChild(el("p", "message", msg));
      hintEl.textContent = "";
      updateMeta();
      return;
    }

    var step = steps[stepIndex] || { type: "full" };
    // 再生前（または文を移動した直後の停止中）は文全体をプレビューする
    var preview = !playing && !started;

    if (current.card) {
      var face = preview || step.type === "cback" || step.type === "eval" ? "back" : (step.type === "cen" ? "en" : "front");
      renderCard(display, face);
      if (step.type === "eval" && !preview) { setEvalLabels(true); evalRow.hidden = false; }
      var checkMode = isCheck();
      if (hintOverride) hintEl.textContent = hintOverride;
      else if (playing) hintEl.textContent = checkMode && step.type === "cfront" ? "タップ / スペースで答えを表示" : "";
      else if (preview) hintEl.textContent = checkMode ? "タップ / スペースで開始（自分のペースで進みます）" : "タップ / スペースで再生";
      else hintEl.textContent = "一時停止中 — タップ / スペースで再開";
      updateMeta();
      fitDisplay();
      return;
    }

    var titleCard = step.type === "title" || (preview && current.story && current.storyIndex === 0 && !freeActive);
    if (titleCard) {
      renderTitle(display);
    } else if (preview || step.type === "full") {
      renderFull(display);
    } else if (step.type === "eval") {
      renderFull(display);
      setEvalLabels(false);
      evalRow.hidden = false;
    } else if (step.type === "en") {
      display.appendChild(el("div", "chunk en", view.en[step.i]));
    } else if (step.type === "ja") {
      display.appendChild(el("div", "chunk ja", view.ja[step.i]));
    } else if (step.type === "both" || step.type === "enja") {
      display.classList.add("both");
      // 理解チェックでは英語は表示したまま（アニメーションしない）
      display.appendChild(el("div", "chunk en" + (step.type === "enja" ? " still" : ""), view.en[step.i]));
      display.appendChild(el("div", "chunk ja", view.ja[step.i]));
    }

    // チャンク位置のドット
    var n = view.en.length;
    var at = (step.type === "full" || step.type === "eval") ? n : (step.type === "title" ? -1 : step.i);
    for (var i = 0; i < n; i++) {
      var d = el("span", "dot");
      if (!preview) {
        if (i < at) d.classList.add("done");
        else if (i === at) d.classList.add("now");
      }
      dotsEl.appendChild(d);
    }

    var check = isCheck();
    if (hintOverride) hintEl.textContent = hintOverride;
    else if (playing) {
      if (!check) hintEl.textContent = "";
      else if (step.type === "title") hintEl.textContent = "タップ / スペースで読み始める";
      else if (step.type === "en") hintEl.textContent = "タップ / スペースで訳を表示";
      else if (step.type === "enja") hintEl.textContent = "タップ / スペースで次へ";
      else hintEl.textContent = "";
    }
    else if (preview) hintEl.textContent = check ? "タップ / スペースで開始（自分のペースで進みます）" : "タップ / スペースで再生";
    else hintEl.textContent = "一時停止中 — タップ / スペースで再開";

    updateMeta();
    fitDisplay();
  }

  // 表示エリアに収まらないときは文字を少しずつ小さくする
  function fitDisplay() {
    var f = 1;
    display.style.setProperty("--fit", "1");
    while (f > 0.5 && (display.scrollHeight > display.clientHeight + 1 || display.scrollWidth > display.clientWidth + 1)) {
      f -= 0.06;
      display.style.setProperty("--fit", f.toFixed(2));
    }
  }
  var resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitDisplay, 100);
  });

  function levelLabel(level) {
    if (level === "all") return "すべて";
    if (level === "custom") return "追加した文";
    if (level.indexOf("story:") === 0) return STORY_MAP[level.slice(6)] ? STORY_MAP[level.slice(6)].titleJa : "ストーリー";
    if (level.indexOf("stories:") === 0) return level.slice(8);
    if (level.indexOf("words:") === 0) return SCENE_MAP[level.slice(6)] ? SCENE_MAP[level.slice(6)].title : "単語帳";
    if (level.indexOf("wordcat:") === 0) return level.slice(8);
    return LEVEL_NAMES[level] || level;
  }
  function sentenceLabel(s) {
    if (s.card) return SCENE_MAP[s.scene] ? SCENE_MAP[s.scene].title : "単語帳";
    if (s.story && STORY_MAP[s.story]) return STORY_MAP[s.story].titleJa;
    return levelLabel(s.level) + (s.custom ? "・追加" : "");
  }

  function updateMeta() {
    freeExitBtn.hidden = !freeActive;
    if (!current) {
      levelBadge.textContent = levelLabel(settings.level);
      counterEl.textContent = "0 文";
      weakBadge.hidden = true;
      wpmEl.textContent = "";
      return;
    }
    levelBadge.textContent = freeActive ? "自由英文" : sentenceLabel(current);
    var shown = currentInList() ? (pos + 1) : "–";
    if (!freeActive && current.story && !settings.weakOnly) {
      // ストーリーはその話の中で何文目かを出す
      counterEl.textContent = (current.storyIndex + 1) + " / " + current.storyLen;
    } else {
      counterEl.textContent = shown + " / " + playlist.length;
    }
    weakBadge.hidden = freeActive || !weak.has(current.id);
    if (isCheck()) wpmEl.textContent = "自分のペース";
    else if (current.card) wpmEl.textContent = (settings.speedUp ? "⚡ " : "") + "約 " + currentWpm() + " 枚/分";
    else wpmEl.textContent = (settings.speedUp ? "⚡ " : "") + currentWpm() + " WPM";
  }

  function updateStats() {
    $("stats").textContent = "今日 " + todayCount() + "文・" + todayCards() + "語 ・ 連続 " + streakDays() + "日";
  }

  function updateSpeedInfo() {
    var t = "いまの英語の表示時間：" + enSeconds().toFixed(2) + " 秒";
    if (current) t += "（この文で約 " + currentWpm() + " WPM）";
    if (!settings.speedUp) t += "　※「だんだん速く」はオフです";
    $("speedNow").textContent = t;
  }

  var ICON_PLAY = '<path class="fill" d="M8 5v14l11-7z"/>';
  var ICON_PAUSE = '<path class="fill" d="M7 5h4v14H7zM13 5h4v14h-4z"/>';

  function updateControls() {
    playIcon.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
    playBtn.setAttribute("aria-label", playing ? "一時停止" : "再生");
    var has = !!current;
    playBtn.disabled = !has;
    prevBtn.disabled = !playlist.length && !has;
    nextBtn.disabled = !playlist.length && !has;
    weakBtn.disabled = !has || freeActive;
    weakBtn.setAttribute("aria-pressed", has && !freeActive && weak.has(current.id) ? "true" : "false");

    var modeGroup = $("modeGroup");
    setChecked(modeGroup, "mode", effectiveMode());
    modeGroup.classList.toggle("disabled", freeActive);
    modeGroup.querySelectorAll("button").forEach(function (b) { b.disabled = freeActive; });
    setChecked($("fontGroup"), "font", String(settings.font));
    setChecked($("themeGroup"), "themeValue", settings.theme);
    setChecked($("groupGroup"), "group", String(settings.chunkGroup));
    $("shuffleBtn").setAttribute("aria-pressed", String(settings.shuffle));
    $("weakOnlyBtn").setAttribute("aria-pressed", String(settings.weakOnly));
    $("shuffleBtn").disabled = freeActive || isStoryLevel();
    $("storyFlowCheck").checked = settings.storyFlow;
    var cardContext = !freeActive && ((current && current.card) || isWordLevel(settings.level));
    $("reverseBtn").hidden = !cardContext;
    $("reverseBtn").setAttribute("aria-pressed", String(settings.cardReverse));
    $("weakOnlyBtn").disabled = freeActive;
    $("ttsBtn").setAttribute("aria-pressed", String(settings.tts));
    $("ttsCheck").checked = settings.tts;
    $("ttsFullCheck").checked = settings.ttsFull;
    $("speedUpCheck").checked = settings.speedUp;
    $("levelBtnLabel").textContent = freeActive ? "自由英文" : buttonLabel(settings.level);
    updateSpeedInfo();
  }

  function setChecked(group, key, value) {
    group.querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-checked", b.dataset[key] === value ? "true" : "false");
    });
  }

  function applyAppearance() {
    document.documentElement.style.setProperty("--scale", settings.font);
    if (settings.theme === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", settings.theme);
  }

  // ---------------------------------------------------------------
  // シート（設定・一覧・追加・自由英文）
  // ---------------------------------------------------------------
  var openSheetEl = null;
  var lastFocus = null;

  function openSheet(sheet) {
    if (playing) pause();
    if (openSheetEl) closeSheet();
    lastFocus = document.activeElement;
    sheet.hidden = false;
    openSheetEl = sheet;
    var btn = sheet.querySelector(".close-btn");
    if (btn) btn.focus();
  }
  function closeSheet() {
    if (!openSheetEl) return;
    openSheetEl.hidden = true;
    openSheetEl = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.querySelectorAll(".sheet [data-close]").forEach(function (b) {
    b.addEventListener("click", closeSheet);
  });

  // 一覧
  function renderList() {
    var ol = $("sentenceList");
    ol.textContent = "";
    var note = $("listNote");
    if (freeActive) {
      note.textContent = "自由英文・" + playlist.length + "文。文をタップするとその文へ移動します。";
    } else {
      var lvl = settings.level === "all" ? "短文のすべてのレベル" : levelLabel(settings.level);
      note.textContent = lvl + (settings.weakOnly ? "（苦手のみ）" : "") + "・" + playlist.length + "文" +
        (settings.shuffle ? "・シャッフル順" : "") + "。文をタップするとその文へ移動します。";
    }
    playlist.forEach(function (id) {
      var s = S(id);
      var li = el("li");
      if (current && current.id === id) li.classList.add("current");

      if (!freeActive) {
        var star = el("button", "star-btn", "★");
        star.type = "button";
        star.setAttribute("aria-pressed", weak.has(id) ? "true" : "false");
        star.setAttribute("aria-label", "苦手マーク");
        star.addEventListener("click", function () { setWeak(id, !weak.has(id), true); });
        li.appendChild(star);
      }

      var main = el("button", "s-main");
      main.type = "button";
      main.appendChild(el("span", "s-en", (s.emoji ? s.emoji + " " : "") + (freeActive ? s.en.join(" / ") : s.en.join(" "))));
      if (s.natural) main.appendChild(el("span", "s-ja", s.natural));
      if (s.card) main.appendChild(el("span", "s-ja", s.ja[0] + (s.hint ? "（" + s.hint + "）" : "")));
      if (s.note) main.appendChild(noteEl("s-note", s.note));
      if (!freeActive) main.appendChild(el("span", "s-level", sentenceLabel(s)));
      main.addEventListener("click", function () { jumpTo(id); closeSheet(); });
      li.appendChild(main);

      if (s.custom) {
        var del = el("button", "del-btn", "削除");
        del.type = "button";
        del.addEventListener("click", function () {
          if (!confirm("この文を削除しますか？\n" + s.en.join(" "))) return;
          removeSentence(id);
          renderList();
        });
        li.appendChild(del);
      }
      ol.appendChild(li);
    });
  }

  function removeSentence(id) {
    var i = sentences.findIndex(function (s) { return s.id === id; });
    if (i < 0) return;
    sentences.splice(i, 1);
    delete byId[id];
    weak.delete(id);
    delete checkRec[id];
    saveWeak();
    save(KEY_CHECK, checkRec);
    saveCustom();
    var wasCurrent = current && current.id === id;
    var idx = playlist.indexOf(id);
    if (idx >= 0) {
      playlist.splice(idx, 1);
      if (idx < pos || (idx === pos && pos >= playlist.length)) pos = Math.max(0, pos - 1);
    }
    if (wasCurrent) {
      current = playlist.length ? byId[playlist[pos]] : null;
      restartSentence();
    } else {
      updateMeta();
    }
    updateCustomCount();
  }

  // 追加
  function updateCustomCount() {
    var n = sentences.filter(function (s) { return s.custom; }).length;
    $("customCount").textContent = "（" + n + "文）";
  }

  $("addSubmit").addEventListener("click", function () {
    var text = $("addText").value;
    var res = parseText(text);
    var level = $("addLevel").value;
    var added = 0, dup = 0, firstId = null;
    res.items.forEach(function (s) {
      s.level = level;
      s.custom = true;
      if (addSentence(s)) { added++; if (!firstId) firstId = s.id; } else dup++;
    });
    if (added) saveCustom();

    var out = $("addResult");
    out.textContent = "";
    if (!res.items.length && !res.errors.length) {
      out.appendChild(el("p", "err", "文が入力されていません。"));
      return;
    }
    if (added) out.appendChild(el("p", "ok", added + "文を追加しました。"));
    if (dup) out.appendChild(el("p", "err", dup + "文は同じ英文がすでにあるため追加しませんでした。"));
    res.errors.forEach(function (e) {
      var p = el("p", "err", e.line + "行目：" + e.msg);
      p.appendChild(el("code", null, e.text));
      out.appendChild(p);
    });

    if (added) {
      // エラーの行だけ残して、直しやすくする
      $("addText").value = res.errors.map(function (e) { return e.text; }).join("\n");
      updateCustomCount();
      // 追加した文が再生対象に入るようにする
      leaveFree();
      if (!matchesLevel(byId[firstId])) settings.level = "custom";
      if (settings.weakOnly) settings.weakOnly = false;
      buildPlaylist(firstId);
      rememberCurrent();
      restartSentence();
    }
  });

  $("exportBtn").addEventListener("click", function () {
    var lines = sentences.filter(function (s) { return s.custom; }).map(toLine);
    var out = $("addResult");
    out.textContent = "";
    if (!lines.length) {
      out.appendChild(el("p", "err", "追加した文はまだありません。"));
      return;
    }
    var ta = $("addText");
    ta.value = lines.join("\n");
    ta.focus();
    ta.select();
    out.appendChild(el("p", "ok", lines.length + "文を上の欄に書き出しました。コピーして保存できます（このまま「追加する」を押しても重複は追加されません）。"));
  });

  $("clearCustomBtn").addEventListener("click", function () {
    var ids = sentences.filter(function (s) { return s.custom; }).map(function (s) { return s.id; });
    if (!ids.length) return;
    if (!confirm("追加した " + ids.length + " 文をすべて削除しますか？")) return;
    sentences = sentences.filter(function (s) { return !s.custom; });
    ids.forEach(function (id) { delete byId[id]; weak.delete(id); delete checkRec[id]; });
    saveWeak();
    save(KEY_CHECK, checkRec);
    saveCustom();
    updateCustomCount();
    $("addResult").textContent = "";
    if (current && !byId[current.id] && !freeActive) current = null;
    rebuildAndRestart();
  });

  // 自由英文
  var freeText = $("freeText");
  freeText.value = load(KEY_FREE, "") || "";
  $("freeMax").value = String(settings.freeMax);
  $("freeFullCheck").checked = settings.freeFull;
  $("freeMax").addEventListener("change", function (e) {
    settings.freeMax = parseInt(e.target.value, 10) || 6;
    saveSettings();
    if (!$("freePreview").hidden && $("freePreview").childNodes.length) showFreePreview();
  });
  $("freeFullCheck").addEventListener("change", function (e) {
    settings.freeFull = e.target.checked;
    saveSettings();
    if (freeActive) restartSentence();
  });
  freeText.addEventListener("input", function () { save(KEY_FREE, freeText.value); });

  function showFreePreview() {
    var list = buildFreeSentences(freeText.value, settings.freeMax);
    var ol = $("freePreview");
    ol.textContent = "";
    $("freeResult").textContent = "";
    if (!list.length) {
      $("freeResult").appendChild(el("p", "err", "英文が入力されていません。"));
      return list;
    }
    $("freeResult").appendChild(el("p", "ok", list.length + "文に分けました。"));
    list.forEach(function (s) { ol.appendChild(el("li", null, s.en.join(" / "))); });
    return list;
  }
  $("freePreviewBtn").addEventListener("click", showFreePreview);

  $("freeStartBtn").addEventListener("click", function () {
    save(KEY_FREE, freeText.value);
    var list = buildFreeSentences(freeText.value, settings.freeMax);
    $("freePreview").textContent = "";
    $("freeResult").textContent = "";
    if (!list.length) {
      $("freeResult").appendChild(el("p", "err", "英文が入力されていません。"));
      return;
    }
    if (!freeActive) deckKeepId = current ? current.id : settings.lastId;
    freeActive = true;
    freeMap = {};
    list.forEach(function (s) { freeMap[s.id] = s; });
    playlist = list.map(function (s) { return s.id; });
    pos = 0;
    current = list[0];
    closeSheet();
    buildSteps();
    stepIndex = 0;
    play();  // ボタン操作の中で始めるので iPhone でも読み上げが使える
  });

  function exitFree() {
    if (!freeActive) return;
    playing = false;
    cancelRun();
    leaveFree();
    buildPlaylist(current ? current.id : settings.lastId);
    rememberCurrent();
    restartSentence();
  }
  freeExitBtn.addEventListener("click", function (e) { e.stopPropagation(); exitFree(); });

  // ---------------------------------------------------------------
  // 設定パネルの入力
  // ---------------------------------------------------------------
  function bindRange(id, key, fmt, onChange) {
    var input = $(id), out = $(id + "Out");
    input.value = settings[key];
    out.textContent = fmt(settings[key]);
    input.addEventListener("input", function () {
      settings[key] = parseFloat(input.value);
      out.textContent = fmt(settings[key]);
      saveSettings();
      if (onChange) onChange();
      updateMeta();
      updateSpeedInfo();
    });
  }
  var sec = function (v) { return v.toFixed(1) + " 秒"; };
  bindRange("enTime", "enTime", sec, function () { speedEn = settings.enTime; });
  bindRange("jaTime", "jaTime", sec);
  bindRange("fullTime", "fullTime", sec);
  bindRange("ttsRate", "ttsRate", function (v) { return v.toFixed(2) + " 倍"; });
  bindRange("speedRate", "speedRate", function (v) { return v.toFixed(0) + " %"; });
  bindRange("speedMin", "speedMin", sec, function () { speedEn = Math.max(speedFloor(), speedEn); });

  $("speedUpCheck").addEventListener("change", function (e) {
    settings.speedUp = e.target.checked;
    saveSettings();
    resetSpeed();
    updateControls();
  });
  $("speedResetBtn").addEventListener("click", resetSpeed);

  $("groupGroup").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    var g = parseInt(b.dataset.group, 10);
    if (g === settings.chunkGroup) return;
    settings.chunkGroup = g;
    saveSettings();
    restartSentence();
  });

  function setTTS(on) {
    settings.tts = on;
    saveSettings();
    if (on) unlockTTS(); else stopSpeech();
    updateControls();
  }
  $("ttsCheck").addEventListener("change", function (e) { setTTS(e.target.checked); });
  $("ttsFullCheck").addEventListener("change", function (e) {
    settings.ttsFull = e.target.checked;
    saveSettings();
  });
  $("ttsBtn").addEventListener("click", function () { setTTS(!settings.tts); });
  $("voiceSelect").addEventListener("change", function (e) {
    settings.voiceURI = e.target.value;
    saveSettings();
    pickVoice();
  });
  $("voiceTestBtn").addEventListener("click", function () {
    unlockTTS();
    speak("Reading English in the order it is written.");
  });
  if (!hasTTS) {
    $("ttsNote").textContent = "このブラウザは音声読み上げに対応していません。";
    ["ttsBtn", "ttsCheck", "ttsFullCheck", "voiceSelect", "voiceTestBtn"].forEach(function (id) { $(id).disabled = true; });
  }

  $("fontGroup").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    settings.font = parseFloat(b.dataset.font);
    saveSettings(); applyAppearance(); updateControls(); fitDisplay();
  });
  $("themeGroup").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    settings.theme = b.dataset.themeValue;
    saveSettings(); applyAppearance(); updateControls();
  });

  $("clearWeakBtn").addEventListener("click", function () {
    if (!weak.size) return;
    if (!confirm("苦手マーク（" + weak.size + "文）をすべて外しますか？")) return;
    weak.clear();
    saveWeak();
    if (settings.weakOnly && !freeActive) rebuildAndRestart();
    else { updateMeta(); updateControls(); }
  });

  $("storyFlowCheck").addEventListener("change", function (e) {
    settings.storyFlow = e.target.checked;
    saveSettings();
    if (current && current.story && !freeActive) restartSentence();
  });

  // ---------------------------------------------------------------
  // 教材を選ぶ（タブで「例文／よく使う表現／ストーリー」を切り替える）
  // ---------------------------------------------------------------
  var PICKER = {
    short: [
      { v: "all", t: "すべての例文", sub: "例文とよく使う表現をまとめて", all: true },
      { v: "basic", t: "基礎", sub: "短い基本文" },
      { v: "daily", t: "日常会話", sub: "日常のやりとり" },
      { v: "business", t: "ビジネス", sub: "会議・メール・交渉の定番表現" },
      { v: "advanced", t: "上級", sub: "1文20〜35語。倒置・仮定法・分詞構文など" },
      { v: "bizadv", t: "ビジネス上級", sub: "議論・交渉・提案書・AI やデータ活用" },
      { v: "custom", t: "追加した文", sub: "「追加」から自分で入れた文" }
    ],
    phrase: [
      { v: "phrase-basic", t: "基礎", sub: "pick up／run into／Hang on a second. など" },
      { v: "phrase-daily", t: "日常", sub: "That makes sense.／sleep on it／My bad. など" },
      { v: "phrase-biz", t: "ビジネス", sub: "walk through／touch base／circle back など" }
    ]
  };
  var pickerTab = "short";
  var pickerSheet = $("pickerSheet");

  function countFor(level) {
    var n = 0;
    sentences.forEach(function (s) { if (matchesLevel(s, level)) n++; });
    return n;
  }
  function isWordLevel(level) {
    return level === "words" || level.indexOf("words:") === 0 || level.indexOf("wordcat:") === 0;
  }
  function tabOf(level) {
    if (isWordLevel(level)) return "words";
    if (level.indexOf("phrase-") === 0) return "phrase";
    if (level === "story" || level.indexOf("story:") === 0 || level.indexOf("stories:") === 0) return "story";
    return "short";
  }
  // 上のボタンに出す名前
  function buttonLabel(level) {
    if (level === "all") return "すべての例文";
    if (level === "story") return "すべてのストーリー";
    if (level.indexOf("stories:") === 0) return level.slice(8) + "（まとめて）";
    if (level === "words") return "単語帳・すべて";
    if (level.indexOf("wordcat:") === 0) return "単語帳・" + level.slice(8);
    if (level.indexOf("words:") === 0) {
      var sc = SCENE_MAP[level.slice(6)];
      return sc ? (sc.emoji ? sc.emoji + " " : "") + sc.title : "単語帳";
    }
    return levelLabel(level);
  }

  function pickItem(level, title, sub, cls) {
    var b = el("button", "pick-item" + (cls ? " " + cls : ""));
    b.type = "button";
    b.dataset.level = level;
    b.setAttribute("aria-pressed", !freeActive && settings.level === level ? "true" : "false");
    var txt = el("span", "pick-text");
    txt.appendChild(el("span", "pick-title", title));
    if (sub) txt.appendChild(el("span", "pick-sub", sub));
    b.appendChild(txt);
    b.appendChild(el("span", "pick-count", countFor(level) + (isWordLevel(level) ? "語" : "文")));
    return b;
  }

  function renderPicker(tab) {
    pickerTab = tab;
    $("pickerTabs").querySelectorAll("button").forEach(function (b) {
      b.setAttribute("aria-checked", b.dataset.tab === tab ? "true" : "false");
      b.setAttribute("aria-selected", b.dataset.tab === tab ? "true" : "false");
    });
    var list = $("pickerList");
    list.textContent = "";
    if (tab === "story") {
      if (!STORIES.length) { list.appendChild(el("p", "pick-empty", "ストーリーはまだありません。")); return; }
      list.appendChild(pickItem("story", "すべてのストーリー", STORIES.length + "話を順番に", "all"));
      STORY_GROUPS.forEach(function (g) {
        list.appendChild(el("h3", "pick-group", g));
        var stories = STORIES.filter(function (st) { return st.group === g; });
        if (stories.length > 1) list.appendChild(pickItem("stories:" + g, "まとめて読む", stories.length + "話を順番に", "all"));
        stories.forEach(function (st) {
          var level = st.note ? st.note.split("・")[0] : "";
          list.appendChild(pickItem("story:" + st.key, st.titleJa, st.title + (level && g.indexOf(level) < 0 ? "・" + level : "")));
        });
      });
      return;
    }
    if (tab === "words") {
      if (!SCENES.length) { list.appendChild(el("p", "pick-empty", "単語帳はまだありません。")); return; }
      list.appendChild(el("p", "pick-group", "目に浮かびやすい物と動作を場面ごとに。画面下の「日→英」で逆向きにもできます"));
      list.appendChild(pickItem("words", "すべての単語", SCENES.length + "つの場面をまとめて", "all"));
      // 見出し（家の中・外出・旅行など）ごとに場面を並べる
      WORD_CATS.forEach(function (cat) {
        var scenes = SCENES.filter(function (sc) { return sc.category === cat; });
        list.appendChild(el("h3", "pick-group", cat));
        if (scenes.length > 1) list.appendChild(pickItem("wordcat:" + cat, "まとめて覚える", scenes.map(function (sc) { return sc.title; }).join("・"), "all"));
        scenes.forEach(function (sc) {
          list.appendChild(pickItem("words:" + sc.key, (sc.emoji ? sc.emoji + " " : "") + sc.title, sc.desc));
        });
      });
      return;
    }
    if (tab === "phrase") list.appendChild(el("p", "pick-group", "教科書にはあまり出ない、ネイティブがよく使う言い回し（表現メモ付き）"));
    PICKER[tab].forEach(function (it) { list.appendChild(pickItem(it.v, it.t, it.sub, it.all ? "all" : "")); });
  }

  function selectLevel(level) {
    if (!level) return;
    settings.level = level;
    playing = playing && !freeActive;
    rebuildAndRestart();
  }

  $("levelBtn").addEventListener("click", function () {
    renderPicker(tabOf(freeActive ? "all" : settings.level));
    openSheet(pickerSheet);
    var cur = pickerSheet.querySelector('.pick-item[aria-pressed="true"]');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "center" });
  });
  $("pickerTabs").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (b) { renderPicker(b.dataset.tab); pickerSheet.querySelector(".picker-body").scrollTop = 0; }
  });
  $("pickerList").addEventListener("click", function (e) {
    var b = e.target.closest("[data-level]");
    if (!b) return;
    closeSheet();
    selectLevel(b.dataset.level);
  });

  // 保存されていたストーリーがなくなっていたら「すべてのストーリー」にする
  if (settings.level.indexOf("story:") === 0 && !STORY_MAP[settings.level.slice(6)]) settings.level = "story";
  if (settings.level.indexOf("stories:") === 0 && STORY_GROUPS.indexOf(settings.level.slice(8)) < 0) settings.level = "story";
  if (settings.level.indexOf("words:") === 0 && !SCENE_MAP[settings.level.slice(6)]) settings.level = "words";
  if (settings.level.indexOf("wordcat:") === 0 && WORD_CATS.indexOf(settings.level.slice(8)) < 0) settings.level = "words";

  // 単語帳の向き（英→日／日→英）
  function toggleReverse() {
    settings.cardReverse = !settings.cardReverse;
    saveSettings();
    if (current && current.card) restartSentence(); else updateControls();
  }
  $("reverseBtn").addEventListener("click", toggleReverse);

  // ---------------------------------------------------------------
  // メイン画面の操作
  // ---------------------------------------------------------------
  function setMode(mode) {
    if (!mode || mode === settings.mode || freeActive) return;
    settings.mode = mode;
    saveSettings();
    restartSentence();
  }
  $("modeGroup").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (b) setMode(b.dataset.mode);
  });

  $("shuffleBtn").addEventListener("click", function () {
    if (freeActive) return;
    settings.shuffle = !settings.shuffle;
    var keep = current ? current.id : null;
    buildPlaylist(keep);
    saveSettings();
    updateMeta();
    updateControls();
  });
  $("weakOnlyBtn").addEventListener("click", function () {
    if (freeActive) return;
    settings.weakOnly = !settings.weakOnly;
    var keepCurrent = current && (!settings.weakOnly || weak.has(current.id));
    buildPlaylist(keepCurrent ? current.id : null);
    rememberCurrent();
    if (keepCurrent) { updateMeta(); updateControls(); }
    else { if (!current) { playing = false; cancelRun(); } restartSentence(); }
  });

  playBtn.addEventListener("click", function () {
    if (!playing && hintOverride) hintOverride = "";
    togglePlay();
  });
  prevBtn.addEventListener("click", function () { goSentence(-1); });
  nextBtn.addEventListener("click", function () { goSentence(1); });
  weakBtn.addEventListener("click", toggleWeakCurrent);
  stage.addEventListener("click", function (e) {
    var ev = e.target.closest("[data-eval]");
    if (ev) { evaluate(ev.dataset.eval); return; }
    if (e.target.closest("button")) return;
    primaryAction();
  });

  $("settingsBtn").addEventListener("click", function () { openSheet(settingsSheet); });
  $("aboutBtn").addEventListener("click", function () { openSheet($("aboutSheet")); });
  $("listBtn").addEventListener("click", function () {
    renderList();
    openSheet(listSheet);
    var cur = listSheet.querySelector("li.current");
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "center" });
  });
  $("addBtn").addEventListener("click", function () {
    updateCustomCount();
    $("addResult").textContent = "";
    var lv = settings.level;
    if ($("addLevel").querySelector('option[value="' + lv + '"]')) $("addLevel").value = lv;
    openSheet(addSheet);
  });
  $("freeBtn").addEventListener("click", function () {
    $("freeResult").textContent = "";
    $("freePreview").textContent = "";
    openSheet(freeSheet);
  });

  // キーボード
  function isTyping(t) {
    return t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable);
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && openSheetEl) { closeSheet(); return; }
    if (openSheetEl || isTyping(e.target) || e.ctrlKey || e.metaKey || e.altKey) return;
    var step = steps[stepIndex];
    var evalShown = current && step && step.type === "eval" && started && !freeActive;
    if (evalShown && (e.key === "1" || e.key === "2" || e.key === "3")) {
      evaluate({ "1": "ok", "2": "unsure", "3": "ng" }[e.key]);
      return;
    }
    switch (e.key) {
      case " ":
      case "Spacebar":
        e.preventDefault();
        if (!e.repeat) primaryAction();
        break;
      case "ArrowRight": e.preventDefault(); goSentence(1); break;
      case "ArrowLeft": e.preventDefault(); goSentence(-1); break;
      case "m": case "M": toggleWeakCurrent(); break;
      case "r": case "R": if (current && current.card) toggleReverse(); break;
      case "1": setMode("alternate"); break;
      case "2": setMode("english"); break;
      case "3": setMode("both"); break;
      case "4": setMode("check"); break;
    }
  });
  // フォーカス中のボタンがスペースで押されて二重に反応しないようにする
  document.addEventListener("keyup", function (e) {
    if ((e.key === " " || e.key === "Spacebar") && !openSheetEl && !isTyping(e.target)) e.preventDefault();
  });

  // 画面が隠れたら止める（スマホでアプリを切り替えたときなど）
  document.addEventListener("visibilitychange", function () {
    if (document.hidden && playing) pause();
    if (!document.hidden) updateStats(); // 日付が変わっていたら表示を更新
  });

  // ---------------------------------------------------------------
  // 起動
  // ---------------------------------------------------------------
  applyAppearance();
  pickVoice();
  buildPlaylist(settings.lastId);
  buildSteps();
  render();
  updateControls();
  updateCustomCount();
  updateStats();

  // 動作確認用（コンソールから参照できるように）
  window.EnglishRSVP = {
    parseText: parseText,
    setLevel: selectLevel,
    level: function () { return settings.level; },
    splitSentences: splitSentences,
    chunkSentence: chunkSentence,
    state: function () {
      return {
        playing: playing, id: current && current.id, pos: pos, stepIndex: stepIndex,
        step: steps[stepIndex], total: playlist.length, free: freeActive,
        view: view, speedEn: speedEn, wpm: currentWpm()
      };
    }
  };
})();
