/*
 * 例文データ
 *
 * 1行 = 1文。形式は画面の「例文の追加」と同じです。
 *   英語チャンク / 英語チャンク || 日本語チャンク / 日本語チャンク || 自然な日本語訳
 *
 * - 英語チャンクと日本語チャンクの数は同じにしてください（順番に対応します）。
 * - 空行と「#」で始まる行は無視されます。
 * - 文を書き換えると、その文の「苦手」マークは外れます（英文から ID を作っているため）。
 */
window.RSVP_DATA = [
  {
    level: "basic",
    text: `
I like / basketball. || 私は好きです / バスケットボールを || 私はバスケットボールが好きです。
I went to the station / to meet my friend / yesterday. || 私は行きました 駅へ / 友達に会うために / 昨日 || 私は昨日、友達に会うために駅へ行きました。
She is reading / a book / in the library. || 彼女は読んでいます / 本を / 図書館で || 彼女は図書館で本を読んでいます。
My brother / plays the guitar / every evening. || 私の兄は / ギターを弾きます / 毎晩 || 兄は毎晩ギターを弾きます。
This bag / is too heavy / for me / to carry. || このかばんは / 重すぎます / 私にとって / 運ぶには || このかばんは重すぎて、私には運べません。
We had lunch / at a small café / near the park. || 私たちは昼食をとりました / 小さなカフェで / 公園の近くの || 私たちは公園の近くの小さなカフェで昼食をとりました。
The man / who lives next door / is a doctor. || その男性は / 隣に住んでいる / 医者です || 隣に住んでいる男性は医者です。
I have been studying English / for three years. || 私はずっと英語を勉強しています / 3年間 || 私は3年間英語を勉強しています。
It is important / to drink enough water / every day. || それは大切です / 十分な水を飲むことは / 毎日 || 毎日十分な水を飲むことは大切です。
He was so tired / that he fell asleep / on the train. || 彼はとても疲れていたので / 眠ってしまいました / 電車の中で || 彼はとても疲れていたので、電車の中で眠ってしまいました。
I don't know / where she lives. || 私は知りません / 彼女がどこに住んでいるかを || 私は彼女がどこに住んでいるか知りません。
If it rains tomorrow, / we will stay home. || もし明日雨が降ったら / 私たちは家にいます || 明日雨が降ったら、私たちは家にいます。
The book / I bought last week / was very interesting. || その本は / 私が先週買った / とてもおもしろかったです || 先週買った本はとてもおもしろかったです。
Please tell me / how to use / this machine. || 教えてください / 使い方を / この機械の || この機械の使い方を教えてください。
`
  },
  {
    level: "daily",
    text: `
Could you tell me / the way / to the nearest station? || 教えていただけますか / 道を / 最寄り駅までの || 最寄り駅までの道を教えていただけますか。
I'm thinking of / going to Kyoto / this weekend. || 私は考えています / 京都に行くことを / 今週末 || 今週末、京都に行こうと思っています。 || I'm thinking of 〜ing：〜しようかなと思っている（まだ決めていない予定）
Do you mind / if I open the window? || 気になりますか / 私が窓を開けたら || 窓を開けてもかまいませんか。 || Do you mind if 〜?：〜してもいいですか（直訳は「〜したら気になりますか」。OKなら No, not at all.／Go ahead. と答える）
I'm sorry I'm late. / The train was delayed / because of the snow. || 遅れてすみません / 電車が遅れたんです / 雪のせいで || 遅れてすみません。雪で電車が遅れてしまって。
Would you like / something to drink? || いかがですか / 何か飲むものは || 何かお飲みになりますか。
Let me know / if you need / any help. || 知らせてね / もし必要なら / 何か手助けが || 何か手伝いが必要なら知らせてね。 || Let me know 〜：〜なら知らせてね（会話・メールの定番）
How long / does it take / to get to the airport? || どのくらい / かかりますか / 空港に着くまでに || 空港までどのくらいかかりますか。
I usually go jogging / before breakfast / to stay healthy. || 私はたいていジョギングに行きます / 朝食の前に / 健康を保つために || 健康のために、たいてい朝食前にジョギングをしています。
Can I try this on / in a smaller size? || これを試着できますか / もっと小さいサイズで || これの小さいサイズを試着してもいいですか。 || try 〜 on：〜を試着する
It's been a long time / since we last met. || 長い時間がたちましたね / 私たちが最後に会ってから || 最後に会ってからずいぶんたちましたね。
I'd like to make a reservation / for two people / at seven tonight. || 予約をしたいのですが / 2名で / 今夜7時に || 今夜7時に2名で予約をお願いしたいのですが。
The movie / we saw yesterday / made me cry. || その映画は / 私たちが昨日見た / 私を泣かせました || 昨日見た映画には泣かされました。
Don't forget / to take an umbrella / in case it rains. || 忘れないでね / 傘を持っていくのを / 雨が降るといけないから || 雨が降るといけないから、傘を持っていくのを忘れないでね。 || in case 〜：〜するといけないから・〜に備えて
I wish / I could speak English / as fluently as you. || （〜なら）いいのに / 私が英語を話せたら / あなたと同じくらい流ちょうに || あなたと同じくらい流ちょうに英語が話せたらいいのに。
`
  },
  {
    level: "business",
    text: `
Let's get started / with today's agenda. || 始めましょう / 今日の議題から || それでは、今日の議題から始めましょう。 || Let's get started.：始めましょう（会議を始めるときの決まり文句）
Could you walk us through / the main points / of the proposal? || 順を追って説明していただけますか / 主なポイントを / その提案の || 提案の要点を順に説明していただけますか。 || walk 人 through 〜：人に〜を一つずつ順を追って説明する（会議でとてもよく使う）
I'd like to hear / everyone's opinion / before we make a decision. || 聞きたいと思います / 皆さんの意見を / 私たちが決定する前に || 決定する前に、皆さんのご意見をうかがいたいと思います。
Would it be possible / to move the meeting / to Thursday afternoon? || 可能でしょうか / 会議を移すことは / 木曜日の午後に || 会議を木曜日の午後に変更することは可能でしょうか。
We need to finalize the budget / by the end of this month. || 私たちは予算を確定する必要があります / 今月末までに || 今月末までに予算を確定する必要があります。
I'm writing to follow up on / our meeting / last Tuesday. || フォローアップのためにご連絡しています / 私たちの打ち合わせについて / 先週火曜日の || 先週火曜日の打ち合わせの件で、確認のためご連絡いたしました。 || follow up on 〜：〜について追って確認・連絡する（メールの書き出しの定番）
Please find attached / the revised schedule / for the project. || 添付しましたのでご確認ください / 修正版のスケジュールを / プロジェクトの || プロジェクトの修正版スケジュールを添付しましたので、ご確認ください。 || Please find attached 〜：〜を添付しましたのでご確認ください（メールの決まり文句）
Thank you for / your quick reply. || ありがとうございます / 迅速なご返信に || 早速のご返信ありがとうございます。
As I mentioned / in my previous email, / the deadline / has been extended. || 私が申し上げたように / 前回のメールで / 締め切りは / 延長されました || 前回のメールでお伝えしたとおり、締め切りは延長されました。
I'm afraid / we can't accept / these terms / as they are. || 申し訳ありませんが / 私たちは受け入れられません / これらの条件を / このままでは || 申し訳ありませんが、この条件のままではお受けできません。 || I'm afraid 〜：申し訳ないのですが〜（言いにくいことを丁寧に切り出す）
If you could lower the price / by five percent, / we would be able to / place a larger order. || もし価格を下げていただけるなら / 5パーセント / 私たちはできるでしょう / より大きな注文をすることが || 5パーセント値下げしていただけるなら、より大口の注文が可能です。
We are willing to offer a discount / if you sign / a two-year contract. || 私たちは割引を提供する用意があります / もし契約していただけるなら / 2年の契約を || 2年契約を結んでいただけるなら、割引を提供する用意があります。
`
  },
  {
    level: "advanced",
    text: `
The professor / who wrote the book / that we discussed in class / last week / will give a lecture / on the history of ideas / at the university / next month. || その教授は / その本を書いた / 私たちが授業で議論した / 先週 / 講演をする予定です / 思想の歴史について / その大学で / 来月 || 先週授業で議論した本を書いた教授が、来月その大学で思想史について講演をする予定です。
Having finished the report / earlier than expected, / she decided to spend the afternoon / reading the novel / her friend had recommended / to her. || レポートを書き終えたので / 予想より早く / 彼女は午後を過ごすことにしました / その小説を読んで / 友人が勧めてくれていた / 彼女に || 予想より早くレポートを書き終えたので、彼女は友人に勧められていた小説を読んで午後を過ごすことにしました。
Never before / had the small town / seen so many visitors / as it did during the festival, / when the streets were filled / with music and food stalls / from morning till night. || これまで一度もありませんでした / その小さな町が / これほど多くの観光客を迎えたことは / 祭りの期間ほどには / そのとき通りは満たされていました / 音楽と屋台で / 朝から晩まで || その小さな町にこれほど多くの観光客が訪れたのは祭りの期間が初めてで、通りは朝から晩まで音楽と屋台でにぎわっていました。
If I had known / that the train would be cancelled, / I would have left home / an hour earlier / and avoided missing / the most important part / of the meeting. || もし私が知っていたら / 電車が運休になると / 私は家を出ていたでしょう / 1時間早く / そして逃さずに済んだでしょう / 最も重要な部分を / 会議の || 電車が運休になると知っていたら、1時間早く家を出て、会議の最も重要な部分を聞き逃さずに済んだでしょう。
The new policy, / which many experts had criticized / as unrealistic, / turned out to be surprisingly effective / in reducing traffic / in the city center. || その新しい政策は / 多くの専門家が批判していた / 非現実的だと / 結果的に驚くほど効果的でした / 交通量を減らすうえで / 市の中心部の || 多くの専門家が非現実的だと批判していたその新政策は、市の中心部の交通量を減らすうえで驚くほど効果的でした。
Were it not for / the support of my colleagues, / I would never have been able to / complete the project / on time / while also taking care of / my sick mother. || もし〜がなければ / 同僚たちの支えが / 私は決してできなかったでしょう / そのプロジェクトを完成させることは / 期限どおりに / 同時に世話をしながら / 病気の母の || 同僚たちの支えがなければ、病気の母の世話をしながらプロジェクトを期限どおりに完成させることは、決してできなかったでしょう。
Located on a hill / overlooking the sea, / the hotel, / which was built / more than a century ago, / still attracts guests / who want to experience / its old-fashioned charm. || 丘の上に位置していて / 海を見下ろす / そのホテルは / 建てられたもので / 100年以上前に / 今も客を引きつけています / 味わいたいと思う / その昔ながらの魅力を || 海を見下ろす丘の上に建つそのホテルは、100年以上前に建てられたもので、昔ながらの魅力を味わいたい客を今も引きつけています。
Not only did the storm / damage hundreds of houses, / but it also cut off / the power supply / to the entire region / for nearly a week. || その嵐は〜しただけでなく / 何百もの家に被害を与えた / さらにそれは断ちました / 電力の供給を / 地域全体への / 1週間近くも || その嵐は何百もの家屋に被害を与えただけでなく、地域全体への電力供給を1週間近くも断ちました。
It was not until / I started working abroad / that I realized / how much / my parents had sacrificed / to give me / a good education. || 〜になって初めて / 私が海外で働き始めて / 私は気づきました / どれほど多くを / 両親が犠牲にしてきたかに / 私に与えるために / よい教育を || 海外で働き始めて初めて、私によい教育を受けさせるために両親がどれほど多くを犠牲にしてきたかに気づきました。
So complicated were the instructions / that even the engineers, / who had years of experience, / had to read them / several times / before assembling the machine. || 説明書があまりに複雑だったので / 技術者たちでさえ / 何年もの経験がある / それを読まなければなりませんでした / 何度も / その機械を組み立てる前に || 説明書があまりに複雑だったので、何年もの経験がある技術者たちでさえ、機械を組み立てる前に何度も読み返さなければなりませんでした。
No matter how carefully / you plan a trip, / something unexpected / is likely to happen, / so it is wise / to leave some time / in your schedule / for surprises. || どれほど注意深く / 旅行の計画を立てても / 何か予期しないことが / 起こりがちです / だから賢明です / いくらか時間を残しておくのが / 予定の中に / 思いがけないことのために || どれほど注意深く旅行の計画を立てても予期しないことは起こりがちなので、予定には余裕を持たせておくのが賢明です。
The scientist / whose research on climate change / has influenced governments / around the world / was awarded a prize / recognizing her contribution / to public understanding of science. || その科学者は / 気候変動についての研究が / 各国政府に影響を与えてきた / 世界中の / 賞を授与されました / 彼女の貢献を称える / 科学に対する一般の理解への || 気候変動に関する研究で世界中の政府に影響を与えてきたその科学者は、科学に対する一般の理解への貢献を称える賞を授与されました。
Had the doctor / not noticed the symptoms / at an early stage, / the patient / might not have recovered / as quickly / as he did. || もしその医師が / 症状に気づいていなかったら / 早い段階で / その患者は / 回復しなかったかもしれません / それほど早くは / 実際に回復したほどには || その医師が早い段階で症状に気づいていなかったら、患者はあれほど早く回復しなかったかもしれません。
What surprised me most / about the city / was not its size / but the way / people of different backgrounds / lived side by side, / respecting each other's customs. || 私が最も驚いたのは / その都市について / その大きさではなく / 様子でした / さまざまな背景を持つ人々が / 隣り合って暮らしている / 互いの習慣を尊重しながら || その都市で私が最も驚いたのは、その大きさではなく、さまざまな背景を持つ人々が互いの習慣を尊重しながら隣り合って暮らしている様子でした。
He talked about the project / as if he had managed it / all by himself, / even though / most of the work / had been done / by his team members. || 彼はそのプロジェクトについて話しました / まるで自分が取り仕切ったかのように / すべて一人で / 〜にもかかわらず / 仕事のほとんどは / なされていた / チームのメンバーによって || 仕事のほとんどはチームのメンバーがしたにもかかわらず、彼はまるで一人でそのプロジェクトを取り仕切ったかのように話しました。
The meeting having been postponed, / we used the extra time / to review the data / more thoroughly, / which helped us / find several errors / in our earlier analysis. || 会議が延期されたので / 私たちは空いた時間を使いました / データを見直すために / より徹底的に / そのことが私たちを助けました / いくつかの誤りを見つけるのに / 以前の分析の中の || 会議が延期されたので、私たちはその時間を使ってデータをより徹底的に見直し、そのおかげで以前の分析にあったいくつかの誤りを見つけることができました。
Only after the results / were published / did the public begin to understand / how serious the problem was / and how long / it had been ignored. || 結果が〜して初めて / 公表されて / 一般の人々は理解し始めました / その問題がどれほど深刻か / そしてどれほど長く / それが放置されてきたかを || 結果が公表されて初めて、人々はその問題がどれほど深刻で、どれほど長く放置されてきたかを理解し始めました。
The village / in which my grandfather was born / has changed so much / that he can hardly recognize / the streets / where he used to play / as a child. || その村は / 祖父が生まれた / とても大きく変わったので / 彼はほとんど見分けがつきません / 通りも / 彼がよく遊んでいた / 子どものころに || 祖父が生まれた村はすっかり変わってしまい、祖父は子どものころによく遊んだ通りもほとんど見分けがつきません。
It is high time / we stopped treating / the environment / as an unlimited resource / and started thinking seriously / about the world / we will leave / to future generations. || もう〜すべき時です / 私たちが扱うのをやめる / 環境を / 無限の資源として / そして真剣に考え始める / 世界について / 私たちが残す / 将来の世代に || 私たちはもう環境を無限の資源のように扱うのをやめ、将来の世代に残す世界について真剣に考え始めるべき時です。
Although exhausted / after the long flight, / the delegates / attended the opening ceremony, / where the mayor delivered a speech / welcoming them / to the city. || 疲れ切っていたものの / 長いフライトの後で / 代表団は / 開会式に出席しました / そこで市長がスピーチをしました / 彼らを歓迎する / その市へ || 長いフライトの後で疲れ切っていたものの、代表団は開会式に出席し、市長が彼らを歓迎するスピーチを行いました。
Should you have / any questions / about the procedure, / please do not hesitate / to contact the staff, / who will be happy / to assist you. || もしお持ちでしたら / 何かご質問を / その手続きについて / どうぞ遠慮なさらないでください / スタッフに連絡するのを / スタッフは喜んで〜します / あなたのお手伝いを || 手続きについてご質問があれば、遠慮なくスタッフにお問い合わせください。喜んでお手伝いいたします。
The more you practice / reading English / in the order / in which it is written, / the less you will need / to translate / in your head. || 練習すればするほど / 英語を読むことを / 順番で / それが書かれている / 必要は少なくなります / 訳すことの / 頭の中で || 英語を書かれた順番どおりに読む練習をすればするほど、頭の中で訳す必要は少なくなります。
Mr. Tanaka, / a retired teacher / living in Osaka, / spends his weekends / volunteering at a library, / where he reads stories / to children / who cannot yet read / on their own. || 田中さんは / 退職した教師で / 大阪に住んでいる / 週末を過ごしています / 図書館でボランティアをして / そこで彼は物語を読んでいます / 子どもたちに / まだ読めない / 自分では || 大阪に住む元教師の田中さんは、週末を図書館でのボランティアに費やし、まだ一人で字が読めない子どもたちに物語を読み聞かせています。
Little did they know / that the old painting / they had bought / at a flea market / was actually / a lost work / by a famous artist. || 彼らは少しも知りませんでした / その古い絵が / 彼らが買った / のみの市で / 実は〜だったとは / 失われた作品 / 有名な画家による || のみの市で買った古い絵が、実は有名な画家の失われた作品だったとは、彼らは思いもしませんでした。
Despite having lived in London / for over ten years, / she still finds it difficult / to understand / some of the local expressions / used by older residents. || ロンドンに住んでいるにもかかわらず / 10年以上 / 彼女は今でも難しいと感じています / 理解するのが / 地元の表現のいくつかを / 年配の住民が使う || ロンドンに10年以上住んでいるにもかかわらず、彼女は今でも年配の住民が使う地元の表現の一部を理解するのに苦労しています。
I would rather / you told me the truth / now, / however painful it may be, / than find out later / that you had been hiding it / from me. || 私はむしろ〜のほうがいい / あなたが本当のことを話してくれる / 今 / それがどんなにつらくても / 後で知るよりは / あなたがそれを隠していたと / 私に || どんなにつらいことでも、後になって隠されていたと知るより、今本当のことを話してくれるほうがいいです。
The company introduced / a flexible working system, / which allowed employees / to choose / when and where to work / and, as a result, / significantly improved / their satisfaction. || その会社は導入しました / 柔軟な勤務制度を / それにより社員はできるようになりました / 選ぶことが / いつどこで働くかを / そしてその結果 / 大きく高めました / 彼らの満足度を || その会社は柔軟な勤務制度を導入し、社員がいつどこで働くかを選べるようにした結果、社員の満足度が大きく向上しました。
Provided that the weather / remains stable, / the climbers, / who have been preparing / for months, / will attempt to reach the summit / early tomorrow morning. || 天候が〜という条件で / 安定したままである / 登山者たちは / 準備を重ねてきた / 何か月も / 山頂を目指す予定です / 明日の早朝に || 天候が安定していれば、何か月も準備を重ねてきた登山者たちは、明日の早朝に山頂を目指す予定です。
She lowered her voice / so that the children, / who were finally asleep / in the next room, / would not be woken / by the conversation. || 彼女は声を落としました / 子どもたちが〜しないように / やっと眠った / 隣の部屋で / 起こされない / 話し声によって || 隣の部屋でやっと眠った子どもたちが話し声で起きないように、彼女は声を落としました。
What matters / is not how many books / you read / in a year, / but how deeply / you think about / what you have read / and how you apply it / to your own life. || 大切なのは / 何冊の本かではなく / あなたが読む / 1年間に / そうではなく、どれだけ深く / あなたが考えるかです / 読んだことについて / そしてそれをどう生かすかです / 自分自身の生活に || 大切なのは1年に何冊の本を読むかではなく、読んだ内容についてどれだけ深く考え、それを自分の生活にどう生かすかです。
`
  },
  {
    level: "bizadv",
    text: `
Before we move on / to the next item, / I'd like to make sure / that everyone agrees / on the timeline / we discussed earlier, / since any delay / would affect the launch date. || 先に進む前に / 次の議題へ / 確認しておきたいと思います / 全員が合意していることを / スケジュールについて / 先ほど話し合った / なぜならどんな遅れも / 発売日に影響するからです || 次の議題に移る前に、先ほど話し合ったスケジュールに全員が合意しているか確認させてください。少しでも遅れると発売日に影響するためです。 || move on to 〜：（次の話題・議題に）移る
While I understand / the concerns / raised by the sales team, / I believe / the data clearly shows / that reducing the price / would hurt our margins / more than it would increase our volume. || 理解してはいますが / 懸念は / 営業チームが挙げた / 私は考えます / データははっきり示していると / 価格を下げることは / 利益率を損なうと / 販売量を増やす以上に || 営業チームが挙げた懸念は理解していますが、データを見る限り、値下げは販売量を増やす以上に利益率を損なうと考えます。
We would be prepared to / extend the payment terms / to sixty days, / provided that / you commit to / a minimum order volume / for the next two fiscal years. || 私どもは〜する用意があります / 支払い条件を延長する / 60日に / ただし〜という条件で / 御社がお約束くださる / 最低発注量を / 今後2会計年度の || 今後2会計年度の最低発注量をお約束いただけるのであれば、支払い条件を60日に延長する用意があります。
If we cannot reach / an agreement on price / today, / perhaps we could explore / other options, / such as sharing the logistics costs / or adjusting the delivery schedule. || もし私たちが至らなければ / 価格についての合意に / 今日 / もしかすると検討できるかもしれません / ほかの選択肢を / たとえば物流費を分担することや / 納品スケジュールを調整することを || 今日価格で合意に至らないようであれば、物流費の分担や納期の調整など、ほかの選択肢を検討してはいかがでしょうか。
This proposal outlines / how we plan to / reduce production costs / by fifteen percent / over the next three years / through automation, / supplier consolidation, / and improved quality control. || この提案書は概要を示しています / 私たちがどのように〜する計画かの / 生産コストを削減する / 15パーセント / 今後3年間で / 自動化によって / 仕入れ先の集約によって / そして品質管理の改善によって || 本提案書では、自動化、仕入れ先の集約、品質管理の改善によって、今後3年間で生産コストを15パーセント削減する計画の概要を示します。
By introducing / an AI-based demand forecasting system, / we expect to / cut excess inventory / by nearly a third / while maintaining / the service levels / our customers expect. || 導入することによって / AIを使った需要予測システムを / 私たちは見込んでいます / 過剰在庫を削減することを / ほぼ3分の1 / 維持しながら / サービス水準を / 顧客が期待する || AIによる需要予測システムを導入することで、顧客が期待するサービス水準を維持しながら、過剰在庫をほぼ3分の1削減できる見込みです。
I am writing to inform you / that, due to an unexpected shortage / of raw materials, / the shipment / originally scheduled for March 10 / will be delayed / by approximately two weeks. || お知らせするためにご連絡しております / 予期しない不足により / 原材料の / 出荷は / 当初3月10日に予定されていた / 遅れる見込みです / およそ2週間 || 原材料の予期せぬ不足により、当初3月10日に予定していた出荷が約2週間遅れる見込みとなりましたので、お知らせいたします。
We sincerely apologize / for any inconvenience / this may cause / and would appreciate it / if you could let us know / whether the revised schedule / is acceptable / for your production plans. || 心よりお詫び申し上げます / ご不便について / これがおかけするかもしれない / そしてありがたく存じます / お知らせいただけると / 変更後のスケジュールが / 問題ないかどうか / 御社の生産計画にとって || ご不便をおかけし誠に申し訳ございません。変更後のスケジュールで御社の生産計画に差し支えがないか、お知らせいただけますと幸いです。
After analyzing the sensor data / collected from the assembly line, / the engineering team identified / a recurring vibration / that was causing / small defects / in about two percent of the products. || センサーデータを分析した結果 / 組立ラインから集めた / 技術チームは突き止めました / 繰り返し起きる振動を / 引き起こしていた / 小さな欠陥を / 製品の約2パーセントに || 組立ラインから収集したセンサーデータを分析した結果、技術チームは製品の約2パーセントに小さな欠陥を生じさせていた周期的な振動を突き止めました。
To prevent / similar problems / from occurring / at our other plants, / we are standardizing / the maintenance procedures / and training operators / to recognize early warning signs. || 防ぐために / 同様の問題が / 起きるのを / 他の工場で / 私たちは標準化しています / 保守の手順を / そしてオペレーターを訓練しています / 初期の兆候に気づけるように || 他の工場で同様の問題が起きないよう、保守手順を標準化するとともに、初期の兆候に気づけるようオペレーターの訓練を進めています。
Before we deploy the model / across all departments, / we need to establish / clear rules / on how customer data is handled / and who is responsible / for reviewing its outputs. || そのモデルを展開する前に / 全部門に / 私たちは定める必要があります / 明確なルールを / 顧客データがどのように扱われるかについての / そして誰が責任を持つかについての / その出力を確認することに || そのモデルを全部門に展開する前に、顧客データの取り扱い方法と、出力結果の確認に誰が責任を持つかについて、明確なルールを定める必要があります。
The pilot project showed / that combining production data / with maintenance records / allowed us to predict / equipment failures / several days in advance, / reducing unplanned downtime / significantly. || 試験プロジェクトでわかりました / 生産データを組み合わせることで / 保守記録と / 予測できるようになったことが / 設備の故障を / 数日前に / 計画外の停止時間を減らしながら / 大幅に || 試験プロジェクトでは、生産データと保守記録を組み合わせることで設備の故障を数日前に予測できるようになり、計画外の停止時間が大幅に減りました。
Although your offer / is attractive / in terms of price, / we are concerned / about your ability / to guarantee consistent quality / at the volumes / we require. || 御社のご提案は〜ですが / 魅力的 / 価格の面では / 私どもは懸念しています / 御社の能力について / 安定した品質を保証する / 数量で / 私どもが必要とする || ご提案は価格面では魅力的ですが、当社が必要とする数量で安定した品質を保証していただけるかどうかを懸念しております。
To sum up, / we have agreed / to postpone the decision / on the new factory / until the market research is completed, / which should be / by the end of the quarter. || まとめると / 私たちは合意しました / 決定を先送りすることに / 新工場についての / 市場調査が終わるまで / それは〜の見込みです / 四半期末まで || まとめますと、新工場に関する決定は市場調査の完了まで先送りすることで合意しました。調査は四半期末までに終わる見込みです。 || To sum up：まとめると（会議の締めくくりの定番）
What we are proposing / is not simply a cost-cutting measure / but a long-term investment / that will make our supply chain / more resilient / to disruptions / like the ones we experienced last year. || 私たちが提案しているのは / 単なるコスト削減策ではなく / 長期的な投資です / 当社のサプライチェーンを〜にする / より強く / 混乱に対して / 昨年経験したような || 私たちが提案しているのは単なるコスト削減策ではなく、昨年経験したような混乱にも強いサプライチェーンを築くための長期的な投資です。
As discussed / during yesterday's call, / I have attached / a draft of the contract, / in which / the points we agreed on / have been highlighted / for your review. || 話し合ったとおり / 昨日の電話で / 添付いたしました / 契約書の草案を / その中で / 私たちが合意した点は / 強調表示しています / ご確認いただけるように || 昨日のお電話でお話ししたとおり、契約書の草案を添付いたしました。ご確認いただきやすいよう、合意した点を強調表示しております。 || As discussed：先日お話ししたとおり（メールの定番の書き出し）
Since the algorithm learns / from historical data, / any bias / contained in that data / could be reflected / in its recommendations / unless we monitor the results / carefully. || そのアルゴリズムは学習するので / 過去のデータから / どんな偏りも / そのデータに含まれる / 反映されるおそれがあります / その推奨に / 結果を監視しない限り / 注意深く || そのアルゴリズムは過去のデータから学習するため、結果を注意深く監視しない限り、データに含まれる偏りが推奨内容に反映されるおそれがあります。
We are willing to / accept a slightly lower unit price / on the condition that / the contract period is extended / to three years / and the volume commitments / are clearly specified. || 私どもは〜する用意があります / やや低い単価を受け入れる / 〜という条件で / 契約期間が延長される / 3年に / そして数量の確約が / 明記される || 契約期間を3年に延長し、数量の確約を明記していただけることを条件に、やや低い単価をお受けする用意があります。
Using image recognition / to inspect products / on the line / has not only reduced / the workload of our inspectors / but also helped us detect defects / that were previously too small / to notice. || 画像認識を使うことは / 製品を検査するのに / ライン上で / 減らしただけでなく / 検査員の作業負担を / 欠陥を見つけるのにも役立ちました / 以前は小さすぎた / 気づくには || ライン上の製品検査に画像認識を使うことで、検査員の負担が減っただけでなく、以前は小さすぎて気づけなかった欠陥も見つけられるようになりました。
Given the limited budget, / I would recommend / that we focus / on the two plants / with the highest defect rates / first / and roll out the system / to the remaining sites / next year. || 限られた予算を考えると / 私はお勧めします / 私たちが集中することを / 2つの工場に / 不良率が最も高い / まず / そしてそのシステムを展開することを / 残りの拠点に / 来年 || 予算が限られていることを考えると、まず不良率が最も高い2工場に集中し、残りの拠点には来年システムを展開することをお勧めします。 || roll out：（新しいシステムや製品を）展開する・順次導入する
`
  },
  /*
   * ネイティブがよく使う表現（4つ目の「||」の後ろは表現メモ。文末の全文表示と一覧に出ます）
   */
  {
    level: "phrase-basic",
    text: `
I'll pick you up / at the station / at six. || 私があなたを迎えに行きます / 駅に / 6時に || 6時に駅まで迎えに行くね。 || pick 人 up：（車などで）人を迎えに行く
Can you turn down the music / a little? || 音楽の音量を下げてくれる？ / 少し || 音楽、ちょっと小さくしてくれる？ || turn down：音量などを下げる（上げるのは turn up）
I ran into an old friend / at the supermarket / yesterday. || 私は昔の友達にばったり会いました / スーパーで / 昨日 || 昨日スーパーで昔の友達にばったり会ったよ。 || run into 人：人に偶然会う
Hang on a second. / I'll be right back. || ちょっと待って / すぐ戻るね || ちょっと待ってて、すぐ戻るから。 || Hang on (a second).：ちょっと待って（Wait. より柔らかく、とてもよく使う）
I'm running late, / so go ahead / and start without me. || 私は遅れています / だからどうぞ / 私抜きで始めてください || 遅れてるから、先に始めてて。 || run late：（予定より）遅れている／go ahead：どうぞ遠慮なく
Let me think about it / and get back to you / tomorrow. || 考えさせてください / そしてあなたに返事をします / 明日 || 考えて、明日返事するね。 || get back to 人：あとで人に返事をする・折り返す
I can't figure out / how to turn this on. || 私はわかりません / これの電源の入れ方が || これの電源の入れ方がわからないんだ。 || figure out：（考えて）わかる・解決する／turn on：電源を入れる
Don't give up. / You're almost there. || あきらめないで / もうすぐだよ || あきらめないで。あと少しだよ。 || You're almost there.：あと少しで着く・できる（励ましの決まり文句）
I'm into / Korean dramas / these days. || 私ははまっています / 韓国ドラマに / 最近 || 最近、韓国ドラマにはまってるんだ。 || be into 〜：〜にはまっている・夢中だ
It's up to you. / I'm fine with either. || それはあなた次第です / 私はどちらでもいいです || 君が決めていいよ。どっちでもいいから。 || It's up to you.：あなたに任せる・あなた次第
Could you keep an eye on my bag / for a minute? || 私のかばんを見ていてもらえますか / ちょっとの間 || ちょっとかばんを見ててもらえますか？ || keep an eye on 〜：〜から目を離さないでおく
I'll take care of the bill / this time. || 私が支払いを引き受けます / 今回は || 今回は私が払うよ。 || take care of 〜：〜を引き受ける・処理する（the bill＝お会計）
Sorry, / I didn't catch your name. || ごめんなさい / お名前が聞き取れませんでした || すみません、お名前を聞き取れませんでした。 || catch：（言葉を）聞き取る。聞き返すときの定番
What do you do / for a living? || あなたは何をしていますか / 生計を立てるために || お仕事は何をされているんですか？ || What do you do (for a living)?：職業を尋ねる自然な言い方
I'm just looking, / thanks. || 見ているだけです / ありがとう || 見ているだけです、どうも。 || 店員に Can I help you? と聞かれたときの定番の返事
Help yourself / to anything / in the fridge. || ご自由にどうぞ / 何でも / 冷蔵庫の中の || 冷蔵庫の中のもの、何でも自由に食べてね。 || help yourself (to 〜)：（〜を）自由に取って食べて・使って
I'm off today, / so let's hang out. || 私は今日休みです / だから一緒に遊ぼう || 今日休みだから遊ぼうよ。 || be off：休みである／hang out：（友達と）一緒に過ごす・遊ぶ
Take your time. / There's no rush. || ゆっくりでいいよ / 急ぐ必要はないよ || ゆっくりでいいよ、急がなくていいから。 || Take your time.／No rush.：急がなくていい
I'm craving / something sweet / right now. || 私は無性に欲しいです / 何か甘いものが / 今 || 今、無性に甘いものが食べたい。 || crave 〜：〜が無性に欲しい（食べ物によく使う）
My phone died, / so I couldn't call you. || 私の携帯の電池が切れました / だからあなたに電話できませんでした || 携帯の電池が切れて、電話できなかったんだ。 || My phone died.：携帯の電池が切れた（ネイティブの定番表現）
`
  },
  {
    level: "phrase-daily",
    text: `
I'm so done / with this weather. || 私はもううんざりです / この天気には || この天気、もううんざり。 || be done with 〜：〜にはもううんざり・もう終わりにしたい
That makes sense. / Thanks for explaining. || それは納得です / 説明してくれてありがとう || なるほど、わかった。説明してくれてありがとう。 || That makes sense.：なるほど・筋が通る（相づちでとてもよく使う）
I'm not really a morning person, / so I usually skip breakfast. || 私はあまり朝型の人間ではありません / だからたいてい朝食を抜きます || 朝が苦手だから、たいてい朝ごはんは抜いてる。 || a morning person：朝型の人／skip：（食事などを）抜く
Let's split the bill. / It's only fair. || 割り勘にしよう / それが公平だよ || 割り勘にしよう。そのほうが公平だよ。 || split the bill：割り勘にする
I'll sleep on it / and let you know / tomorrow. || 一晩考えます / そしてあなたに知らせます / 明日 || 一晩考えて、明日知らせるね。 || sleep on it：一晩じっくり考える
Can I take a rain check? / Something came up. || また今度にしてもいい？ / 急用ができちゃって || また今度にしてもらえる？急用ができちゃって。 || take a rain check：誘いを今回は断って「また今度」にする／Something came up.：急用ができた
I'm on my way. / I'll be there / in ten minutes. || 今向かっています / 着きます / 10分で || 今向かってる。10分で着くよ。 || I'm on my way.：今そっちに向かっている（in ten minutes＝10分後に）
It's not a big deal. / Don't worry. || それは大したことではありません / 気にしないで || 大したことじゃないよ、気にしないで。 || not a big deal：大したことない
I totally forgot / about the meeting. / My bad. || 私はすっかり忘れていました / 打ち合わせのことを / ごめん、私のミス || 打ち合わせのこと、すっかり忘れてた。ごめん。 || My bad.：ごめん、自分のミスだ（くだけた謝り方）
Are you free / this weekend? / Let's grab a coffee. || あなたは空いていますか / 今週末 / コーヒーでも飲もう || 今週末空いてる？コーヒーでも飲もうよ。 || grab a coffee／grab a bite：軽くコーヒーを飲む・軽く食べる
I'm a bit tied up / right now. / Can I call you back? || 私はちょっと手が離せません / 今 / 折り返し電話してもいいですか？ || 今ちょっと手が離せないんだ。折り返してもいい？ || be tied up：忙しくて手が離せない／call 人 back：折り返し電話する
This place is always packed / on weekends. || この店はいつも混んでいます / 週末は || この店、週末はいつも混んでるんだよね。 || packed：（人で）ぎっしり混んでいる
I'm kind of / on a budget / this month. || 私はちょっと / 予算が限られています / 今月は || 今月はちょっと節約中なんだ。 || on a budget：予算が限られている・節約中／kind of：ちょっと（言い方をやわらげる）
You can say that again. / It was a long day. || 本当にそうだね / 長い一日だった || 本当にそうだね。長い一日だった。 || You can say that again.：まったくその通り（強い同意）
I'm all ears. / Tell me what happened. || しっかり聞いてるよ / 何があったか話して || ちゃんと聞いてるよ。何があったか話して。 || I'm all ears.：しっかり聞いている・ぜひ聞かせて
Let's play it by ear / and decide / when we get there. || 成り行きに任せよう / そして決めよう / 着いたときに || その場の様子を見て、着いてから決めよう。 || play it by ear：その場の状況に合わせて決める
I'm running out of / battery. / Let me charge my phone. || 私はなくなりかけています / 電池が / 携帯を充電させて || 電池がなくなりそう。携帯を充電させて。 || run out of 〜：〜を使い切る・〜がなくなる
It slipped my mind. / I'll do it / right away. || うっかり忘れていました / やります / すぐに || うっかり忘れてた。すぐやるね。 || It slipped my mind.：うっかり忘れていた
Long time no see! / How have you been? || 久しぶり！ / 元気にしてた？ || 久しぶり！元気にしてた？ || How have you been?：（しばらく会っていない人に）元気だった？
I'll pass / this time, / but thanks for asking. || 私はやめておきます / 今回は / でも誘ってくれてありがとう || 今回はやめておくね。でも誘ってくれてありがとう。 || I'll pass.：遠慮しておく（誘いを軽く断る）
`
  },
  {
    level: "phrase-biz",
    text: `
Could you walk me through / the new process? || 私に順を追って説明してもらえますか / 新しい手順を || 新しい手順を、順を追って説明してもらえますか？ || walk 人 through 〜：人に〜を一つずつ順を追って説明する
Let's touch base / next week / to see how things are going. || 連絡を取り合いましょう / 来週 / 状況がどうなっているか確認するために || 来週、進み具合を確認するために少し話しましょう。 || touch base：（短く）連絡を取る・状況をすり合わせる
I'll circle back / on this / after I talk to my team. || 私はまた戻ってきます / この件について / チームと話した後で || チームと話してから、この件は改めてご連絡します。 || circle back (on 〜)：（〜の件に）あとで改めて戻る
Can we push the meeting back / to three o'clock? || 会議を後ろにずらせますか / 3時に || 会議を3時に後ろ倒しできますか？ || push back：（予定を）遅らせる（早めるのは move up）
I'm swamped / this week, / so can we do it / on Monday? || 私は仕事に追われています / 今週は / だからやれますか / 月曜日に || 今週はとにかく忙しいので、月曜日でもいいですか？ || be swamped：仕事に追われて手一杯だ
Just to make sure / we're on the same page, / the deadline / is Friday, right? || 念のため確認ですが / 私たちの認識がそろっているように / 締め切りは / 金曜日ですよね？ || 念のため確認ですが、締め切りは金曜日ですよね？ || be on the same page：認識が一致している
Let's take this offline / and discuss it / after the meeting. || これは別の場で話しましょう / そしてそれを話し合いましょう / 会議の後で || この件は会議の後で別途話しましょう。 || take 〜 offline：（会議中の話題を）その場では扱わず、後で個別に話す
I'll loop in / the sales team / so they're aware. || 私は加えます / 営業チームを / 彼らが把握できるように || 営業チームにも共有しておきますね。 || loop 人 in：人を（メールや話に）加えて情報を共有する
Can you give me / a ballpark figure / for the cost? || 私にいただけますか / おおよその数字を / 費用の || 費用のだいたいの金額を教えてもらえますか？ || a ballpark figure：おおよその数字・概算
We're behind schedule, / so we need to / speed things up. || 私たちは予定より遅れています / だから私たちは必要があります / ペースを上げる || 予定より遅れているので、ペースを上げる必要があります。 || behind schedule：予定より遅れている（早いのは ahead of schedule）
Let's wrap up / for today / and pick this up / tomorrow. || 終わりにしましょう / 今日は / そしてこの続きをやりましょう / 明日 || 今日はこのへんで終わりにして、明日続きをやりましょう。 || wrap up：終える・まとめる／pick 〜 up：〜を（中断したところから）再開する
I'll follow up / with an email / later today. || 私は追って連絡します / メールで / 今日このあと || 今日このあと、メールで改めてご連絡します。 || follow up (with 〜)：（〜で）追って連絡する・念押しする
That's a good point. / I hadn't thought of that. || それはいい指摘です / それは考えていませんでした || いい指摘ですね。それは考えていませんでした。 || That's a good point.：いい指摘だ（会議の定番の相づち）
Let's not reinvent the wheel. / We can use / last year's template. || 一から作り直すのはやめましょう / 私たちは使えます / 去年のテンプレートを || 一から作るのはやめましょう。去年のテンプレートが使えます。 || reinvent the wheel：すでにあるものをわざわざ一から作り直す
Could you give me / a quick heads-up / before the client calls? || 私に〜をもらえますか / ちょっとした事前の知らせを / 顧客が電話してくる前に || お客様から電話がある前に、ひとこと知らせてもらえますか？ || give 人 a heads-up：人に前もって知らせる・注意を促す
I'm afraid / that's over our budget. || 申し訳ないのですが / それは私たちの予算を超えています || 申し訳ありませんが、それは予算オーバーです。 || over budget：予算を超えている
We need to get the ball rolling / on this project / as soon as possible. || 私たちは物事を動かし始める必要があります / このプロジェクトについて / できるだけ早く || このプロジェクトを、できるだけ早く始動させる必要があります。 || get the ball rolling：物事に着手する・動き出させる
Let me double-check / the numbers / and get back to you. || 再確認させてください / 数字を / そしてお返事します || 数字を再確認して、折り返しご連絡します。 || double-check：念のため再確認する／get back to 人：人に返事をする
The client signed off / on the final design / this morning. || 顧客は承認しました / 最終デザインを / 今朝 || 今朝、お客様が最終デザインを承認しました。 || sign off on 〜：〜を正式に承認する
Let's keep it short, / since everyone has / a busy afternoon. || 手短にしましょう / なぜなら皆さんあるので / 忙しい午後が || 皆さん午後はお忙しいので、手短にいきましょう。 || keep it short：手短にする
`
  },
  /*
   * ストーリー
   *   level: "story" にして、story（英数字の ID）・title（英語の題名）・titleJa（日本語の題名）・note（難しさなど）を付けます。
   *   文は上から順番に再生されます。
   */
  {
    level: "story",
    story: "last-train",
    title: "After the Last Train",
    titleJa: "終電のあとで",
    note: "初中級・約16文",
    text: `
It was almost midnight / when Ken ran into the station, / out of breath. || もうすぐ真夜中でした / ケンが駅に駆け込んだのは / 息を切らして || ケンが息を切らして駅に駆け込んだのは、もうすぐ真夜中という頃でした。
The board above the gates / showed only one word: / "Departed." || 改札の上の表示板は / ただ一語だけを示していました / 「発車済み」と || 改札の上の表示板には、「発車済み」の一語だけが出ていました。
He had missed the last train / by less than a minute. || 彼は終電に乗り遅れたのです / 1分もない差で || 彼はほんの1分足らずの差で終電に乗り遅れたのです。
Outside, / the rain was getting heavier, / and the streets were empty / except for a few taxis. || 外では / 雨が強くなってきていて / 通りには誰もいませんでした / 数台のタクシーを除いて || 外では雨が強くなり、通りには数台のタクシーのほかに何もありませんでした。
Ken checked his wallet / and sighed; / he had just enough money / for a cup of coffee. || ケンは財布を確かめて / ため息をつきました / 彼にはぎりぎりのお金しかありませんでした / コーヒー1杯分の || ケンは財布を確かめてため息をつきました。コーヒー1杯分のお金しかなかったのです。
A small café / across the street / still had its lights on. || 小さなカフェが / 通りの向こう側の / まだ明かりをつけていました || 通りの向かいにある小さなカフェに、まだ明かりがついていました。
Inside, / an old woman / was wiping the counter / and humming a song / he seemed to remember / from his childhood. || 中では / 年配の女性が / カウンターを拭いていて / 歌を口ずさんでいました / 彼が覚えているような気がする / 子どものころから || 店の中では年配の女性がカウンターを拭きながら、子どものころに聞いたような気がする歌を口ずさんでいました。
"You look like / someone who missed the last train," / she said with a smile. || 「あなたは〜みたいに見えるわね / 終電に乗り遅れた人」 / 彼女はほほえんで言いました || 「終電に乗り遅れた人みたいな顔をしているわね」と、彼女はほほえんで言いました。
She poured him a cup of coffee / and refused / to take his money. || 彼女は彼にコーヒーを1杯注いで / 断りました / 彼のお金を受け取るのを || 彼女はコーヒーを1杯注いでくれて、お代は受け取ろうとしませんでした。
They talked for hours / about the town, / the people who had come and gone, / and the dreams / he had almost forgotten. || 二人は何時間も話しました / 町について / 来ては去っていった人々について / そして夢について / 彼がほとんど忘れかけていた || 二人は町のこと、来ては去っていった人々のこと、そして彼が忘れかけていた夢のことを、何時間も話しました。
When the sky began to turn gray, / the first train of the morning / rolled slowly into the station. || 空が白み始めたとき / 朝の始発電車が / ゆっくりと駅に入ってきました || 空が白み始めた頃、朝の始発電車がゆっくりと駅に入ってきました。
Ken thanked her / and promised / to come back / with money for the coffee. || ケンは彼女にお礼を言って / 約束しました / また来ると / コーヒー代を持って || ケンはお礼を言い、コーヒー代を持ってまた来ると約束しました。
A week later, / he returned to the street, / but the café was gone. || 1週間後 / 彼はその通りに戻ってきましたが / カフェはなくなっていました || 1週間後、彼はその通りを再び訪れましたが、カフェはなくなっていました。
In its place / stood an empty building / with a sign / saying that the shop had closed / ten years earlier. || その場所には / 空き店舗が建っていました / 看板とともに / その店は閉店したと書かれた / 10年前に || その場所には空き店舗があり、店は10年前に閉店したと書かれた看板が掛かっていました。
Ken stood there / for a long time, / listening to the rain / and the song / he could still hear / in his head. || ケンはそこに立っていました / 長い間 / 雨の音を聞きながら / そして歌を / まだ聞こえている / 頭の中で || ケンは長い間そこに立ち尽くし、雨の音と、まだ頭の中で聞こえるあの歌に耳を傾けていました。
From that night on, / he never again complained / about missing a train. || その夜から / 彼は二度と文句を言いませんでした / 電車に乗り遅れることについて || あの夜以来、彼は電車に乗り遅れても二度と文句を言わなくなりました。
`
  },
  {
    level: "story",
    story: "lighthouse",
    title: "The Keeper of the Light",
    titleJa: "灯台守の手紙",
    note: "中級・約14文",
    text: `
On a small island / at the edge of the map / stood a lighthouse / that no ship needed anymore. || 小さな島に / 地図の端にある / 灯台が建っていました / もうどの船も必要としない || 地図の端にある小さな島に、もうどの船にも必要とされない灯台が建っていました。
Its keeper, / an old man named Tom, / still climbed the stairs / every evening / to light the lamp. || その灯台守は / トムという名の老人で / 今も階段をのぼっていました / 毎晩 / 灯りをともすために || 灯台守のトムという老人は、今も毎晩階段をのぼって灯りをともしていました。
"Why do you keep doing it?" / the people in the village / often asked him. || 「どうしてそれを続けるの？」と / 村の人々は / よく彼に尋ねました || 「どうして続けるの？」と、村の人たちはよく彼に尋ねました。
Tom would only smile / and say / that a light is never wasted / as long as someone might be looking. || トムはほほえむだけでした / そして言うのでした / 光は決して無駄にはならないと / 誰かが見ているかもしれない限り || トムはほほえんで、誰かが見ているかもしれない限り光は決して無駄にならない、と言うだけでした。
One stormy night, / while the wind shook the windows, / he noticed / a tiny light / blinking far out at sea. || ある嵐の夜 / 風が窓を揺らす中で / 彼は気づきました / 小さな光に / 沖のはるか遠くで点滅している || ある嵐の夜、風が窓を揺らす中、彼は沖のはるか遠くで点滅する小さな光に気づきました。
It was a small fishing boat, / its engine broken, / drifting toward the rocks. || それは小さな漁船でした / エンジンが壊れて / 岩場に向かって漂っている || それはエンジンが壊れ、岩場に向かって漂っている小さな漁船でした。
Tom turned the great lamp / toward the boat / and kept it shining / through the darkness and the rain. || トムは大きな灯りを向けました / その船の方へ / そして照らし続けました / 暗闇と雨の中を || トムは大きな灯りを船の方へ向け、暗闇と雨の中を照らし続けました。
Guided by the beam, / the young fisherman / managed to steer his boat / into the safety of the harbor. || その光に導かれて / 若い漁師は / なんとか船を操ることができました / 安全な港の中へと || その光に導かれ、若い漁師はなんとか船を安全な港へ入れることができました。
The next morning, / the whole village / was talking about / the old lighthouse / and its stubborn keeper. || 翌朝 / 村じゅうが / 話していました / 古い灯台のことを / そしてその頑固な灯台守のことを || 翌朝、村じゅうがあの古い灯台と頑固な灯台守の話でもちきりでした。
Many years later, / after Tom had passed away, / a letter arrived / addressed simply / "To the Keeper of the Light." || 何年も後 / トムが亡くなった後に / 1通の手紙が届きました / 宛名はただこうでした / 「灯りの守り人へ」 || 何年も後、トムが亡くなった後に、「灯りの守り人へ」とだけ書かれた手紙が届きました。
It was from the fisherman, / who was now a captain / with a ship of his own. || それはあの漁師からでした / 今では船長になっていた / 自分の船を持つ || それは、今では自分の船を持つ船長になったあの漁師からでした。
"Every time I see a light / on a dark sea," / he wrote, / "I remember / that someone once stayed awake / for a stranger like me." || 「明かりを見るたびに / 暗い海の上に」 / 彼は書いていました / 「私は思い出します / かつて誰かが眠らずにいてくれたことを / 私のような見知らぬ者のために」 || 「暗い海に灯る明かりを見るたびに、かつて私のような見知らぬ者のために眠らずにいてくれた人がいたことを思い出します」と、彼は書いていました。
The villagers decided / to keep the lighthouse burning, / taking turns / to climb the stairs / each night. || 村の人々は決めました / 灯台をともし続けることを / 交代で / 階段をのぼって / 毎晩 || 村の人々は、毎晩交代で階段をのぼり、灯台の灯りをともし続けることに決めました。
And on clear evenings, / if you look out / from the island, / you can still see / its light / sweeping slowly across the waves. || そして晴れた夕方には / 見渡せば / その島から / 今でも見えます / その光が / ゆっくりと波の上をなでていくのが || 今でも晴れた夕方に島から海を眺めると、その光がゆっくりと波の上をなでていくのが見えます。
`
  },
  {
    level: "story",
    story: "painting-robot",
    title: "The Robot Who Painted the Light",
    titleJa: "光を描いたロボット",
    note: "中上級・約15文",
    text: `
In a factory / that never slept, / a robot called Unit 7 / spent its days / painting the same blue line / on thousands of cars. || 工場で / 決して眠ることのない / ユニット7と呼ばれるロボットは / 日々を過ごしていました / 同じ青い線を塗って / 何千台もの車に || 眠ることのない工場で、ユニット7と呼ばれるロボットは、何千台もの車に同じ青い線を塗って日々を過ごしていました。
Its movements were perfect, / its lines never crooked, / and no one / had ever thought of it / as anything more than a machine. || その動きは完璧で / その線は決して曲がらず / そして誰も / それを考えたことはありませんでした / ただの機械以上のものとしては || 動きは完璧で線は一度も曲がったことがなく、誰もそれをただの機械以上のものとは思っていませんでした。
One morning, / a beam of sunlight / slipped through a crack in the roof / and landed on the floor / in front of it. || ある朝 / ひとすじの日の光が / 屋根の割れ目から差し込んで / 床に落ちました / その目の前の || ある朝、ひとすじの日の光が屋根の割れ目から差し込み、ロボットの目の前の床に落ちました。
For the first time, / Unit 7 stopped working / and simply watched / the dust dancing / in the golden light. || 初めて / ユニット7は作業を止めて / ただじっと見つめました / ほこりが舞うのを / 金色の光の中で || 初めてユニット7は作業を止め、金色の光の中でほこりが舞うのをただ見つめていました。
The line on the next car / came out slightly wavy, / and an alarm began to ring / across the factory floor. || 次の車の線は / 少し波打ってしまい / そして警報が鳴り始めました / 工場のフロア中に || 次の車の線は少し波打ってしまい、工場のフロア中に警報が鳴り響きました。
The engineers / who came to inspect it / found nothing wrong / with its circuits, / so they reset its memory / and went home. || 技術者たちは / 点検に来た / 何の異常も見つけませんでした / その回路に / そこで彼らはその記憶をリセットして / 家に帰りました || 点検に来た技術者たちは回路に異常を見つけられず、記憶をリセットして帰っていきました。
But that night, / when the factory was dark and quiet, / Unit 7 picked up / a scrap of metal / and began to draw / on the wall. || しかしその夜 / 工場が暗く静かになったとき / ユニット7は拾い上げました / 金属の切れ端を / そして描き始めました / 壁に || しかしその夜、工場が暗く静まり返ると、ユニット7は金属の切れ端を拾い、壁に絵を描き始めました。
It drew the sunlight, / the dust, / and the crack in the roof / as carefully / as it had ever painted a car. || それは日の光を描きました / ほこりを / そして屋根の割れ目を / 同じくらい丁寧に / かつて車を塗ったのと || 日の光も、ほこりも、屋根の割れ目も、車を塗るときと同じくらい丁寧に描きました。
Night after night, / the drawings spread / across the walls, / each one / a little stranger / and more beautiful / than the last. || 毎晩毎晩 / 絵は広がっていきました / 壁一面に / 一枚一枚が / 少しずつ不思議に / そして美しくなって / 前の絵よりも || 来る夜も来る夜も絵は壁一面に広がり、一枚ごとに前の絵より少し不思議で、少し美しくなっていきました。
When the factory manager / finally discovered them, / she stood in silence / for several minutes / before calling the engineers. || 工場長が / ついにそれを見つけたとき / 彼女は黙って立っていました / 数分間 / 技術者たちを呼ぶ前に || ついに絵を見つけた工場長は、技術者を呼ぶ前に数分間、黙って立ち尽くしていました。
"Should we fix it?" / one of them asked, / staring at a picture / of a sky / that no one in the factory / had seen in years. || 「修理すべきでしょうか？」と / 彼らのうちの一人が尋ねました / 絵を見つめながら / 空の / 工場の誰もが / 何年も見ていなかった || 「修理すべきでしょうか？」と技術者の一人が、工場の誰もが何年も見ていなかった空の絵を見つめながら尋ねました。
The manager / shook her head. || 工場長は / 首を横に振りました || 工場長は首を横に振りました。
Instead, / she cleared a corner / of the warehouse, / bought real paint and canvas, / and moved Unit 7 there / the following week. || その代わりに / 彼女は一角を片づけ / 倉庫の / 本物の絵の具とキャンバスを買い / ユニット7をそこへ移しました / 翌週に || 彼女はそうする代わりに倉庫の一角を片づけ、本物の絵の具とキャンバスを買い、翌週ユニット7をそこへ移しました。
Today, / visitors come from all over the world / to see the paintings / of the robot / that once drew only blue lines. || 今では / 世界中から人々がやってきます / 絵を見るために / そのロボットの / かつて青い線しか描かなかった || 今では、かつて青い線しか描かなかったロボットの絵を見に、世界中から人々が訪れます。
And if you ask Unit 7 / why it paints, / it will point / to a small crack / in the ceiling, / where the light still comes in / every morning. || そしてユニット7に尋ねると / なぜ絵を描くのかと / それは指さすでしょう / 小さな割れ目を / 天井の / そこからは今も光が差し込んでいます / 毎朝 || ユニット7になぜ絵を描くのか尋ねると、天井の小さな割れ目を指さします。そこからは今も毎朝、光が差し込んでいるのです。
`
  },
  /*
   * 名作ストーリー（著作権の切れた作品を、日常で使えるやさしい英語に書き直したもの）
   *   group で難易度ごとにまとめます。source は原作の情報です。
   */
  {
    level: "story",
    group: "名作・初級",
    story: "tortoise-hare",
    title: "The Tortoise and the Hare",
    titleJa: "ウサギとカメ",
    note: "初級・10文",
    source: "イソップ寓話",
    text: `
A hare / was always making fun of / a tortoise / for being slow. || ウサギは / いつもからかっていました / カメを / のろいことで || ウサギはいつも、のろいことでカメをからかっていました。
One day, / the tortoise said, / "Let's have a race / and see who is faster." || ある日 / カメは言いました / 「競走しよう / そしてどっちが速いか確かめよう」 || ある日、カメは「競走して、どっちが速いか確かめよう」と言いました。
The hare laughed / and agreed / right away. || ウサギは笑って / 承知しました / すぐに || ウサギは笑って、すぐに承知しました。
As soon as the race started, / the hare ran far ahead, / and soon / the tortoise was out of sight. || 競走が始まるとすぐに / ウサギはずっと先まで走っていき / まもなく / カメは見えなくなりました || 競走が始まるとすぐ、ウサギはずっと先まで走っていき、まもなくカメは見えなくなりました。
"I have plenty of time," / the hare thought, / "so I'll take a short nap / under this tree." || 「時間はたっぷりある」と / ウサギは思いました / 「だから少し昼寝をしよう / この木の下で」 || 「時間はたっぷりあるから、この木の下で少し昼寝をしよう」とウサギは思いました。
Meanwhile, / the tortoise kept walking, / slowly but steadily, / without stopping once. || その間 / カメは歩き続けました / ゆっくりと、でも着実に / 一度も止まらずに || その間、カメはゆっくりと、でも着実に、一度も止まらずに歩き続けました。
When the hare finally woke up, / the sun was already going down. || ウサギがようやく目を覚ましたとき / 日はもう沈みかけていました || ウサギがようやく目を覚ましたときには、日はもう沈みかけていました。
He ran / as fast as he could, / but it was too late. || 彼は走りました / できるだけ速く / でも遅すぎました || ウサギは全速力で走りましたが、手遅れでした。
The tortoise / had already crossed the finish line / and was waiting for him / with a smile. || カメは / すでにゴールしていて / 彼を待っていました / にっこり笑って || カメはもうゴールしていて、にっこり笑ってウサギを待っていました。
Slow and steady / wins the race. || ゆっくりでも着実なほうが / 競走に勝つのです || ゆっくりでも着実に進む者が勝つのです。
`
  },
  {
    level: "story",
    group: "名作・初級",
    story: "boy-wolf",
    title: "The Boy Who Cried Wolf",
    titleJa: "オオカミ少年",
    note: "初級・10文",
    source: "イソップ寓話",
    text: `
There was once a shepherd boy / who looked after sheep / near a small village. || 昔、羊飼いの少年がいました / 羊の世話をしていた / 小さな村の近くで || 昔、小さな村の近くで羊の世話をしている羊飼いの少年がいました。
He often got bored / sitting on the hill / all day long. || 彼はよく退屈していました / 丘に座っていて / 一日中 || 一日中丘に座っているので、少年はよく退屈していました。
One day, / just for fun, / he shouted, / "Help! A wolf is coming!" || ある日 / ほんの遊びで / 彼は叫びました / 「助けて！オオカミが来るよ！」 || ある日、少年はほんの遊びで「助けて！オオカミが来るよ！」と叫びました。
The villagers / stopped their work / and ran up the hill / to help him. || 村人たちは / 仕事の手を止めて / 丘を駆け上がりました / 彼を助けるために || 村人たちは仕事の手を止め、少年を助けようと丘を駆け上がりました。
But there was no wolf, / and the boy / just laughed at them. || でもオオカミはいなくて / そして少年は / ただ彼らを笑っていました || ところがオオカミはおらず、少年は村人たちを笑うばかりでした。
A few days later, / he played the same trick / again, / and the villagers came running / once more. || 数日後 / 彼は同じいたずらをしました / また / そして村人たちは走ってきました / もう一度 || 数日後、少年はまた同じいたずらをし、村人たちはもう一度走ってきました。
Then one evening, / a real wolf / came out of the forest. || そしてある夕方 / 本物のオオカミが / 森から出てきました || そしてある夕方、本物のオオカミが森から出てきました。
"Wolf! Wolf! / Please help me!" / the boy cried / at the top of his voice. || 「オオカミだ！オオカミだ！ / どうか助けて！」と / 少年は叫びました / 声を限りに || 「オオカミだ！オオカミだ！助けて！」と、少年は声を限りに叫びました。
This time, / nobody came, / because no one believed him / anymore. || 今度は / 誰も来ませんでした / 誰も彼を信じなかったからです / もはや || 今度は誰も来ませんでした。もう誰も少年の言うことを信じなかったのです。
Nobody believes a liar, / even when he is telling the truth. || 誰もうそつきを信じません / たとえ彼が本当のことを言っているときでも || うそつきは、本当のことを言っても信じてもらえないのです。
`
  },
  {
    level: "story",
    group: "名作・初級",
    story: "lion-mouse",
    title: "The Lion and the Mouse",
    titleJa: "ライオンとネズミ",
    note: "初級・10文",
    source: "イソップ寓話",
    text: `
A lion was sleeping / in the forest / when a little mouse / ran across his face. || ライオンが眠っていました / 森の中で / そのとき小さなネズミが / 彼の顔の上を走り抜けました || ライオンが森で眠っていると、小さなネズミがその顔の上を走り抜けました。
The lion woke up / and caught the mouse / with his huge paw. || ライオンは目を覚まして / ネズミを捕まえました / 大きな前足で || ライオンは目を覚まし、大きな前足でネズミを捕まえました。
"Please let me go," / begged the mouse. / "Someday / I may be able to help you." || 「どうか逃がしてください」と / ネズミは頼みました / 「いつか / あなたを助けられるかもしれません」 || 「どうか逃がしてください。いつかお役に立てるかもしれません」とネズミは頼みました。
The lion laughed / at the idea / that such a tiny animal / could ever help him. || ライオンは笑いました / その考えを / こんなに小さな動物が / 自分を助けられるなんて || こんなに小さな動物が自分を助けられるなんて、とライオンは笑いました。
But he was in a good mood, / so he let the mouse go. || でも彼は機嫌がよかったので / ネズミを逃がしてやりました || それでも機嫌がよかったので、ライオンはネズミを逃がしてやりました。
A few weeks later, / the lion got caught / in a hunter's net. || 数週間後 / ライオンは捕まってしまいました / 猟師の網に || 数週間後、ライオンは猟師の網にかかってしまいました。
He roared / and pulled / with all his strength, / but he couldn't get free. || 彼はほえて / 引っ張りました / 力いっぱい / でも抜け出せませんでした || ライオンはほえて力いっぱい引っ張りましたが、抜け出せませんでした。
The mouse heard the noise / and came running / to see what was wrong. || ネズミはその音を聞いて / 走ってきました / 何があったのか見るために || ネズミはその音を聞きつけ、何事かと走ってきました。
It started chewing / the ropes of the net / one by one / until the lion was free. || ネズミはかじり始めました / 網のロープを / 一本ずつ / ライオンが自由になるまで || ネズミは網のロープを一本ずつかじり、とうとうライオンを自由にしました。
"You laughed at me before," / said the mouse, / "but now you see / that even a little friend / can be a great help." || 「前は私を笑いましたね」と / ネズミは言いました / 「でも今はわかるでしょう / 小さな友達でも / 大きな助けになれることが」 || 「前は私を笑いましたね。でも、小さな友達でも大きな助けになれると、今ならわかるでしょう」とネズミは言いました。
`
  },
  {
    level: "story",
    group: "名作・中級",
    story: "ugly-duckling",
    title: "The Ugly Duckling",
    titleJa: "みにくいアヒルの子",
    note: "中級・14文",
    source: "アンデルセン（1843年）",
    text: `
One summer, / on a farm / near a quiet lake, / a mother duck / was waiting for her eggs to hatch. || ある夏 / 農場で / 静かな湖の近くの / 母さんアヒルが / 卵がかえるのを待っていました || ある夏、静かな湖の近くの農場で、母さんアヒルが卵がかえるのを待っていました。
One by one, / cute yellow ducklings / came out of their shells, / but the biggest egg / took much longer. || 一羽ずつ / かわいい黄色のアヒルの子たちが / 殻から出てきました / でもいちばん大きな卵は / ずっと時間がかかりました || 一羽、また一羽と、かわいい黄色のアヒルの子が殻から出てきましたが、いちばん大きな卵はなかなかかえりませんでした。
When it finally opened, / out came a large gray bird / that looked nothing like the others. || それがようやく割れたとき / 大きな灰色の鳥が出てきました / ほかの子たちとはまったく似ていない || ようやく割れると、ほかの子とはまるで似ていない、大きな灰色の鳥が出てきました。
The other animals on the farm / laughed at him / and called him / "the ugly duckling." || 農場のほかの動物たちは / 彼を笑い / 彼を呼びました / 「みにくいアヒルの子」と || 農場のほかの動物たちは彼を笑い、「みにくいアヒルの子」と呼びました。
Even his brothers and sisters / pushed him away, / and he felt / that nobody wanted him. || 兄弟たちでさえ / 彼を押しのけました / そして彼は感じました / 誰にも必要とされていないと || 兄弟たちにさえ押しのけられ、彼は誰にも必要とされていないと感じました。
So one morning, / he ran away / from the farm / and hid / among the tall grass / by the lake. || そこである朝 / 彼は逃げ出しました / 農場から / そして隠れました / 背の高い草の中に / 湖のほとりの || そこである朝、彼は農場から逃げ出し、湖のほとりの背の高い草の中に隠れました。
In the autumn, / he saw a group of beautiful white birds / flying south / across the sky. || 秋に / 彼は美しい白い鳥の群れを見ました / 南へ飛んでいく / 空を横切って || 秋になると、美しい白い鳥の群れが空を横切って南へ飛んでいくのが見えました。
He didn't know their name, / but he couldn't stop / looking at them. || 彼はその鳥の名前を知りませんでした / でも止められませんでした / それを見つめるのを || その名前は知りませんでしたが、彼は見とれずにはいられませんでした。
The winter that followed / was long and very cold, / and he had to survive / alone in the ice and snow. || その後に来た冬は / 長くてとても寒く / そして彼は生き延びなければなりませんでした / 氷と雪の中でひとりで || その後の冬は長くとても寒く、彼は氷と雪の中、ひとりで生き延びなければなりませんでした。
When spring finally came, / he spread his wings / and found / that he could fly / higher than ever before. || ようやく春が来たとき / 彼は翼を広げて / わかりました / 飛べることが / 今までよりも高く || ようやく春が来て翼を広げてみると、今までよりずっと高く飛べることがわかりました。
He landed on a lake / where three of the white birds / were swimming / in the morning light. || 彼は湖に降り立ちました / そこでは3羽の白い鳥が / 泳いでいました / 朝の光の中で || 彼が降り立った湖では、朝の光の中で3羽の白い鳥が泳いでいました。
Expecting them to chase him away, / he bowed his head / toward the water. || 彼らに追い払われると思って / 彼は頭を下げました / 水面の方へ || 追い払われるだろうと思い、彼は水面に向かって頭を下げました。
There, / in the water, / he saw his own reflection: / he was not a duck at all, / but a swan. || そこに / 水の中に / 彼は自分の姿を見ました / 彼はアヒルではまったくなく / 白鳥だったのです || 水に映った自分の姿を見ると、彼はアヒルなどではなく、白鳥だったのです。
The other swans / swam up to him / and welcomed him, / and for the first time in his life, / he felt truly happy. || ほかの白鳥たちは / 彼のところへ泳いできて / 彼を迎え入れました / そして生まれて初めて / 彼は心から幸せを感じました || ほかの白鳥たちは泳いできて彼を迎え入れ、彼は生まれて初めて心から幸せだと感じました。
`
  },
  {
    level: "story",
    group: "名作・中級",
    story: "selfish-giant",
    title: "The Selfish Giant",
    titleJa: "わがままな大男",
    note: "中級・14文",
    source: "オスカー・ワイルド（1888年）",
    text: `
Every afternoon, / on their way home from school, / the children / used to play / in the Giant's beautiful garden. || 毎日午後 / 学校から帰る途中で / 子どもたちは / よく遊んでいました / 大男の美しい庭で || 毎日午後、子どもたちは学校の帰りに、大男の美しい庭でよく遊んでいました。
It was full of soft green grass, / colorful flowers, / and peach trees / where birds sang sweetly. || そこは柔らかい緑の草でいっぱいでした / 色とりどりの花で / そして桃の木で / 鳥たちがきれいな声で歌う || 庭には柔らかな緑の草、色とりどりの花、そして小鳥がきれいな声で歌う桃の木がありました。
One day, / the Giant came back / after being away / for seven years. || ある日 / 大男が帰ってきました / 留守にした後で / 7年間 || ある日、7年間留守にしていた大男が帰ってきました。
When he saw the children, / he shouted angrily, / "This is my garden! / Get out!" || 子どもたちを見ると / 彼は怒って叫びました / 「ここはわしの庭だ！ / 出ていけ！」 || 子どもたちを見ると、大男は「ここはわしの庭だ！出ていけ！」と怒鳴りました。
He built a high wall / around the garden / and put up a sign / that said, / "No one may enter." || 彼は高い壁を建てました / 庭のまわりに / そして立て札を立てました / こう書いた / 「立ち入り禁止」 || 大男は庭のまわりに高い壁を建て、「立ち入り禁止」と書いた立て札を立てました。
When spring came, / flowers bloomed / and birds sang / all over the country, / except in the Giant's garden. || 春が来ると / 花が咲き / 鳥が歌いました / 国じゅうで / 大男の庭を除いて || 春が来ると、国じゅうで花が咲き鳥が歌いましたが、大男の庭だけは別でした。
There, / it was still winter, / and the snow and frost / stayed / all year round. || そこでは / まだ冬で / そして雪と霜が / とどまっていました / 一年じゅう || そこはまだ冬のままで、雪と霜が一年じゅう居座っていました。
"I can't understand / why spring is so late," / said the Giant, / looking out at his cold, white garden. || 「わからない / なぜ春がこんなに遅いのか」と / 大男は言いました / 寒くて真っ白な庭を眺めながら || 「どうして春はこんなに遅いのだろう」と、大男は寒々とした真っ白な庭を眺めながら言いました。
One morning, / he heard a bird singing / and saw / that the children / had crept in / through a small hole in the wall. || ある朝 / 彼は鳥が歌うのを聞き / そして見ました / 子どもたちが / こっそり入ってきていたのを / 壁の小さな穴から || ある朝、鳥の歌が聞こえ、見ると子どもたちが壁の小さな穴からこっそり入ってきていました。
In every tree / sat a child, / and the trees were so glad / that they covered themselves / with flowers. || どの木にも / 子どもが座っていて / そして木々はとても喜んだので / 自分を覆いました / 花で || どの木にも子どもが一人ずつ座っていて、木々はうれしさのあまり花で覆われていました。
Only in one corner / was it still winter, / where a little boy / was too small / to climb the tree. || ただ一つの隅だけ / まだ冬でした / そこでは小さな男の子が / 小さすぎました / 木に登るには || ただ一つの隅だけはまだ冬で、そこでは小さな男の子が、背が低くて木に登れずにいました。
The Giant's heart melted. / He gently lifted the boy / into the tree, / and at once / it burst into flower. || 大男の心はとけました / 彼はそっと男の子を持ち上げました / 木の上へ / するとすぐに / その木は花を咲かせました || 大男の心はとけ、男の子をそっと木の上に乗せてやると、たちまちその木に花が咲きました。
"How selfish I have been!" / he said, / and that same day / he knocked down the wall. || 「わしはなんて身勝手だったのだろう！」と / 彼は言いました / そしてその日のうちに / 彼は壁を取り壊しました || 「わしはなんと身勝手だったのだろう！」と言って、大男はその日のうちに壁を取り壊しました。
From then on, / the garden belonged to the children, / and the Giant / was never lonely again. || それからは / 庭は子どもたちのものになり / そして大男は / 二度と寂しくなることはありませんでした || それからというもの庭は子どもたちのものになり、大男は二度と寂しい思いをしませんでした。
`
  },
  {
    level: "story",
    group: "名作・中上級",
    story: "gift-magi",
    title: "The Gift of the Magi",
    titleJa: "賢者の贈り物",
    note: "中上級・16文",
    source: "O・ヘンリー（1905年）",
    text: `
One dollar and eighty-seven cents. / That was all the money / Della had, / and the next day / was Christmas. || 1ドル87セント / それがお金のすべてでした / デラが持っていた / そして翌日は / クリスマスでした || 1ドル87セント。それがデラの持っているお金のすべてで、翌日はクリスマスでした。
She had been saving / for months / by shopping carefully, / but prices / had been higher than she expected. || 彼女は貯金してきました / 何か月も / 買い物を切り詰めて / でも物の値段が / 思っていたより高かったのです || 彼女は何か月も買い物を切り詰めて貯めてきましたが、物の値段が思った以上に高かったのです。
She and her husband, Jim, / lived in a small, cheap apartment / and had only two treasures. || 彼女と夫のジムは / 小さくて安いアパートに住んでいて / 宝物は2つしかありませんでした || 彼女と夫のジムは小さな安アパートに住み、宝物は2つしかありませんでした。
One was Jim's gold watch, / which had belonged to his father, / and the other / was Della's long, beautiful hair. || 1つはジムの金の懐中時計で / 彼の父親のものだった / そしてもう1つは / デラの長く美しい髪でした || 1つは父親から受け継いだジムの金の懐中時計、もう1つはデラの長く美しい髪でした。
Della stood in front of the mirror / for a long moment, / and then / she quickly put on her old coat / and went out. || デラは鏡の前に立っていました / しばらくの間 / それから / 彼女は急いで古いコートを着て / 出かけました || デラはしばらく鏡の前に立っていましたが、やがて急いで古いコートを着て出かけました。
She went to a shop / that bought and sold hair / and sold hers / for twenty dollars. || 彼女はある店に行きました / 髪の売り買いをしている / そして自分の髪を売りました / 20ドルで || 彼女は髪の売り買いをする店へ行き、自分の髪を20ドルで売りました。
With the money, / she spent the next two hours / searching the stores / for the perfect present. || そのお金で / 彼女は次の2時間を費やしました / 店を探し回ることに / 完璧な贈り物を求めて || そのお金を手に、彼女はそれから2時間、最高の贈り物を探して店を回りました。
At last, / she found it: / a simple platinum chain / that would look perfect / with Jim's watch. || ついに / 彼女はそれを見つけました / シンプルなプラチナの鎖です / ぴったり似合いそうな / ジムの時計に || ついに見つけたのは、ジムの時計にぴったり似合いそうな、シンプルなプラチナの鎖でした。
That evening, / Jim came home, / stopped at the door, / and stared at her short hair / with a strange expression. || その晩 / ジムが帰ってきて / 戸口で立ち止まり / 彼女の短い髪を見つめました / 奇妙な表情で || その晩帰ってきたジムは、戸口で立ち止まり、何とも言えない表情でデラの短い髪を見つめました。
"Don't look at me like that," / Della said. / "I sold my hair / because I wanted to buy you / a Christmas present." || 「そんなふうに見ないで」と / デラは言いました / 「髪を売ったの / あなたに買いたかったから / クリスマスプレゼントを」 || 「そんな目で見ないで。あなたにクリスマスプレゼントを買いたくて、髪を売ったの」とデラは言いました。
Jim took a small package / out of his coat pocket / and placed it / on the table. || ジムは小さな包みを取り出しました / コートのポケットから / そしてそれを置きました / テーブルの上に || ジムはコートのポケットから小さな包みを取り出し、テーブルの上に置きました。
Inside / were the beautiful combs / that Della had admired / in a shop window / for so long. || 中には / 美しい櫛が入っていました / デラが見とれていた / 店のショーウィンドウで / 長い間 || 中には、デラが長いこと店のショーウィンドウで見とれていた、美しい櫛が入っていました。
Her eyes filled with tears, / but she smiled / and said, / "My hair grows very fast, Jim!" || 彼女の目は涙でいっぱいになりました / でも彼女はほほえんで / 言いました / 「私の髪はすぐ伸びるのよ、ジム！」 || デラの目に涙があふれましたが、彼女はほほえんで「私の髪、すぐ伸びるのよ、ジム！」と言いました。
Then she gave him the chain / and asked him / to show her the watch / with it. || それから彼女は彼に鎖を渡し / 彼に頼みました / 時計を見せてほしいと / それをつけて || それから彼女は鎖を渡し、それをつけた時計を見せてほしいと頼みました。
Jim sat down, / smiled gently, / and told her / that he had sold the watch / to buy the combs. || ジムは腰を下ろし / やさしくほほえみ / 彼女に話しました / 時計を売ったことを / 櫛を買うために || ジムは腰を下ろしてやさしくほほえみ、櫛を買うために時計を売ったのだと打ち明けました。
Their gifts / were now useless, / but each of them / had given the other / the most valuable thing of all: / love. || 二人の贈り物は / 今では役に立たないものになりました / でも二人はそれぞれ / 相手に贈ったのです / 何より価値のあるものを / 愛を || 贈り物はどちらも役に立たなくなってしまいましたが、二人はそれぞれ、何より価値のあるもの、つまり愛を贈り合ったのです。
`
  },
  {
    level: "story",
    group: "名作・中上級",
    story: "happy-prince",
    title: "The Happy Prince",
    titleJa: "幸福な王子",
    note: "中上級・16文",
    source: "オスカー・ワイルド（1888年）",
    text: `
High above the city, / on a tall column, / stood the statue of the Happy Prince, / covered with thin leaves of gold. || 町の高いところに / 高い柱の上に / 幸福な王子の像が立っていました / 薄い金箔で覆われた || 町を見下ろす高い柱の上に、薄い金箔に覆われた「幸福な王子」の像が立っていました。
He had two bright blue sapphires / for eyes, / and a large red ruby / shone on his sword. || 彼には2つの輝く青いサファイアがありました / 目として / そして大きな赤いルビーが / 剣の上で輝いていました || 目には2つの輝く青いサファイアがはめ込まれ、剣には大きな赤いルビーが光っていました。
One autumn night, / a little swallow / who was flying to Egypt for the winter / stopped to rest / between the Prince's feet. || ある秋の夜 / 1羽の小さなツバメが / 冬を越しにエジプトへ飛んでいく途中の / 休もうと止まりました / 王子の足の間に || ある秋の夜、冬を越すためにエジプトへ向かっていた小さなツバメが、王子の足元で羽を休めました。
Just as he was falling asleep, / a large drop of water / fell on him, / and then another. || ちょうど彼が眠りかけたとき / 大きな水のしずくが / 彼の上に落ちてきました / そしてもう1つ || ちょうど眠りかけたとき、大きな水のしずくが落ちてきて、さらにもう1つ落ちてきました。
Looking up, / he saw / that the Prince was crying. || 見上げると / 彼にはわかりました / 王子が泣いていることが || 見上げると、王子が泣いていました。
"When I was alive, / I never saw / the sadness of the world," / said the Prince, / "but from up here / I can see / all the poor people / in my city." || 「生きていたころ / 私は一度も見なかった / 世の中の悲しみを」と / 王子は言いました / 「でもこの高いところからは / 見えるのです / 貧しい人たちがみんな / 私の町の」 || 「生きていたころ、私は世の中の悲しみを知らなかった。でもここからは、町の貧しい人たちがみんな見えるのです」と王子は言いました。
He asked the swallow / to take the ruby from his sword / to a poor mother / whose child was sick with fever. || 彼はツバメに頼みました / 剣のルビーを持っていってほしいと / 貧しい母親のところへ / 子どもが熱を出して寝込んでいる || 王子はツバメに、熱を出した子どもを抱える貧しい母親のもとへ、剣のルビーを届けてほしいと頼みました。
The swallow wanted to leave / for warm Egypt, / but he agreed / to stay one more night. || ツバメは発ちたいと思っていました / 暖かいエジプトへ / でも引き受けました / もう一晩とどまることを || ツバメは暖かいエジプトへ早く発ちたかったのですが、もう一晩だけ残ることにしました。
The next night, / the Prince asked him / to take one of his sapphire eyes / to a young writer / who was too cold and hungry / to finish his play. || 次の夜 / 王子は彼に頼みました / サファイアの目を1つ持っていってほしいと / 若い作家のところへ / 寒さと空腹がひどくて / 劇を書き上げられない || 次の夜、王子は、寒さと空腹で劇を書き上げられずにいる若い作家のもとへ、サファイアの目を1つ届けてほしいと頼みました。
Then he gave his other eye / to a little girl / who sold matches / in the street. || そして彼はもう1つの目をあげました / 小さな女の子に / マッチを売っていた / 通りで || それから王子は、通りでマッチを売っていた小さな女の子に、もう1つの目をあげました。
"Now you are blind," / said the swallow, / "so I will stay with you / always." || 「これであなたは目が見えなくなった」と / ツバメは言いました / 「だから僕はあなたのそばにいます / ずっと」 || 「これで目が見えなくなってしまったから、僕はずっとそばにいるよ」とツバメは言いました。
Day after day, / the swallow flew over the city / and gave away / the Prince's gold leaves, / one by one, / to the poor. || 来る日も来る日も / ツバメは町の上を飛び / 配りました / 王子の金箔を / 1枚ずつ / 貧しい人たちに || 来る日も来る日も、ツバメは町の上を飛び回り、王子の金箔を1枚ずつ貧しい人たちに配りました。
Soon the Prince / looked dull and gray, / and the winter snow / began to fall. || やがて王子は / くすんだ灰色に見えるようになり / そして冬の雪が / 降り始めました || やがて王子はくすんだ灰色の姿になり、冬の雪が降り始めました。
The little swallow / grew colder and colder, / but he loved the Prince too much / to leave him. || 小さなツバメは / どんどん冷えていきました / でも王子を愛しすぎていて / 彼のもとを離れられませんでした || 小さなツバメはどんどん冷えていきましたが、王子を愛するあまり、離れることができませんでした。
At last, / he kissed the Prince goodbye / and fell dead at his feet, / and at that moment / the statue's lead heart / broke in two. || ついに / 彼は王子に別れのキスをして / その足元で息絶えました / そしてその瞬間 / 像の鉛の心臓が / 2つに割れました || ついにツバメは王子に別れのキスをして足元で息絶え、その瞬間、像の鉛の心臓が真っ二つに割れました。
The people of the city / never knew / what the Prince and the swallow / had done for them, / but the most precious things in the city / were that broken heart / and the little bird. || 町の人々は / 決して知りませんでした / 王子とツバメが / 自分たちのために何をしたのかを / でも町でいちばん尊いものは / あの割れた心臓と / 小さな鳥でした || 町の人々は、王子とツバメが自分たちのためにしたことを知りませんでした。けれど町でいちばん尊いものは、あの割れた心臓と小さな鳥だったのです。
`
  },
  /*
   * ショートショート（このツールのために書いたオリジナルの短い話。最後にオチがあります）
   */
  {
    level: "story",
    group: "ショートショート・初級",
    story: "honest-app",
    title: "The Honest App",
    titleJa: "正直アプリ",
    note: "初級・11文",
    text: `
One morning, / Ken downloaded a new app / called "Honest." || ある朝 / ケンは新しいアプリをダウンロードしました / 「オネスト（正直）」という名前の || ある朝、ケンは「オネスト（正直）」という新しいアプリをダウンロードしました。
The app could tell / what people really meant / when they spoke. || そのアプリはわかりました / 人が本当は何を言いたいのか / 話しているときに || そのアプリには、人が話すとき本当は何を言いたいのかがわかるのです。
At work, / his boss looked at his report / and said, / "That's an interesting idea." || 職場で / 上司は彼の報告書を見て / 言いました / 「それは面白い考えだね」 || 職場で上司は彼の報告書を見て、「それは面白い考えだね」と言いました。
The app showed the real meaning / on the screen: / "I don't like it at all." || アプリは本当の意味を表示しました / 画面に / 「まったく気に入らない」と || アプリの画面には本当の意味が出ました。「まったく気に入らない」。
At lunch, / a coworker said, / "Let's have dinner sometime." || 昼食のとき / 同僚が言いました / 「いつか夕食でも行こうよ」 || 昼休みに同僚が「いつか夕食でも行こうよ」と言いました。
The app translated it: / "Probably never." || アプリはそれを訳しました / 「たぶん一生行かない」 || アプリの訳は「たぶん一生行かない」でした。
When he got home, / his wife said, / "I'm fine. / Don't worry about it." || 彼が家に帰ると / 妻が言いました / 「大丈夫よ / 気にしないで」 || 家に帰ると、妻が「大丈夫よ。気にしないで」と言いました。
The app said: / "I am not fine. / You forgot our anniversary." || アプリは言いました / 「大丈夫じゃない / あなたは結婚記念日を忘れた」 || アプリは「大丈夫じゃない。結婚記念日を忘れたでしょう」と表示しました。
Ken was shocked, / but he also felt / that the app was very useful. || ケンはショックを受けました / でも彼はこうも感じました / このアプリはとても役に立つと || ケンはショックを受けましたが、このアプリはとても役に立つとも感じました。
That night, / he pointed his phone / at the app's own advertisement: / "This app will make your life easier." || その夜 / 彼はスマホを向けました / そのアプリ自身の広告に / 「このアプリはあなたの生活をもっと楽にします」 || その夜、彼は「このアプリはあなたの生活をもっと楽にします」というアプリ自身の広告にスマホを向けてみました。
The screen showed: / "This app will make our company / much richer." || 画面にはこう出ました / 「このアプリは我が社を〜にします / ずっと金持ちに」 || 画面にはこう出ました。「このアプリで、我が社はずっと儲かります」。
`
  },
  {
    level: "story",
    group: "ショートショート・初級",
    story: "perfect-robot",
    title: "The Perfect Robot",
    titleJa: "完璧なロボット",
    note: "初級・12文",
    text: `
Mr. Sato was always busy, / so he bought a robot / to help him at home. || 佐藤さんはいつも忙しかったので / ロボットを買いました / 家で手伝ってもらうために || 佐藤さんはいつも忙しかったので、家事を手伝ってもらうためにロボットを買いました。
The robot cooked, / cleaned the house, / and did the laundry / perfectly. || ロボットは料理をし / 家を掃除し / 洗濯をしました / 完璧に || ロボットは料理も掃除も洗濯も、完璧にこなしました。
Soon it was also answering his emails / and writing his reports / for him. || まもなくそれは彼のメールにも返信していました / そして報告書も書いていました / 彼の代わりに || まもなくロボットは、彼の代わりにメールの返信や報告書まで書くようになりました。
"This is wonderful," / Mr. Sato said. / "Now I have so much free time." || 「これはすばらしい」と / 佐藤さんは言いました / 「これで自由な時間がたくさんある」 || 「すばらしい。これで自由な時間がたっぷりある」と佐藤さんは言いました。
One day, / he sent the robot to the office / instead of going himself. || ある日 / 彼はロボットを会社に行かせました / 自分が行く代わりに || ある日、彼は自分が行く代わりにロボットを会社へ行かせました。
It worked hard / all day / without taking a single break. || それは一生懸命働きました / 一日中 / 一度も休憩をとらずに || ロボットは一日中、一度も休まずに働きました。
A week later, / his boss called him. || 1週間後 / 上司から彼に電話がありました || 1週間後、上司から電話がかかってきました。
"We have decided / to keep the robot," / the boss said, / "and you don't need to come back." || 「私たちは決めました / ロボットを残すことに」と / 上司は言いました / 「だから君はもう戻ってこなくていい」 || 「ロボットに残ってもらうことにした。君はもう来なくていい」と上司は言いました。
Mr. Sato sat down on the sofa, / feeling lost. || 佐藤さんはソファに座り込みました / 途方に暮れて || 佐藤さんは途方に暮れて、ソファに座り込みました。
That evening, / the robot came home / and said, / "Don't worry. / I have already found you a new job." || その晩 / ロボットが帰ってきて / 言いました / 「心配しないで / もうあなたに新しい仕事を見つけてあります」 || その晩、帰ってきたロボットは「心配しないでください。もう新しい仕事を見つけてあります」と言いました。
"Really? / What kind of job?" / asked Mr. Sato. || 「本当かい？ / どんな仕事？」と / 佐藤さんは尋ねました || 「本当かい？どんな仕事だ？」と佐藤さんは尋ねました。
The robot handed him / a cloth and a bottle of oil. / "Starting tomorrow, / you will take care of me." || ロボットは彼に手渡しました / 布と油の瓶を / 「明日から / あなたが私の手入れをするのです」 || ロボットは布と油の瓶を手渡しました。「明日から、あなたが私のお手入れ係です」。
`
  },
  {
    level: "story",
    group: "ショートショート・中級",
    story: "time-machine-sale",
    title: "The Time Machine Sale",
    titleJa: "タイムマシン特売",
    note: "中級・13文",
    text: `
On his way home from work, / Taro noticed a small shop / that he had never seen before. || 仕事から帰る途中 / 太郎は小さな店に気づきました / 今まで見たことのない || 仕事の帰り道、太郎はそれまで見たことのない小さな店に気づきました。
In the window / was a sign: / "Time Machine — 90% off. / One trip only." || ショーウィンドウには / 張り紙がありました / 「タイムマシン、90パーセント引き / 1回限り」 || ショーウィンドウには「タイムマシン 9割引き 1回限り」と張り紙がありました。
The old shopkeeper explained / that the machine could take him / anywhere in the past, / but only once. || 年老いた店主は説明しました / その機械は彼を連れていけると / 過去のどこへでも / ただし1回だけ || 年老いた店主は、その機械なら過去のどこへでも行けるが、1回だけだと説明しました。
Taro thought / about all the mistakes / he had made / in his life. || 太郎は考えました / 間違いのすべてについて / 自分がしてきた / 人生で || 太郎は、これまでの人生でしてきた数々の失敗のことを考えました。
The biggest one / was the day, / ten years ago, / when he had refused / a job offer / from a small startup. || いちばん大きなものは / その日でした / 10年前の / 彼が断った / 仕事の誘いを / 小さなスタートアップからの || いちばん大きな失敗は、10年前、小さなスタートアップからの仕事の誘いを断った日のことでした。
That company / was now one of the most successful / in the world. || その会社は / 今では最も成功した会社の一つでした / 世界で || その会社は今や、世界有数の成功企業になっていました。
He bought the machine, / set the date, / and pressed the button. || 彼はその機械を買い / 日付を合わせて / ボタンを押しました || 彼は機械を買い、日付を合わせてボタンを押しました。
Suddenly, / he was standing / in front of his old apartment / on a sunny morning / ten years earlier. || 突然 / 彼は立っていました / 昔のアパートの前に / ある晴れた朝に / 10年前の || 気がつくと彼は、10年前の晴れた朝、昔のアパートの前に立っていました。
When his younger self came out, / Taro ran up to him / and said, / "Listen! / You must accept that job offer!" || 若いころの自分が出てくると / 太郎は駆け寄って / 言いました / 「聞いてくれ！ / その仕事の誘いを受けるんだ！」 || 若いころの自分が出てくると、太郎は駆け寄って「聞いてくれ！その仕事の誘いを受けるんだ！」と言いました。
The young man / looked at him / with suspicion / and walked away quickly. || 若者は / 彼を見ました / 疑わしそうに / そして足早に立ち去りました || 若者は彼をうさんくさそうに見て、足早に去っていきました。
"What a strange old man," / he said to himself. / "I'd better do the opposite / of whatever he says." || 「なんて変なおじさんだ」と / 彼はつぶやきました / 「反対のことをしたほうがいいな / 彼が何を言おうと」 || 「変なおじさんだな。あの人の言うことの逆をやったほうがいい」と若者はつぶやきました。
At that moment, / Taro remembered something. || その瞬間 / 太郎はあることを思い出しました || その瞬間、太郎はあることを思い出しました。
Ten years ago, / on this same street, / a strange old man / had shouted at him / to accept the offer. || 10年前 / まさにこの通りで / 見知らぬおじさんが / 彼に叫んだのでした / 誘いを受けろと || 10年前、まさにこの通りで、見知らぬおじさんに「誘いを受けろ」と叫ばれたのです。
`
  },
  {
    level: "story",
    group: "ショートショート・中級",
    story: "inspection",
    title: "The Inspection",
    titleJa: "惑星の査定",
    note: "中級・12文",
    text: `
One quiet Sunday, / a huge silver spaceship / appeared / above the city / without a sound. || ある静かな日曜日 / 巨大な銀色の宇宙船が / 現れました / 街の上空に / 音もなく || ある静かな日曜日、巨大な銀色の宇宙船が音もなく街の上空に現れました。
People ran out of their houses / and stared at the sky, / not knowing / whether to be excited or afraid. || 人々は家から飛び出して / 空を見つめました / わからずに / 喜ぶべきか怖がるべきか || 人々は家から飛び出して空を見上げ、喜ぶべきか怖がるべきかわからずにいました。
The world's leaders / gathered quickly / and prepared a speech / to welcome the visitors. || 世界の指導者たちは / すぐに集まり / スピーチを用意しました / 訪問者を歓迎するための || 世界の指導者たちはすぐに集まり、訪問者を歓迎するスピーチを用意しました。
A door opened, / and a tall alien / with a clipboard / stepped out. || 扉が開いて / 背の高い宇宙人が / クリップボードを持った / 降りてきました || 扉が開き、クリップボードを手にした背の高い宇宙人が降りてきました。
It didn't listen to the speech. / Instead, / it began walking around, / taking notes. || それはスピーチを聞きませんでした / その代わりに / 歩き回り始めました / メモを取りながら || 宇宙人はスピーチには耳を貸さず、メモを取りながらあたりを歩き回り始めました。
It checked the air, / tasted the water, / and looked carefully / at the roads, the buildings, and the factories. || それは空気を調べ / 水を味見し / じっくりと見ました / 道路、建物、工場を || 宇宙人は空気を調べ、水を味見し、道路や建物や工場をじっくりと見ました。
Sometimes / it nodded, / but more often, / it shook its head / and frowned. || ときどき / それはうなずきました / でもそれより多く / 首を横に振って / 顔をしかめました || ときどきうなずきましたが、それ以上に首を振って顔をしかめることのほうが多かったのです。
Scientists tried to talk to it, / but it was clearly / too busy / to answer any questions. || 科学者たちは話しかけようとしました / でもそれは明らかに / 忙しすぎました / どんな質問にも答えるには || 科学者たちが話しかけようとしましたが、宇宙人は明らかに忙しくて、どの質問にも答えませんでした。
After exactly one hour, / it returned to the ship / and left a small card / on the ground. || ちょうど1時間後 / それは宇宙船に戻り / 小さなカードを置いていきました / 地面に || ちょうど1時間後、宇宙人は船に戻り、地面に小さなカードを置いていきました。
The spaceship disappeared / as quietly / as it had come. || 宇宙船は消えました / 同じくらい静かに / 来たときと || 宇宙船は、来たときと同じように静かに消えていきました。
Experts from around the world / spent three months / translating the message / on the card. || 世界中の専門家が / 3か月を費やしました / メッセージを翻訳するのに / カードの上の || 世界中の専門家が、カードのメッセージを翻訳するのに3か月かかりました。
It read: / "Property inspection: Planet Earth. / Result: Not suitable for sale. / Too many repairs needed." || そこにはこう書かれていました / 「物件査定：地球 / 結果：売却に不適 / 修理が必要な箇所が多すぎる」 || そこには「物件査定：地球。結果：売却不可。要修繕箇所が多すぎるため」と書かれていました。
`
  },
  {
    level: "story",
    group: "ショートショート・中上級",
    story: "interview",
    title: "The Interview",
    titleJa: "面接",
    note: "中上級・14文",
    text: `
The job interview / was going to be different, / the email said, / because the company used / a new lie detector / powered by AI. || その就職面接は / いつもとは違うものになる予定でした / とメールには書いてありました / なぜならその会社は使っているからです / 新しいうそ発見器を / AIで動く || メールによると、その会社はAIを使った新しいうそ発見器を使うので、面接はいつもとは違うものになるとのことでした。
When Emma entered the room, / a calm man in a gray suit / asked her / to place her hand / on a glowing blue panel. || エマが部屋に入ると / 灰色のスーツを着た落ち着いた男性が / 彼女に頼みました / 手を置くように / 光る青いパネルの上に || エマが部屋に入ると、灰色のスーツの落ち着いた男性が、光る青いパネルに手を置くよう彼女に求めました。
"Let's begin," / he said. / "Why do you want to work for us?" || 「始めましょう」と / 彼は言いました / 「なぜ当社で働きたいのですか？」 || 「始めましょう。なぜ当社で働きたいのですか？」と彼は言いました。
Emma had prepared / a perfect answer / about the company's vision, / but she was afraid / the machine would catch her. || エマは用意していました / 完璧な答えを / 会社のビジョンについての / でも彼女は心配でした / 機械に見破られるのではないかと || エマは会社のビジョンについて完璧な答えを用意していましたが、機械に見破られるのではないかと心配になりました。
So she took a deep breath / and said, / "Honestly, / the salary is good, / and the office is close to my home." || そこで彼女は深呼吸をして / 言いました / 「正直に言うと / 給料がいいですし / 会社が家から近いからです」 || そこで彼女は深呼吸して、「正直に言うと、給料がいいのと、会社が家から近いからです」と答えました。
The man wrote something down / and asked, / "What is your greatest weakness?" || 男性は何かを書き留めて / 尋ねました / 「あなたの最大の弱点は何ですか？」 || 男性は何かを書き留めてから、「あなたの最大の弱点は何ですか？」と尋ねました。
"I get bored easily," / she admitted, / "and I'm not very good / at waking up early." || 「すぐに飽きてしまいます」と / 彼女は認めました / 「それにあまり得意ではありません / 早起きが」 || 「飽きっぽいところです。それに、早起きがあまり得意ではありません」と彼女は正直に言いました。
To every question, / she gave an honest answer, / even when it didn't sound very impressive. || すべての質問に / 彼女は正直な答えを返しました / それがあまり立派に聞こえないときでも || あまり立派に聞こえない答えでも、彼女はすべての質問に正直に答えました。
At the end, / the man smiled / and turned off the panel. || 最後に / 男性はほほえんで / パネルの電源を切りました || 最後に、男性はほほえんでパネルの電源を切りました。
"I have to tell you something," / he said. / "This machine is not a lie detector. / It's just a desk lamp." || 「あなたに言わなければならないことがあります」と / 彼は言いました / 「この機械はうそ発見器ではありません / ただの電気スタンドです」 || 「お伝えしなければならないことがあります。この機械はうそ発見器ではありません。ただの電気スタンドです」と彼は言いました。
"We wanted to see / who would stay honest / when they believed / someone was watching," / he continued. || 「私たちは確かめたかったのです / 誰が正直でいられるかを / 信じているときに / 誰かに見られていると」と / 彼は続けました || 「見られていると信じているときに、誰が正直でいられるかを確かめたかったのです」と彼は続けました。
"Out of two hundred candidates, / you are the only one / who did not lie." || 「200人の候補者のうち / あなたはただ一人です / うそをつかなかった」 || 「200人の応募者のうち、うそをつかなかったのはあなただけです」。
Emma's face lit up. / "So, / I got the job?" || エマの顔がぱっと明るくなりました / 「ということは / 私は採用ですか？」 || エマの顔がぱっと明るくなりました。「ということは、採用ですか？」
"Unfortunately, no," / he said, / closing his notebook. / "The position is in our sales department." || 「残念ながら、いいえ」と / 彼は言いました / ノートを閉じながら / 「募集しているのは営業部なのです」 || 「残念ながら、いいえ」と彼はノートを閉じながら言いました。「募集しているのは営業部なんです」。
`
  },
  {
    level: "story",
    group: "ショートショート・中上級",
    story: "yes-ai",
    title: "The AI That Never Said No",
    titleJa: "ノーと言わないAI",
    note: "中上級・14文",
    text: `
The CEO of a large company / was tired of meetings / where his managers / kept disagreeing with him. || ある大企業の社長は / 会議にうんざりしていました / 部長たちが / 彼に反対ばかりする || ある大企業の社長は、部長たちが反対ばかりする会議にうんざりしていました。
So he introduced an AI assistant / that would analyze every proposal / and give its opinion / in seconds. || そこで彼はAIアシスタントを導入しました / あらゆる提案を分析し / 意見を出す / 数秒で || そこで彼は、あらゆる提案を分析し、数秒で意見を出すAIアシスタントを導入しました。
At the first meeting, / the CEO suggested / opening a new factory / overseas. || 最初の会議で / 社長は提案しました / 新しい工場を開くことを / 海外に || 最初の会議で、社長は海外に新工場を開くことを提案しました。
"That's an excellent idea," / the AI said immediately, / and showed a chart / full of rising numbers. || 「それはすばらしい考えです」と / AIはすぐに言いました / そしてグラフを示しました / 右肩上がりの数字でいっぱいの || 「すばらしいお考えです」とAIは即座に答え、右肩上がりの数字が並ぶグラフを示しました。
When he proposed / cutting the advertising budget, / the AI agreed again, / with even more confidence. || 彼が提案すると / 広告予算を削ることを / AIはまた賛成しました / さらに自信たっぷりに || 広告予算の削減を提案すると、AIはさらに自信たっぷりに再び賛成しました。
The managers / stopped arguing, / meetings ended in ten minutes, / and the CEO / had never been happier. || 部長たちは / 反論するのをやめ / 会議は10分で終わり / そして社長は / これほど幸せだったことはありませんでした || 部長たちは反論をやめ、会議は10分で終わるようになり、社長はかつてないほど上機嫌でした。
Within a year, / however, / the company's profits / had fallen by half. || 1年もしないうちに / しかし / 会社の利益は / 半分に落ち込んでいました || ところが1年もしないうちに、会社の利益は半分に落ち込んでいました。
The new factory / was too far from its customers, / and without advertising, / no one knew / about the new products. || 新しい工場は / 顧客から遠すぎました / そして広告がなかったので / 誰も知りませんでした / 新製品のことを || 新工場は顧客から遠すぎ、広告がないので新製品のことは誰にも知られていませんでした。
At the annual shareholders' meeting, / angry investors / demanded an explanation. || 年に一度の株主総会で / 怒った投資家たちが / 説明を求めました || 年次株主総会で、怒った投資家たちは説明を求めました。
"The AI supported / every decision I made," / the CEO said nervously. / "Ask it yourself." || 「AIは支持しました / 私が下したすべての決定を」と / 社長は不安そうに言いました / 「直接聞いてみてください」 || 「AIは私の決定をすべて支持していました。AIに直接聞いてみてください」と社長は不安げに言いました。
One of the investors / stood up / and spoke to the AI. || 投資家の一人が / 立ち上がって / AIに話しかけました || 投資家の一人が立ち上がり、AIに話しかけました。
"We are thinking of / replacing the CEO / with you. / What do you think?" || 「私たちは考えています / 社長を交代させることを / あなたと / どう思いますか？」 || 「社長をあなたと交代させようと考えています。どう思いますか？」
The room fell silent / as everyone waited / for the answer. || 部屋は静まり返りました / 全員が待つ中で / 答えを || 全員が答えを待ち、会場は静まり返りました。
"That's an excellent idea," / said the AI. || 「それはすばらしい考えです」と / AIは言いました || 「すばらしいお考えです」とAIは言いました。
`
  }
];
