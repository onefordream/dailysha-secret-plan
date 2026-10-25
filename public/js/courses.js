/**
 * ============================================================
 *  ゴルフ場設定ファイル
 *  ここだけ編集すれば、名前・画像・料金・予約リンクを変更できます。
 * ============================================================
 *
 *  name    : カードに表示するゴルフ場名
 *  image   : コース写真（public/images/ 内のファイル）
 *            推奨サイズ 横1600px × 縦800px 程度 / JPG・WebP / 200KB 前後
 *            同じファイル名で上書きすれば差し替え完了です。
 *  alt     : 画像の説明（読み上げ・SEO用）
 *  url     : アフィリエイト予約ページのURL（https:// から始まるURL）
 *  weekday : 平日の最安料金（円・数字のみ）。不明なら null で非表示
 *  holiday : 土日祝の最安料金（円・数字のみ）。不明なら null で非表示
 *  tags    : 料金に含まれる内容など（例 "昼食付き"）。確認できたものだけ入れてください
 *
 *  ※ url が https:// で始まらない場合は仮リンクとみなし、クリックしても遷移しません。
 *  ※ ページ上部の「平日 ○○円〜」は、下の weekday の一番安い金額が自動で表示されます。
 */
window.GOLF_COURSES = [
  {
    name: "デイリー信楽カントリー倶楽部",
    image: "images/daily-shigaraki.webp",
    alt: "デイリー信楽カントリー倶楽部のクラブハウス",
    url: "https://ap.dailyshagroup.jp/r/fus",
    weekday: 7000,
    holiday: 9500,
    tags: ["昼食付き"]
  },
  {
    name: "名阪ロイヤルゴルフクラブ",
    image: "images/meihan-royal.jpg",
    alt: "名阪ロイヤルゴルフクラブのコース風景",
    url: "https://ap.dailyshagroup.jp/r/jus",
    weekday: 5380,
    holiday: 10480,
    tags: ["昼食付き"]
  },
  {
    name: "京阪カントリー倶楽部",
    image: "images/keihan-country.jpg",
    alt: "京阪カントリー倶楽部のクラブハウスとグリーン",
    url: "https://ap.dailyshagroup.jp/r/dus",
    weekday: 6980,
    holiday: 11980,
    tags: ["昼食付き"]
  },
  {
    name: "吉川ロイヤルゴルフクラブ",
    image: "images/yokawa-royal.webp",
    alt: "吉川ロイヤルゴルフクラブのコース風景",
    url: "https://ap.dailyshagroup.jp/r/hus",
    weekday: 6150,
    holiday: 11750,
    tags: ["昼食付き"]
  }
];

/**
 * 予約ページを新しいタブで開くかどうか。
 * Instagram 内ブラウザでは同じタブで開く方がスムーズなため、false を推奨します。
 */
window.GOLF_OPEN_IN_NEW_TAB = false;
