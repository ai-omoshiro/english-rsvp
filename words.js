/*
 * 単語帳データ
 *
 * 1行 = 1枚のカード。形式：
 *   英語 || 日本語 || 場面のひとこと（ヒント） || 絵文字
 *
 * - ヒントと絵文字は省略できます（絵文字は、ぴったり合うものだけ付けています）。
 * - category は「教材を選ぶ」画面の単語帳タブでの見出しです（家の中・外出・旅行など）。
 * - 「目に浮かぶか」を基準に、具体的な名詞・動作のかたまり（動詞＋名詞）・形容詞＋名詞を選んでいます。
 * - 空行と「#」で始まる行は無視されます。
 * - 英語を書き換えると、そのカードの苦手マークは外れます（英語から ID を作っているため）。
 */
window.RSVP_WORDS = [
  {
    scene: "kitchen",
    category: "家の中",
    title: "台所",
    emoji: "🍳",
    desc: "料理と後片づけ。道具の名前と、台所でよくする動作",
    text: `
colander || ざる || パスタや野菜の水を切る、穴のあいた器
cutting board || まな板 || 野菜や肉を切るときの板
ladle || おたま || スープをすくう道具
spatula || フライ返し・ヘラ || 焼いているものをひっくり返す道具
frying pan || フライパン || 卵や肉を焼く平たいなべ || 🍳
pot || 深なべ || スープを作ったり、パスタをゆでたりする || 🍲
kettle || やかん・電気ケトル || お湯を沸かす道具
cupboard || 食器棚・戸棚 || 皿やコップをしまっておく棚
dish soap || 食器用洗剤 || 皿洗いに使う洗剤 || 🧴
leftovers || 残り物 || 前の食事の残り。次の日に温めて食べる
do the dishes || 皿洗いをする || 食後に皿を洗う
set the table || 食卓の準備をする || 皿やフォークを並べる || 🍽️
clear the table || 食卓を片づける || 食べ終わった皿を下げる
preheat the oven || オーブンを予熱する || 焼く前に温めておく
boil water || お湯を沸かす || やかんやなべで
chop an onion || 玉ねぎを刻む || 包丁で細かく切る || 🧅
peel a potato || じゃがいもの皮をむく || ピーラーや包丁で || 🥔
a burnt pan || 焦げたなべ・フライパン || 火にかけすぎて底が黒い
soggy fries || しなっとしたフライドポテト || 時間がたってカリカリ感がない || 🍟
a sharp knife || よく切れる包丁 || 切れない包丁は a dull knife || 🔪
an empty fridge || 空っぽの冷蔵庫 || 買い物に行かなきゃ
a sink full of dishes || 洗い物がたまった流し || 皿が山積みになっている
`
  },
  {
    scene: "home",
    category: "家の中",
    title: "洗面所・お風呂・家の中",
    emoji: "🛁",
    desc: "家の中の物と家事。トラブルの言い方も",
    text: `
faucet || 蛇口 || 水が出るところ。イギリスでは tap || 🚰
towel rack || タオル掛け || タオルをかけておく棒
toothbrush || 歯ブラシ || 歯みがき粉は toothpaste || 🪥
laundry basket || 洗濯かご || 汚れた服を入れておく || 🧺
drawer || 引き出し || 机やたんすの、手前に引いて開ける部分
closet || クローゼット・押し入れ || 服をかけてしまう場所
light switch || 電気のスイッチ || 壁にある、明かりをつけるボタン
doorbell || 玄関のチャイム || ピンポンと鳴らす || 🔔
trash can || ゴミ箱 || イギリスでは bin || 🗑️
vacuum cleaner || 掃除機 || 床のほこりを吸い取る
take out the trash || ゴミを出す || 決まった日に外のゴミ置き場へ
do the laundry || 洗濯をする || 洗濯機を回す
hang the laundry || 洗濯物を干す || ベランダや物干しに
fold the laundry || 洗濯物をたたむ || 乾いた服をたたむ
make the bed || ベッドを整える || 起きた後、布団や枕をきれいに直す || 🛏️
run a bath || お風呂にお湯をためる || 湯船にお湯を入れる || 🛁
take a shower || シャワーを浴びる || 🚿
turn off the lights || 電気を消す || 部屋を出るときや寝る前に
a leaky faucet || 水漏れする蛇口 || ポタポタと水が落ち続ける || 💧
a clogged drain || 詰まった排水口 || 水が流れていかない
a messy room || 散らかった部屋 || 物が出しっぱなし
a power outage || 停電 || 急に家じゅうの電気が消える
`
  },
  {
    scene: "clothes",
    category: "家の中",
    title: "服・身だしなみ",
    emoji: "👕",
    desc: "服の部分と、着る・整える動作",
    text: `
sleeve || 袖 || 長袖は long sleeves
collar || 襟 || シャツの首まわり
zipper || ファスナー・チャック || イギリスでは zip
hoodie || フード付きのパーカー || 英語の parka は防寒用の厚いジャケット
pajamas || パジャマ || 寝るときに着る服
shoelace || 靴ひも || 👟
hair dryer || ドライヤー || dryer だけだと衣類乾燥機の意味にもなる
lip balm || リップクリーム || lip cream はあまり使わない
a wrinkled shirt || しわくちゃのシャツ || アイロンが必要
a stain || しみ・汚れ || コーヒーをこぼして
a loose button || 取れかけたボタン || 糸がゆるんでぶらぶら
tight jeans || きついジーンズ || ゆるいは loose
put on a jacket || ジャケットを着る || 脱ぐのは take off
take off my shoes || 靴を脱ぐ || 日本の家に上がるとき
tie my shoes || 靴ひもを結ぶ ||
button up my coat || コートのボタンを留める || 寒い日に上までしっかり
iron a shirt || シャツにアイロンをかける ||
get a haircut || 髪を切ってもらう || 美容院や床屋で || ✂️
brush my hair || 髪をとかす || くしやブラシで
shave || ひげをそる || 🪒
roll up my sleeves || 袖をまくる || 「本気で取りかかる」の意味でも使う
put on makeup || 化粧をする || 落とすのは take off my makeup || 💄
`
  },
  {
    scene: "diy",
    category: "家の中",
    title: "工具・DIY",
    emoji: "🔧",
    desc: "道具の名前と、直す・組み立てる動作",
    text: `
hammer || 金づち・ハンマー || 🔨
screwdriver || ドライバー（ねじ回し） || driver だけだと「運転手」
screw || ねじ || 🔩
nail || 釘 || 金づちで打つ
ladder || はしご || 🪜
tape measure || メジャー（巻き尺） || measure だけでは通じにくい
toolbox || 工具箱 || 🧰
glue || 接着剤・のり ||
duct tape || ガムテープ || gum tape は通じない
light bulb || 電球 || 💡
flashlight || 懐中電灯 || イギリスでは torch || 🔦
battery || 電池 || 🔋
extension cord || 延長コード || コンセントが遠いときに
a loose screw || ゆるんだねじ || ぐらぐらする
a broken chair || 壊れたいす || 脚がぐらつく
a squeaky door || きしむドア || 開けるとギーッと鳴る
fix a leak || 水漏れを直す ||
change a light bulb || 電球を替える || 切れた電球を新しく
hang a picture || 絵を壁に掛ける || 🖼️
put together furniture || 家具を組み立てる || assemble furniture とも言う
paint the wall || 壁にペンキを塗る || 🎨
tighten a screw || ねじを締める || ゆるめるのは loosen
`
  },
  {
    scene: "town",
    category: "外出・旅行",
    title: "街・交通",
    emoji: "🚦",
    desc: "道路・駅・乗り物。道案内でも使う",
    text: `
crosswalk || 横断歩道 || イギリスでは zebra crossing
intersection || 交差点 || 道と道が交わるところ
traffic light || 信号 || 🚦
sidewalk || 歩道 || イギリスでは pavement
curb || 縁石 || 歩道と車道の境目の段差
bus stop || バス停 || 🚏
platform || （駅の）ホーム || 電車を待つところ。「3番線」は platform 3 || 🚉
ticket gate || 改札 || 切符やカードを通すところ
vending machine || 自動販売機 || 飲み物を買う機械
parking lot || 駐車場 || イギリスでは car park || 🅿️
traffic jam || 渋滞 || 車がずらっと並んで動かない
a flat tire || パンク || タイヤの空気が抜けてぺちゃんこ
a crowded train || 満員電車 || ぎゅうぎゅう詰め
a one-way street || 一方通行の道 || 片方向にしか進めない
a dead end || 行き止まり || その先に道がない
miss the train || 電車に乗り遅れる || ホームに着いたらドアが閉まった
catch a taxi || タクシーをつかまえる || 手を挙げて止める || 🚕
get off the bus || バスを降りる || 乗るのは get on the bus
change trains || 電車を乗り換える || 「新宿で乗り換える」は change trains at Shinjuku
give directions || 道を教える || 「駅はどこですか？」と聞かれて
take a detour || 回り道をする || 工事中なので遠回り
run a red light || 信号無視をする || 赤信号なのに進む
`
  },
  {
    scene: "car",
    category: "外出・旅行",
    title: "車・運転",
    emoji: "🚗",
    desc: "車の部分と、運転でよく使う言い方",
    text: `
seatbelt || シートベルト ||
headlights || ヘッドライト || 夜道を照らす前の明かり
turn signal || ウインカー || winker は和製英語
horn || クラクション || 「鳴らす」は honk the horn
trunk || （車の）トランク || イギリスでは boot
hood || ボンネット || イギリスでは bonnet
license plate || ナンバープレート || number plate はイギリスの言い方
driver's license || 運転免許証 || 🪪
speed limit || 制限速度 ||
highway || 高速道路 || イギリスでは motorway
toll || 通行料 || 高速道路や橋の料金
a parking ticket || 駐車違反の切符 || フロントガラスにはさまれる
a speeding ticket || スピード違反の切符 ||
a rental car || レンタカー ||
buckle up || シートベルトを締める || 車に乗るときの決まり文句
fill up the tank || ガソリンを満タンにする || ⛽
park the car || 車を止める（駐車する） || 🅿️
pull over || 車を道の端に寄せて止める ||
back up || 車をバックさせる || 「バックする」は back up
give someone a ride || 人を車に乗せてあげる || 「乗せていこうか？」は Do you need a ride?
get pulled over || 警察に車を止められる ||
change lanes || 車線を変更する ||
`
  },
  {
    scene: "shop",
    category: "外出・旅行",
    title: "お店・買い物",
    emoji: "🛒",
    desc: "レジ・試着・支払い・返品",
    text: `
receipt || レシート・領収書 || 買い物のあとにもらう紙 || 🧾
cashier || レジ係 || レジで会計をしてくれる人
checkout || （お店の）レジ || 「レジ」は checkout や register と言う
shopping cart || ショッピングカート || イギリスでは trolley || 🛒
fitting room || 試着室 || 服を試しに着る小部屋
price tag || 値札 || 🏷️
aisle || （お店の）通路 || 「3番通路」は aisle 3
coupon || クーポン・割引券 || 見せると安くなる
refund || 返金 || お金を返してもらうこと
change || おつり || 「おつりです」は Here's your change.
free sample || 試食・試供品 || 無料で試せる
on sale || セール中で || 値下げされている
out of stock || 在庫切れで || 売り切れて棚にない
a long line || 長い行列 || イギリスでは a long queue
a bargain || 掘り出し物・お買い得品 || 思ったよりずっと安い
try on a jacket || ジャケットを試着する || 試着室で
pay in cash || 現金で払う || 💵
pay by card || カードで払う || 💳
return a sweater || セーターを返品する || サイズが合わなかった
wrap a gift || プレゼントを包む || 🎁
window-shop || ウィンドウショッピングをする || 見て回るだけで買わない
ask for the check || お会計を頼む || レストランで。イギリスでは bill
`
  },
  {
    scene: "restaurant",
    category: "外出・旅行",
    title: "レストラン・カフェ",
    emoji: "🍽️",
    desc: "注文・持ち帰り・支払い",
    text: `
a table for two || 2名席 || 「2名です」と伝えるとき
appetizer || 前菜 || イギリスでは starter
main course || メイン料理 ||
dessert || デザート || 🍰
to-go box || 持ち帰り用の容器 || 食べきれなかった料理を入れる
napkin || 紙ナプキン || 口や手をふく紙
straw || ストロー || 🥤
tip || チップ || アメリカでは料金の15〜20％ほど
free refill || おかわり無料 || 飲み物のおかわり
today's special || 本日のおすすめ || 黒板に書いてある
medium-rare || ミディアムレア || ステーキの焼き加減。よく焼きは well-done || 🥩
a spicy dish || 辛い料理 || 🌶️
a sweet tooth || 甘いもの好き || I have a sweet tooth. の形で使う
a cup of decaf || カフェインレスのコーヒー || 夜に飲むなら || ☕
for here or to go || 店内か持ち帰りか || カウンターでよく聞かれる
order a drink || 飲み物を注文する ||
make a reservation || 予約をする || 席を取っておいてもらう
wait for a table || 席が空くのを待つ || 人気店で
share a dish || 料理を分け合う || 大皿をみんなで
leave a tip || チップを置いていく || テーブルに
skip dessert || デザートをやめておく || おなかがいっぱいで
pay at the counter || レジで払う || テーブル会計ではない店
`
  },
  {
    scene: "airport",
    category: "外出・旅行",
    title: "空港・飛行機",
    emoji: "✈️",
    desc: "搭乗手続き・機内・入国",
    text: `
boarding pass || 搭乗券 || 飛行機に乗るときに見せる券 || 🎫
carry-on || 機内持ち込みの手荷物 || 座席の上の棚に入れるかばん || 🧳
checked baggage || 預け入れ荷物 || カウンターで預けるスーツケース
baggage claim || 手荷物受取所 || 着いたあと荷物が回ってくる所
gate || 搭乗口 || 「5番ゲート」は gate 5
aisle seat || 通路側の席 || 窓側は window seat || 💺
overhead bin || 頭上の荷物入れ || 座席の上にあるふた付きの棚
seatbelt sign || シートベルト着用サイン || ポーンと鳴って点灯する
customs || 税関 || 持ち込む物を申告する所
passport control || 入国審査 || パスポートを見せる所 || 🛂
jet lag || 時差ぼけ || 着いた日の夜に眠れない
a layover || 乗り継ぎの待ち時間 || 途中の空港で数時間待つ
a delayed flight || 遅れている便 || 出発時刻が遅れた
a connecting flight || 乗り継ぎ便 || 次に乗る飛行機
check in for a flight || 搭乗手続きをする || カウンターや機械で
go through security || 保安検査を通る || 荷物をトレーに入れて機械に通す
board the plane || 飛行機に乗り込む || 搭乗が始まった || 🛫
take off || 離陸する || 着陸は land
fasten your seatbelt || シートベルトを締める || 機内アナウンスの定番
recline my seat || 座席を倒す || 後ろの人に一声かけて
have nothing to declare || 申告するものはない || 税関で聞かれたときの答え
miss my connection || 乗り継ぎ便に乗り遅れる || 前の便が遅れて
`
  },
  {
    scene: "hotel",
    category: "外出・旅行",
    title: "ホテル・旅行",
    emoji: "🏨",
    desc: "チェックインから観光まで",
    text: `
front desk || フロント || ホテルの受付。front だけでは通じない
lobby || ロビー || 入ってすぐの広い場所
room key || 部屋の鍵 || カードキーは key card || 🔑
luggage || 旅行の荷物 || 数えられない名詞。1つなら a piece of luggage
souvenir || お土産 || 旅先で買う記念の品
a tour guide || 観光ガイド || 旗を持って案内してくれる人
a single room || シングルルーム || ひとり用の部屋
a room with a view || 眺めのいい部屋 || 窓から海や山が見える
a non-smoking room || 禁煙の部屋 ||
free Wi-Fi || 無料Wi-Fi || パスワードはフロントで
an extra towel || 追加のタオル || 「もう1枚ください」と頼む
check in || チェックインする || ホテルに着いて受付をする
check out || チェックアウトする || 鍵を返して出る
late checkout || 遅めのチェックアウト || 昼過ぎまで部屋にいたいとき
book a room || 部屋を予約する ||
store my luggage || 荷物を預ける || チェックイン前やチェックアウト後に
order room service || ルームサービスを頼む || 部屋に食事を運んでもらう
take a day trip || 日帰り旅行をする || 朝出て夜に戻る
go sightseeing || 観光に行く || 名所を見て回る
get lost || 道に迷う || 地図アプリを見ても
take a picture || 写真を撮る || 「撮ってもらえますか？」は Could you take a picture of us? || 📷
pack my suitcase || スーツケースに荷物を詰める || 出発前の夜に
`
  },
  {
    scene: "body",
    category: "人と体",
    title: "体・病院",
    emoji: "🩺",
    desc: "体の部分と、病院や薬局で使う言い方",
    text: `
ankle || 足首 || くつしたのすぐ上
wrist || 手首 || 腕時計をつけるところ || ⌚
elbow || ひじ || 腕の曲がるところ
eyebrow || まゆげ || 目の上の毛
forehead || おでこ・額 || 熱を測るときに手を当てるところ
heel || かかと || 足の裏のいちばん後ろ
bruise || あざ || ぶつけてできる青い跡
rash || 発疹・かぶれ || 肌が赤くぶつぶつになる
prescription || 処方せん || 医者が書く、薬の指示の紙
pharmacy || 薬局 || drugstore とも言う || 💊
painkiller || 痛み止め || 頭痛や歯の痛みのときに飲む薬
sneeze || くしゃみをする || ハクション！ || 🤧
catch a cold || 風邪をひく || 「ひいている」は have a cold
have a fever || 熱がある || 🤒
get a shot || 注射を打ってもらう || 予防接種など || 💉
sprain my ankle || 足首をねんざする || 階段を踏み外して
blow my nose || 鼻をかむ || ティッシュで
a sore throat || のどの痛み || つばを飲みこむと痛い
a runny nose || 鼻水 || 鼻水が止まらない状態
a stiff neck || 首のこり・寝違え || 首が回らない
an upset stomach || おなかの調子が悪いこと || 食べすぎや食あたりで
make an appointment || 予約を取る || 病院や美容院で || 📅
`
  },
  {
    scene: "gestures",
    category: "人と体",
    title: "表情・しぐさ・気持ち",
    emoji: "😊",
    desc: "日本語にない動作も多い。物語を読むときにも役立つ",
    text: `
nod || うなずく || 「はい」の合図
shrug || 肩をすくめる || 「さあね」「知らない」のしぐさ || 🤷
frown || 顔をしかめる || 眉を寄せて不満そうに
wink || ウインクする || 片目をつぶる || 😉
blush || 赤面する || 恥ずかしくて顔が赤くなる || 😳
sigh || ため息をつく || はあ…
yawn || あくびをする || 眠くて || 🥱
grin || にっこり笑う || 歯を見せて大きく笑う || 😁
giggle || くすくす笑う ||
stare || じっと見つめる ||
glance || ちらっと見る ||
roll my eyes || あきれて目を回す || 「またか」と思ったときのしぐさ || 🙄
raise my eyebrows || 眉を上げる || 驚いたときや疑うとき
cross my fingers || 指を交差させて幸運を祈る || 「うまくいきますように」 || 🤞
give a thumbs-up || 親指を立てる || いいね！ || 👍
wave goodbye || 手を振って別れる || 👋
burst into tears || わっと泣き出す ||
hold my breath || 息を止める || 緊張の一瞬
tap my foot || 足でトントンと床をたたく || いらいらして待つときにも
butterflies in my stomach || 緊張でそわそわする気持ち || 本番前、胃のあたりがざわざわ
a lump in my throat || 胸がいっぱいで声が詰まる感じ || 感動したり悲しかったりして
a poker face || 無表情・ポーカーフェイス || 気持ちを顔に出さない
`
  },
  {
    scene: "sports",
    category: "人と体",
    title: "スポーツ・ジム",
    emoji: "🏃",
    desc: "体を動かす場面の物と動作",
    text: `
treadmill || ランニングマシン || running machine は和製英語
dumbbell || ダンベル || 🏋️
yoga mat || ヨガマット ||
locker room || 更衣室 ||
water bottle || 水筒・ボトル ||
referee || 審判 || サッカーやバスケットの
scoreboard || 得点板 ||
warm up || 準備運動をする ||
stretch || ストレッチをする ||
work out || 運動する・筋トレする || ジムで
go for a run || 走りに行く || 🏃
lift weights || ウエイトを持ち上げる ||
do push-ups || 腕立て伏せをする ||
do sit-ups || 腹筋運動をする ||
break a sweat || ひと汗かく ||
catch my breath || 息を整える || 走り終わって
score a goal || ゴールを決める || ⚽
cheer for a team || チームを応援する || 📣
a sore muscle || 筋肉痛 || 次の日に来る
a close game || 接戦 || 最後までどちらが勝つかわからない
a personal best || 自己ベスト ||
end in a tie || 引き分けに終わる ||
`
  },
  {
    scene: "weather",
    category: "人と体",
    title: "天気・季節",
    emoji: "☔",
    desc: "雑談の定番。目に浮かびやすい",
    text: `
drizzle || 霧雨・小雨 || 細かい雨がしとしと
puddle || 水たまり || 雨上がりの道にできる
thunder || 雷（の音） || 光るほうは lightning || ⛈️
lightning || 稲妻 || ピカッと光る || ⚡
hail || ひょう・あられ || 空から降る氷の粒
frost || 霜 || 冬の朝、草や窓が白くなる
fog || 霧 || 前がよく見えない || 🌫️
humid || 蒸し暑い・じめじめした || 日本の夏
chilly || 肌寒い || cold ほどではない
freezing || 凍えるほど寒い ||
a heat wave || 猛暑・熱波 || 何日も続く暑さ || 🥵
a typhoon || 台風 || 🌀
a clear sky || 晴れ渡った空 || 雲ひとつない
a sudden shower || にわか雨 || 急に降ってすぐやむ
the rainy season || 梅雨 ||
cherry blossoms || 桜（の花） || 🌸
autumn leaves || 紅葉 || 🍁
get soaked || びしょぬれになる || 傘がなくて
get sunburned || 日焼けする（ひりひり） || 小麦色に焼けるのは get a tan
clear up || 晴れる・雨がやむ || 「午後には晴れるでしょう」
pour || 土砂降りに降る || It's pouring. の形で
a slippery road || すべりやすい道 || 雪や雨のあと
`
  },
  {
    scene: "office",
    category: "仕事・お金・デジタル",
    title: "オフィス・文房具",
    emoji: "📎",
    desc: "机の上の物と、職場でよくする動作",
    text: `
sticky note || ふせん || ぺたっと貼るメモ
paper clip || クリップ || 紙をはさんで留める || 📎
highlighter || 蛍光ペン || 大事なところに線を引く
rubber band || 輪ゴム || 束ねるときに使う
eraser || 消しゴム || イギリスでは rubber
correction tape || 修正テープ || 書きまちがいを消す
ruler || 定規 || 線を引いたり長さを測ったり || 📏
folder || 書類ばさみ・フォルダー || 書類をまとめて入れる || 📁
business card || 名刺 || 「名刺交換する」は exchange business cards
extension || 内線（番号） || 「内線23番」は extension 23 || ☎️
handout || 配布資料 || 会議で配る紙
conference room || 会議室 || meeting room とも言う
a paper jam || 紙詰まり || プリンターに紙が詰まった
a messy desk || 散らかった机 || 書類が山積み
a tight schedule || 詰まったスケジュール || 予定がぎっしり
print out a document || 書類を印刷する || 🖨️
make copies || コピーをとる || コピー機で
book a meeting room || 会議室を予約する ||
hand in a report || 報告書を提出する || 締め切りまでに
clock in || 出勤の打刻をする || 退勤は clock out
staple the pages || 書類をホッチキスで留める || ホッチキスは stapler
plug in the charger || 充電器をコンセントにさす || コンセントは outlet
`
  },
  {
    scene: "digital",
    category: "仕事・お金・デジタル",
    title: "スマホ・パソコン",
    emoji: "📱",
    desc: "毎日使うのに英語で言えない動作",
    text: `
charger || 充電器 || 「充電器を借りられる？」は Can I borrow your charger?
screenshot || スクリーンショット || 画面をそのまま画像に
notification || 通知 || ピコンと出るお知らせ
home screen || ホーム画面 ||
attachment || 添付ファイル || メールにつけるファイル
a group chat || グループチャット ||
a cracked screen || 画面のひび割れ || スマホを落として
a slow connection || 遅い回線 || 動画が止まる
a typo || 打ち間違い・誤字 || キーボードでの打ちミス
swipe || （指で）スワイプする ||
scroll down || 下にスクロールする ||
tap the icon || アイコンをタップする ||
charge my phone || スマホを充電する ||
update the app || アプリを更新する ||
restart my computer || パソコンを再起動する || 困ったときはまずこれ
log in || ログインする || 出るのは log out
back up my files || ファイルをバックアップする ||
turn on airplane mode || 機内モードにする || ✈️
The screen froze. || 画面が固まった || 何を押しても動かない
mute the call || 通話をミュートにする || オンライン会議で
share my screen || 画面を共有する || オンライン会議で
delete a message || メッセージを削除する ||
`
  },
  {
    scene: "money",
    category: "仕事・お金・デジタル",
    title: "お金・銀行",
    emoji: "💰",
    desc: "支払い・両替・貯金",
    text: `
ATM || ATM || cash machine とも言う || 🏧
bank account || 銀行口座 ||
coin || 硬貨 || 🪙
bill || 紙幣・お札 || イギリスでは note。「請求書」の意味もある || 💵
wallet || 財布 || 👛
piggy bank || 貯金箱 || 🐷
PIN || 暗証番号 || 4けたの番号
exchange rate || 為替レート ||
interest || 利子 ||
a loan || ローン・借金 ||
a monthly payment || 毎月の支払い ||
a bank transfer || 銀行振込 ||
loose change || 小銭 || ポケットの中のじゃらじゃら
a tax return || 確定申告（の書類） ||
withdraw cash || 現金を引き出す || 預けるのは deposit
exchange money || 両替する || 空港の両替所で || 💱
save money || お金を貯める・節約する ||
split the cost || 費用を分担する ||
pay back a loan || 借金を返す ||
lend money || お金を貸す || 借りるのは borrow
run out of money || お金が尽きる || 月末に
break a bill || お札をくずす || 「1万円札をくずしてもらえますか」
`
  },
  {
    scene: "wasei",
    category: "和製英語",
    title: "和製英語の言い換え（第1弾）",
    emoji: "🔁",
    desc: "日本語でよく使うのに、そのままでは通じないカタカナ語",
    text: `
outlet || コンセント || consent は「同意」の意味。イギリスでは socket || 🔌
stapler || ホッチキス || ホッチキスは人名に由来し、英語では通じない
mechanical pencil || シャーペン || sharp pencil は「とがった鉛筆」になる || ✏️
laptop || ノートパソコン || note PC はふつう使わない || 💻
gas station || ガソリンスタンド || イギリスでは petrol station || ⛽
complaint || クレーム || claim は「主張する・請求する」の意味
office worker || サラリーマン || salaryman はふつう通じない
apartment || マンション || mansion は「大邸宅」。分譲マンションは condo
part-time job || バイト・アルバイト || Arbeit はドイツ語
cell phone || ケータイ || イギリスでは mobile phone || 📱
remote control || リモコン || 略して remote とも言う
steering wheel || （車の）ハンドル || handle はドアなどの取っ手
windshield || フロントガラス || イギリスでは windscreen
rearview mirror || バックミラー || back mirror は通じない
dress || ワンピース || one-piece は水着の印象が強い || 👗
sweatshirt || トレーナー || trainer は「指導する人」の意味
autograph || （有名人の）サイン || sign は「標識・合図」。書類の署名は signature || ✍️
excited || テンションが高い || tension は「緊張」の意味
on the house || （お店の）サービス・無料 || service は「接客・サービス業」の意味
stroller || ベビーカー || baby car は通じない
website || ホームページ || homepage はサイトのトップページだけを指す
dress shirt || ワイシャツ || 「ワイ」は white がなまったもの
`
  },
  {
    scene: "wasei2",
    category: "和製英語",
    title: "和製英語の言い換え（第2弾）",
    emoji: "🔁",
    desc: "第1弾に続く、通じないカタカナ語",
    text: `
plastic bottle || ペットボトル || PET bottle はふつう使わない
convenience store || コンビニ || 略さずに言う
survey || アンケート || enquête はフランス語
sticker || シール || seal は「印」や「アザラシ」の意味
renovation || リフォーム || reform は「制度などの改革」
wake-up call || モーニングコール || morning call は通じない
French fries || フライドポテト || イギリスでは chips || 🍟
roller coaster || ジェットコースター || jet coaster は通じない || 🎢
toll-free number || フリーダイヤル || free dial は通じない
cheating || カンニング || cunning は「ずる賢い」の意味
security guard || ガードマン || guardman は通じない
quota || ノルマ || norma はロシア語由来
key chain || キーホルダー || key ring とも言う
prime time || ゴールデンタイム || golden time は通じない
cream puff || シュークリーム || shoe cream は「靴クリーム」になる
ballpoint pen || ボールペン || ball pen ではなく ballpoint pen
a driver who rarely drives || ペーパードライバー || paper driver は通じない
air conditioner || クーラー・エアコン || cooler は「保冷箱」。略して AC
customer support || アフターサービス || after service は通じない
studio apartment || ワンルーム（マンション） || one-room は通じにくい
TV personality || （テレビの）タレント || talent は「才能」の意味
popsicle || アイスキャンディー || ice candy は通じない
`
  }
];
