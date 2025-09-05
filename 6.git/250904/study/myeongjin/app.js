document.addEventListener("DOMContentLoaded", () => {
  const KEY = "cr_items_v1";
  const $form = document.getElementById("form");
  const $author = document.getElementById("author");
  const $content = document.getElementById("content");
  const $list = document.getElementById("list");
  const $search = document.getElementById("search");
  const $clear = document.getElementById("clear");

  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch(e) {
      console.warn("storage parse error", e);
      localStorage.setItem(KEY, "[]");
      return [];
    }
  };
  const save = (items) => localStorage.setItem(KEY, JSON.stringify(items));
  const uid = () => Date.now().toString(36) + "-" + Math.random().toString(36).slice(2,7);

  function fmt(ts) {
    const d = new Date(ts);
    const pad = n => String(n).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  function render(filter="") {
    const items = load();
    const q = filter.trim().toLowerCase();
    $list.innerHTML = "";

    const shown = items.slice().reverse().filter(item => {
      if (!q) return true;
      return (item.author + " " + item.content).toLowerCase().includes(q);
    });

    if (shown.length === 0) {
      $list.innerHTML = "<li style='opacity:.7'>아직 데이터가 없습니다.</li>";
      return;
    }

    shown.forEach((item, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.author}</strong> <small style="opacity:.6">· ${fmt(item.createdAt)}</small><div>${item.content}</div>`;
      $list.appendChild(li);
    });
  }

  $form.addEventListener("submit", e => {
    e.preventDefault();
    const author = $author.value.trim();
    const content = $content.value.trim();
    if (!author || !content) return alert("작성자와 내용을 입력하세요.");
    const items = load();
    items.push({ id: uid(), author, content, createdAt: Date.now() });
    save(items);
    $form.reset();
    render($search.value);
  });

  $search.addEventListener("input", e => render(e.target.value));
  $clear.addEventListener("click", () => {
    if (!confirm("정말 전체삭제 하시겠습니까?")) return;
    localStorage.removeItem(KEY);
    render();
  });

  // seed (첫 방문 예시)
  if (load().length === 0) {
    save([{ id: uid(), author: "system", content: "첫 메모입니다. 새 메모를 추가해보세요!", createdAt: Date.now() }]);
  }

  render();
});
