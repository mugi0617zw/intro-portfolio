body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;margin:0;padding:24px}
h1{font-size:28px;margin:0 0 16px}
const works = [
  { title:'Intro Portfolio', desc:'HTML/CSS/JSの最初の作品', link:'#' },
  { title:'Task App (WIP)', desc:'次に作る予定のタスク管理', link:'#' },
]
document.getElementById('app')?.remove() // 前のプレースホルダを削除
const grid = document.getElementById('works')
grid.innerHTML = works.map(w => `
  <article class="card">
    <h3>${w.title}</h3>
    <p>${w.desc}</p>
    <p><a href="${w.link}">View →</a></p>
  </article>
`).join('')
// 既存のコードは残してOK
const y = document.getElementById('year')
if (y) y.textContent = new Date().getFullYear()
