(function () {
  var list = document.getElementById("course-list");
  var courses = window.GOLF_COURSES || [];
  if (!list || !courses.length) return;

  var newTab = window.GOLF_OPEN_IN_NEW_TAB === true;
  var html = "";

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function yen(value) {
    return Number(value).toLocaleString("ja-JP");
  }

  function isPrice(value) {
    return typeof value === "number" && value > 0;
  }

  function priceItem(label, value) {
    if (!isPrice(value)) return "";
    return (
      '<span class="course__price">' +
      '<span class="course__price-label">' + label + "</span>" +
      '<span class="course__price-num">' + yen(value) + "</span>" +
      '<span class="course__price-unit">円〜</span>' +
      "</span>"
    );
  }

  courses.forEach(function (course, i) {
    var isLive = /^https?:\/\//i.test(course.url || "");
    var num = ("0" + (i + 1)).slice(-2);
    // 1枚目はファーストビューに入るため優先読み込み、2枚目以降は遅延読み込み
    var loading = i === 0 ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"';
    var prices = priceItem("平日", course.weekday) + priceItem("土日祝", course.holiday);
    var tags = (course.tags || [])
      .map(function (tag) {
        return '<span class="course__tag">' + esc(tag) + "</span>";
      })
      .join("");

    html +=
      "<li>" +
      '<a class="course" href="' + (isLive ? esc(course.url) : "#") + '"' +
      ' rel="sponsored noopener noreferrer"' +
      (newTab ? ' target="_blank"' : "") +
      (isLive ? "" : ' data-placeholder="true"') +
      ' aria-label="' + esc(course.name) + "の空き日程と料金を見る" + '">' +
      '<span class="course__media">' +
      '<img src="' + esc(course.image) + '" alt="' + esc(course.alt || course.name) + '"' +
      ' width="1600" height="800" decoding="async" ' + loading +
      " onerror=\"this.style.display='none'\">" +
      "</span>" +
      '<span class="course__num" aria-hidden="true">' + num + "</span>" +
      '<span class="course__body">' +
      '<span class="course__info">' +
      '<span class="course__label">SECRET PLAN</span>' +
      '<span class="course__name">' + esc(course.name) + "</span>" +
      (prices ? '<span class="course__prices">' + prices + "</span>" : "") +
      (tags ? '<span class="course__tags">' + tags + "</span>" : "") +
      "</span>" +
      '<span class="course__cta">空き日程と料金を見る<span class="course__arrow" aria-hidden="true">→</span></span>' +
      "</span>" +
      "</a>" +
      "</li>";
  });

  list.innerHTML = html;

  // ページ上部の「平日 ○○円〜」に一番安い平日料金を表示
  var heroPrice = document.getElementById("hero-price");
  var weekdays = courses
    .map(function (c) { return c.weekday; })
    .filter(isPrice);
  if (heroPrice && weekdays.length) {
    heroPrice.querySelector("[data-price]").textContent = yen(Math.min.apply(null, weekdays));
    heroPrice.hidden = false;
  }

  // 仮URLのままのカードは遷移させない
  list.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest('a[data-placeholder="true"]');
    if (link) {
      e.preventDefault();
      if (window.console) console.warn("予約URLが未設定です: js/courses.js の url を設定してください。");
    }
  });
})();
