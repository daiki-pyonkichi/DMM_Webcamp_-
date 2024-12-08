let name;
let username;
let userresult;

// 入力ダイアログで名前を取得
username = prompt("お名前を教えて下さい。");

// 入力が空の場合「名無し」を設定
if (!username) {
  username = "名無し";
}

// 名前をHTMLに表示
document.getElementById("name").innerHTML = username;

// ランダムな運勢を生成
let rand = Math.floor(Math.random() * 5);
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}

// 運勢をHTMLに表示
document.getElementById("result").innerHTML = userresult;
