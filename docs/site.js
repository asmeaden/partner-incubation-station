/* Shared header, footer and behaviour for every page.
   Each page sets <body data-page="slug" data-root="./" or "../">.
   NAV is the single source of truth for the primary navigation. */
(function () {
  var SITE = {
    name: "Partner Incubation",
    org: "Microsoft · Compete & Business Value",
    github: "https://github.com/asmeaden/partner-incubation-station",
    // Set to false once placeholder content has been confirmed.
    showPreviewBanner: true,
    announcement: { label: "NEW", text: "Partner Incubation site now in preview: tell us what you need", href: "contact/" }
  };

  var NAV = [
    { slug: "practice-development", label: "Practice Development" },
    { slug: "consumption-cost", label: "Consumption & Cost" },
    { slug: "case-studies", label: "Case Studies" },
    { slug: "resources", label: "Resources" },
    { slug: "contact", label: "Contact Us" }
  ];

  var FOOTER = [
    { title: "Practice Development", links: [
      ["practice-development/#business", "Business Transformation"],
      ["practice-development/#agent", "Agent Transformation"],
      ["practice-development/#workforce", "Workforce Transformation"]] },
    { title: "Consumption & Cost", links: [
      ["consumption-cost/#ubb", "UBB Deep-Dive"],
      ["consumption-cost/#tools", "Cost tools"],
      ["case-studies/", "Case Studies"]] },
    { title: "Resources", links: [
      ["resources/", "Catalogue"],
      ["resources/#events", "Events & trainings"],
      ["contact/", "Contact Us"]] }
  ];

  var body = document.body;
  var page = body.getAttribute("data-page") || "home";
  var root = body.getAttribute("data-root") || "./";

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function href(path) { return root + path; }

  var logo =
    '<svg width="18" height="16" viewBox="0 0 18 16" aria-hidden="true">' +
    '<rect x="0" y="9" width="3" height="7" rx="1" fill="#0078d4"/>' +
    '<rect x="5" y="5" width="3" height="11" rx="1" fill="#4f6bd8"/>' +
    '<rect x="10" y="2" width="3" height="14" rx="1" fill="#6b5fd3"/>' +
    '<rect x="15" y="7" width="3" height="9" rx="1" fill="#0e9f8c"/></svg>';

  var navLinks = NAV.map(function (n) {
    var cur = n.slug === page ? ' aria-current="page"' : "";
    return '<a href="' + href(n.slug + "/") + '"' + cur + ">" + esc(n.label) + "</a>";
  }).join("");

  var header =
    '<a class="skip" href="#main">Skip to main content</a>' +
    '<header><div class="wrap nav">' +
    '<a class="brand" href="' + href("") + '">' + logo + esc(SITE.name) + "</a>" +
    '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Menu">' +
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
    '<nav class="menu" id="site-menu" aria-label="Primary">' + navLinks + "</nav>" +
    '<div class="seg"><a class="s1" href="' + href("updates/") + '"' + (page === "updates" ? ' aria-current="page"' : "") +
    '>Stay Up To Date</a><a class="s2" href="' + esc(SITE.github) + '" target="_blank" rel="noopener">GitHub ↗</a></div>' +
    "</div></header>" +
    (SITE.showPreviewBanner ? '<div class="mock">Preview: highlighted text is placeholder content to be confirmed</div>' : "") +
    (SITE.announcement ? '<div class="announce"><a href="' + href(SITE.announcement.href) + '"><span class="pill-new">' +
      esc(SITE.announcement.label) + "</span>" + esc(SITE.announcement.text) + " →</a></div>" : "");

  var cols = FOOTER.map(function (c) {
    return "<div><h4>" + esc(c.title) + "</h4>" + c.links.map(function (l) {
      return '<a href="' + href(l[0]) + '">' + esc(l[1]) + "</a>";
    }).join("") + "</div>";
  }).join("");

  var footer =
    '<footer><div class="wrap">' +
    '<div class="flinks"><a href="' + href("updates/") + '">What\'s new</a>·<a href="' + href("resources/") +
    '">FAQ</a>·<a href="' + href("contact/") + '">Feedback</a></div>' +
    '<div class="fcols"><div><div class="brand" style="font-size:14px;color:var(--ink)">' + esc(SITE.name) +
    '</div><div class="small">' + esc(SITE.org) + "</div></div>" + cols + "</div>" +
    "</div></footer>";

  body.insertAdjacentHTML("afterbegin", header);
  body.insertAdjacentHTML("beforeend", footer);

  // Mobile menu
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("site-menu");
  btn.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Filter chips: <div class="filters" data-filter-for="#list"> with <button class="f" data-filter="value">.
  // Items in the target carry data-category="value".
  document.querySelectorAll(".filters[data-filter-for]").forEach(function (group) {
    var target = document.querySelector(group.getAttribute("data-filter-for"));
    if (!target) return;
    group.addEventListener("click", function (e) {
      var b = e.target.closest("button.f");
      if (!b) return;
      group.querySelectorAll("button.f").forEach(function (x) {
        x.classList.toggle("on", x === b);
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
      var v = b.getAttribute("data-filter");
      target.querySelectorAll("[data-category]").forEach(function (item) {
        item.hidden = v !== "all" && item.getAttribute("data-category") !== v;
      });
    });
  });

  // Single-choice chips (polls, Find My Path preview): <div class="filters" data-choice>.
  document.querySelectorAll(".filters[data-choice]").forEach(function (group) {
    group.addEventListener("click", function (e) {
      var b = e.target.closest("button.f");
      if (!b) return;
      group.querySelectorAll("button.f").forEach(function (x) {
        x.classList.toggle("on", x === b);
        x.setAttribute("aria-pressed", x === b ? "true" : "false");
      });
    });
  });

  // Forms are not yet connected to a back end.
  document.querySelectorAll("form[data-not-connected]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.querySelector(".form-note");
      if (note) note.hidden = false;
    });
  });
})();
