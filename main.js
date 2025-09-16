const works = [
  { title: "Intro Portfolio", desc: "HTML/CSS/JSの最初の作品", link: "#" },
  { title: "Task App (WIP)", desc: "次に作る予定のタスク管理", link: "#" },
];
document.getElementById("app")?.remove(); // 前のプレースホルダを削除
const grid = document.getElementById("works");
grid.innerHTML = works
  .map(
    (w) => `
  <article class="card">
    <h3>${w.title}</h3>
    <p>${w.desc}</p>
    <p><a href="${w.link}">View →</a></p>
  </article>
`
  )
  .join("");
// 既存のコードは残してOK
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    const fields = [
      ["name", "お名前を入力してください"],
      ["email", "正しいメールアドレスを入力してください"],
      ["message", "メッセージを入力してください"],
    ];

    fields.forEach(([name, msg]) => {
      const input = form.elements[name];
      const error = input.parentElement.querySelector(".error");
      if (!input.checkValidity()) {
        // required / type="email" を利用
        error.textContent = msg;
        ok = false;
      } else {
        error.textContent = "";
      }
    });

    const result = document.getElementById("contact-result");
    if (ok) {
      result.textContent =
        "ありがとうございます。送信テスト完了（現時点では実送信しません）。";
      form.reset();
    } else {
      result.textContent = "";
    }
  });
}
