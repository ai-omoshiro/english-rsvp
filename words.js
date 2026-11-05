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
    scene: "living",
    category: "家の中",
    title: "リビング・くつろぎ",
    emoji: "🛋️",
    desc: "ソファでのんびり過ごす時間。家具と、くつろぐ動作",
    text: `
couch || ソファ || アメリカでよく使う言い方。sofa とも言う || 🛋️
cushion || クッション || ソファの上の小さな枕
coffee table || ローテーブル || ソファの前に置く低いテーブル
bookshelf || 本棚 || 本を並べておく棚 || 📚
curtains || カーテン || 窓の前で開け閉めする布。ふつう複数形
rug || ラグ・敷物 || 床の一部に敷く、小さめのじゅうたん
blanket || 毛布・ブランケット || ソファでくるまる
houseplant || 観葉植物 || 部屋に置く鉢植え || 🪴
windowsill || 窓台 || 窓の下の、物を置ける出っぱり。猫がよく座っている
lie on the couch || ソファに寝転がる || 休みの日はずっとここ
flip through channels || チャンネルをあちこち変える || 見たい番組がなくて、リモコンをポチポチ
binge-watch a show || ドラマを一気見する || 何話も続けて見てしまう
take a nap || 昼寝する || ソファでうとうと || 😴
open the curtains || カーテンを開ける || 朝の光を部屋に入れる
turn up the heat || 暖房を強くする || 寒いので設定温度を上げる
dust the shelves || 棚のほこりを払う || 布やはたきでほこりを取る
put my feet up || 足をのせてくつろぐ || 台やいすに足を投げ出して、のんびり
curl up with a book || 丸くなって本を読む || ソファで体を丸め、くつろぎながら
a comfy chair || 座り心地のいいいす || comfy は comfortable のくだけた言い方
a cozy room || 居心地のいい部屋 || あたたかくて落ち着く
a stack of magazines || 雑誌の山 || 読んでいない雑誌が積み重なっている
a lazy Sunday || だらだら過ごす日曜日 || 何もしないで、のんびりする日
`
  },
  {
    scene: "garden",
    category: "家の中",
    title: "庭・ベランダ・植物",
    emoji: "🌱",
    desc: "水やりや草むしり。植物が育つ様子の言い方も",
    text: `
watering can || じょうろ || 植物に水をやる道具
hose || ホース || 庭で水をまく長い管
flowerpot || 植木鉢 || 花や野菜を植える鉢
soil || 土 || 植物を植える土。dirt とも言う
seed || 種 || まくと芽が出る
weed || 雑草 || 抜いても抜いても生えてくる
lawn || 芝生 || 家の前の、短く刈った草
fence || フェンス・塀 || 庭のまわりの囲い
ladybug || テントウムシ || 赤に黒い点。イギリスでは ladybird || 🐞
a sprout || 芽 || 種から出たばかりの小さな芽 || 🌱
water the plants || 植物に水をやる || 毎朝じょうろで
pull weeds || 草むしりをする || 雑草を根っこから抜く
mow the lawn || 芝刈りをする || 芝刈り機で芝を短くする
plant seeds || 種をまく || 土に穴をあけて
rake leaves || 落ち葉をかき集める || 熊手（rake）で集める || 🍂
grow tomatoes || トマトを育てる || ベランダの家庭菜園で || 🍅
pick flowers || 花をつむ || 野原や庭で
trim the bushes || 植え込みを刈り込む || はさみで形を整える
a wilted flower || しおれた花 || 水が足りなくて、ぐったり || 🥀
a sunny spot || 日当たりのいい場所 || 植物を置くならここ
a vegetable garden || 家庭菜園 || 野菜を育てる畑や花壇
a green thumb || 植物を育てる才能 || have a green thumb で「園芸が上手」。イギリスでは green fingers
`
  },
  {
    scene: "pets",
    category: "家の中",
    title: "ペット・動物",
    emoji: "🐶",
    desc: "犬や猫の世話と、動物のしぐさ",
    text: `
leash || （犬の）リード || 散歩のときに首輪につなぐひも
dog collar || （犬の）首輪 || 名札や鈴を付ける
doghouse || 犬小屋 || 庭にある犬の家
litter box || 猫のトイレ || 砂を入れた箱
food bowl || えさ入れ || ペットのごはんを入れる器
treat || （ペットの）おやつ || ごほうびにあげる
vet || 獣医・動物病院 || veterinarian の略
puppy || 子犬 || 🐶
kitten || 子猫 || 🐱
paw || （犬や猫の）足 || 肉球のある足 || 🐾
whiskers || （猫などの）ひげ || 顔の横にピンと生えている
walk the dog || 犬を散歩させる || 朝と夕方に
feed the cat || 猫にえさをやる || お皿にキャットフードを入れる
wag its tail || しっぽを振る || うれしいときの犬 || 🐕
bark || ほえる || ワンワン
purr || （猫が）のどをゴロゴロ鳴らす || なでられて気持ちいいとき
scratch the sofa || ソファで爪とぎをする || 猫が家具を引っかく
play fetch || 取ってこい遊びをする || 投げたボールを犬が取ってくる
shed || 毛が抜ける || 春になると服が毛だらけ
a stray cat || 野良猫 || 飼い主がいない
a well-behaved dog || しつけのいい犬 || ほえずに、おとなしく待てる
pet-friendly || ペット可の || ホテルやアパートで「ペットOK」
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
    scene: "outdoors",
    category: "外出・旅行",
    title: "アウトドア・自然",
    emoji: "🏕️",
    desc: "キャンプや山歩き。自然の中の物と動作",
    text: `
tent || テント || ⛺
campfire || たき火・キャンプファイヤー || 🔥
sleeping bag || 寝袋 || 中に入って眠る袋
trail || 山道・遊歩道 || 山や森の中の歩く道
waterfall || 滝
cliff || 崖 || 落ちたら危ない、切り立った岩
riverbank || 川岸・土手 || 川のほとり
bug spray || 虫よけスプレー || 蚊を寄せつけない
sunscreen || 日焼け止め || 外に出る前にぬる
backpack || リュック || 🎒
go hiking || ハイキングに行く || 山や自然の中を歩く || 🥾
pitch a tent || テントを張る || ペグを打ち込んで
build a fire || 火をおこす || 薪を組んで
roast marshmallows || マシュマロを焼く || たき火で、棒に刺して
reach the top || 頂上に着く || 山登りのゴール
go fishing || 釣りに行く || 🎣
skip stones || 水切りをする || 平たい石を水面ではねさせる
a mosquito bite || 蚊に刺されたあと || かゆい！ || 🦟
a steep hill || 急な坂 || 息が切れる
a breathtaking view || 息をのむような景色 || 頂上から見下ろすと
a starry sky || 満天の星空 || 街の明かりがない夜 || 🌌
fresh air || 新鮮な空気 || 胸いっぱいに吸い込む
`
  },
  {
    scene: "fun",
    category: "外出・旅行",
    title: "映画・ライブ・遊び",
    emoji: "🎬",
    desc: "映画館やライブ、遊園地。チケットまわりの言い方も",
    text: `
movie theater || 映画館 || イギリスでは cinema || 🎬
popcorn || ポップコーン || 🍿
trailer || 予告編 || 本編の前に流れる
subtitles || 字幕 || 画面の下に出る文字
sequel || 続編 || 「2」が出た
the front row || 最前列 || いちばん前の席
box office || チケット売り場 || 劇場や映画館の窓口。「興行成績」の意味でも使う
amusement park || 遊園地 || 🎡
merry-go-round || メリーゴーラウンド || carousel とも言う
concert || コンサート・ライブ || live は「生の」の意味。ライブは concert や show || 🎤
encore || アンコール || 終わったあと、もう1曲
book tickets || チケットを予約する || ネットで前もって
wait in line || 列に並ぶ || イギリスでは queue
sing along || 一緒に歌う || 曲に合わせて観客も
give a standing ovation || 立ち上がって拍手を送る || 感動して総立ちに || 👏
see a movie || 映画を見る || 映画館で見るときは see をよく使う
cry at the ending || 結末で泣く || ハンカチが必要
spoil the ending || 結末をネタバレする || ネタバレは spoiler
a sold-out show || 売り切れの公演 || チケットが完売
a scary movie || 怖い映画 || horror movie とも言う
a packed theater || 満員の劇場・映画館 || 空席がひとつもない
a cliffhanger || 続きが気になる終わり方 || 「次回に続く」でハラハラさせて終わる
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
    scene: "routine",
    category: "人と体",
    title: "朝と夜の習慣",
    emoji: "🌙",
    desc: "起きてから寝るまで。寝坊や夜ふかしの言い方も",
    text: `
alarm clock || 目覚まし時計 || ⏰
pillow || 枕 || 頭をのせて眠る
bedtime || 寝る時間 || 子どもは9時が bedtime
bedside table || ベッド横の小さな台 || 目覚ましやスマホを置く。nightstand とも言う
wake up || 目が覚める || 起き上がるのは get up
get up || 起きる・起き上がる || 布団から出る
hit the snooze button || スヌーズボタンを押す || あと5分だけ……
oversleep || 寝坊する || 目覚ましに気づかなかった
brush my teeth || 歯をみがく || 朝と寝る前に
wash my face || 顔を洗う || 冷たい水で目を覚ます
get dressed || 服を着る || パジャマから外出用の服に
grab breakfast || 朝ごはんをさっと済ませる || grab は「さっとつかむ」
rush out the door || 急いで家を飛び出す || 遅刻しそう！
commute to work || 通勤する || 毎朝電車で
get home || 家に帰り着く || ただいま
set the alarm || 目覚ましをセットする || 寝る前に時間を合わせる
stay up late || 夜ふかしする || 気づいたら夜中の2時
fall asleep || 眠りに落ちる・寝つく || 布団に入ってすぐ
toss and turn || 何度も寝返りを打つ || 眠れなくて、ごろごろ
have a nightmare || 悪い夢を見る || うなされて目が覚める
a light sleeper || 眠りが浅い人 || 小さな音ですぐ目が覚める。反対は a heavy sleeper
an early bird || 早起きの人 || 夜型の人は a night owl
`
  },
  {
    scene: "taste",
    category: "人と体",
    title: "味・におい・食感",
    emoji: "😋",
    desc: "「おいしい」の先の言い方。食べた感じが伝わる表現",
    text: `
crunchy || ザクザク・カリカリした || かむと音がする。ナッツやせんべい
crispy || パリッとした・サクサクの || 揚げたての衣やポテトチップス
chewy || かみごたえのある・もちもちの || グミやベーグル、おもち
bland || 味が薄い・味気ない || 塩気も風味も足りない
salty || しょっぱい || 塩を入れすぎた
sour || すっぱい || レモンや梅干し || 🍋
mouthwatering || よだれが出そうな || 見ただけでおなかが鳴る
greasy food || 油っこい食べ物 || 口のまわりがテカテカ
a juicy steak || 肉汁たっぷりのステーキ || 🥩
tender meat || やわらかい肉 || 歯がすっと入る。かたい肉は tough
fluffy pancakes || ふわふわのパンケーキ || 🥞
bitter coffee || 苦いコーヒー || ブラックで || ☕
stale bread || 古くなったパン || 何日も置いて、かたくパサパサ
smell delicious || おいしそうなにおいがする || 台所からいいにおいが漂ってくる
taste funny || 変な味がする || 牛乳が古いかも。funny は「変な」
melt in my mouth || 口の中でとろける || 高級なチョコや霜降り肉
burn my tongue || 舌をやけどする || 熱いスープを急いで飲んで
lick my lips || 舌なめずりする || おいしそうで、思わず
a strong smell || 強いにおい || 納豆や、においの強いチーズ
a pinch of salt || ひとつまみの塩 || 指先で少しだけ || 🧂
an acquired taste || だんだん好きになる味 || 最初はおいしいと思えない。ビールやコーヒーなど
too spicy for me || 私には辛すぎる || 口から火が出そう || 🌶️
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
    scene: "delivery",
    category: "仕事・お金・デジタル",
    title: "ネット通販・宅配",
    emoji: "📦",
    desc: "ポチッと注文して届くまで。返品や再配達の言い方も",
    text: `
package || 荷物・小包 || イギリスでは parcel || 📦
tracking number || 追跡番号 || 荷物がどこにあるか調べる番号
delivery driver || 配達員 || トラックで荷物を届けてくれる人
cardboard box || 段ボール箱
bubble wrap || プチプチ・気泡緩衝材 || つぶすと楽しい
shipping fee || 送料
customer review || 購入者のレビュー || 星いくつ？ || ⭐
order history || 注文履歴 || 前に何を買ったか見られる
return label || 返品用の伝票 || 箱に貼って送り返す
add to cart || カートに入れる || まだ買うとは決めていない
place an order || 注文する || 「注文を確定する」ボタンを押す
track a package || 荷物を追跡する || 今どこにあるか確認する
sign for a package || サインして荷物を受け取る || 玄関で配達員に
leave it at the door || 玄関の前に置いておく || 置き配でお願いします
reschedule a delivery || 配達日を変更する || 不在だったので再配達を頼む
cancel an order || 注文を取り消す || 発送される前に
unbox a new phone || 新しいスマホの箱を開ける || 開封の瞬間はわくわく
free shipping || 送料無料
next-day delivery || 翌日配達 || 今日頼めば明日届く
a damaged item || 破損した商品 || 箱がつぶれて、中身が壊れている
a missed delivery || 受け取れなかった配達 || 留守中に来て、不在票が入っていた
the wrong size || 違うサイズ || 届いたら小さかった
`
  },
  {
    scene: "factory",
    category: "仕事・お金・デジタル",
    title: "工場・倉庫",
    emoji: "🏭",
    desc: "ものづくりの現場。安全と品質の言い方も",
    text: `
assembly line || 組み立てライン || 部品が流れてきて、順番に組み立てる
conveyor belt || ベルトコンベア || 物を運ぶ、動くベルト
forklift || フォークリフト || 荷物を持ち上げて運ぶ車
warehouse || 倉庫 || 商品や部品を保管する建物
pallet || パレット || 荷物をのせる平たい台
hard hat || ヘルメット（作業用） || helmet はバイクやスポーツ用に使うことが多い || 👷
safety goggles || 保護メガネ || 目を守るゴーグル || 🥽
work gloves || 作業用手袋 || 🧤
spare parts || 予備の部品 || 壊れたときの交換用
inventory || 在庫 || 倉庫にある商品や部品の量
blueprint || 設計図 || 昔は青い紙に印刷されていた
run a machine || 機械を動かす || スイッチを入れて操作する
inspect a part || 部品を検査する || 傷やずれがないか確かめる
load a truck || トラックに荷物を積む || 下ろすのは unload
ship products || 製品を出荷する || 倉庫からお客さんへ
shut down the line || ラインを止める || トラブルや点検のとき
work the night shift || 夜勤をする || 夜から朝まで働く
wear protective gear || 保護具を身につける || ヘルメット、手袋、安全靴
a defective product || 不良品 || 検査ではねられる
a near miss || ヒヤリハット || 事故になりかけた出来事
a machine breakdown || 機械の故障 || 急に止まって動かない
a rush order || 急ぎの注文 || 特急でお願いします
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
  },
  {
    scene: "wasei3",
    category: "和製英語",
    title: "和製英語の言い換え（第3弾）",
    emoji: "🔁",
    desc: "まだまだある、そのままでは通じないカタカナ語",
    text: `
laundromat || コインランドリー || coin laundry は通じにくい
sewing machine || ミシン || 「ミシン」は machine がなまったもの
heater || ストーブ || stove はアメリカではふつう料理用のコンロ
microwave || 電子レンジ || range はアメリカでは「オーブン付きのコンロ」
plastic bag || ビニール袋 || vinyl bag とはふつう言わない
plastic wrap || （食品用）ラップ || イギリスでは cling film
mug || マグカップ || mug cup とはふつう言わない || ☕
arcade || ゲームセンター || game center は通じない
corn dog || アメリカンドッグ || American dog は通じない
night game || ナイター || nighter は通じない
motorcycle || （オート）バイク || bike はふつう自転車のこと || 🏍️
false start || フライング || flying は「飛ぶこと」
fist pump || ガッツポーズ || guts pose は通じない
marker || マジック（ペン） || 「マジック」は商品名から
one size fits all || フリーサイズ || free size は通じない
soda || サイダー || cider はアメリカではりんごジュース、イギリスではりんごのお酒
playing cards || トランプ || trump は「切り札」の意味 || 🃏
buffet || バイキング（食べ放題） || Viking は「北欧の海賊」
layoffs || リストラ || restructuring は組織の再編全体を指す
sleeveless || ノースリーブ || no sleeve とは言わない
custom-made || オーダーメイド || order made は通じない
sensitive || ナイーブ || naive は「世間知らず」の意味
`
  }
];
