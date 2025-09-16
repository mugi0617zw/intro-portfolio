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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.setAttribute("novalidate", ""); // 念のため

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ok = true;
    const fields = [
      ["name", "お名前を入力してください"],
      ["email", "正しいメールアドレスを入力してください"],
      ["message", "メッセージを入力してください"],
    ];

    fields.forEach(([name, msg]) => {
      const el = form.elements[name];
      const input = /** @type {HTMLInputElement|HTMLTextAreaElement|null} */ (
        el ?? null
      );
      const error = input?.parentElement?.querySelector(".error");
      if (!input || !error) return;

      if (!input.checkValidity()) {
        error.textContent = msg;
        input.setAttribute("aria-invalid", "true");
        ok = false;
      } else {
        error.textContent = "";
        input.removeAttribute("aria-invalid");
      }
    });

    const result = document.getElementById("contact-result");
    if (ok) {
      if (result)
        result.textContent =
          "ありがとうございます。送信テスト完了（現時点では実送信しません）。";
      form.reset();
      // 念のためURLの?xxxを消す
      if (history.replaceState)
        history.replaceState(null, "", location.pathname);
    } else {
      if (result) result.textContent = "";
    }
  });
});
