/* Shared header, footer, assistant and welcome for every page.
   Pages set <body data-page="...">. No personal data is passed in links or stored. */
(function () {
  var NAV = [
    ["practice", "Practice Development", "index.html#journeys"],
    ["fin", "FinOps", "area.html?a=fin"],
    ["cases", "Case Studies", "case-studies.html"],
    ["events", "Events", "events.html"],
    ["resources", "Resource Bank", "resources.html"],
    ["about", "About us", "team.html"]
  ];
  var page = document.body.getAttribute("data-page") || "home";

  window.PIS = {};

  var mark = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10c3 0 3-6 7-6s4 6 7 6" fill="none" stroke="#3366f0" stroke-width="2.4" stroke-linecap="round"/><path d="M3 10c3 0 3 6 7 6s4-6 7-6" fill="none" stroke="#8a4ee6" stroke-width="2.4" stroke-linecap="round"/><circle cx="3" cy="10" r="2" fill="#fff"/><circle cx="17" cy="10" r="2" fill="#ffc65c"/></svg>';
  var links = NAV.map(function (n) {
    return '<a href="' + n[2] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
  }).join("");

  document.body.insertAdjacentHTML("afterbegin",
    '<a class="skip" href="#main">Skip to main content</a>' +
    '<header class="top"><div class="wrap">' +
      '<a class="brand" href="index.html"><span class="mark">' + mark + "</span>Partner Incubation Station</a>" +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menu"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '<nav id="site-nav" aria-label="Primary">' + links + "</nav>" +
      '<a class="cta" href="team.html#contact">Talk to the team</a>' +
    "</div></header>");

  document.body.insertAdjacentHTML("beforeend",
    '<footer class="site"><div class="wrap"><span>Partner Incubation Station. Microsoft Frontier Partner Incubation.</span>' +
    '<nav aria-label="Footer">' + links + '<a href="index.html?welcome=1">Welcome and tour</a></nav></div></footer>' +
    '<button class="help-btn" id="helpBtn" type="button" aria-expanded="false" aria-controls="dock"><i>?</i>Ask a question</button>' +
    '<div class="dock closed" id="dock" role="dialog" aria-label="Assistant">' +
      "<header><b>Ask the station</b><span>Answers from our practice guides. The team picks up anything that needs a person.</span></header>" +
      '<div class="log" id="log"><div class="m a">Hi. Ask about any journey or service area, or pick a question below.</div></div>' +
      '<div class="chips" id="chips"><button type="button" data-q="0">Which journey should I start with?</button>' +
      '<button type="button" data-q="1">Where are my recommendations?</button>' +
      '<button type="button" data-q="2">Can Microsoft fund my pilot?</button></div>' +
    "</div>");

  var menuBtn = document.querySelector(".menu-btn"), nav = document.getElementById("site-nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Assistant: scripted answers for the mock-up
  var btn = document.getElementById("helpBtn"), dock = document.getElementById("dock"), log = document.getElementById("log");
  btn.addEventListener("click", function () {
    var open = !dock.classList.toggle("closed");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  var QA = [
    ["Which journey should I start with?", "If you're building advisory services, start with Business Transformation. If your customers are spending on credits, take FinOps for AI. Rolling out Copilot or agents? Workforce or Agentic Transformation will help you lead the change.", "From the journeys", false],
    ["Where are my recommendations?", "Open your service area from the home page, then mark the services and recommendations we discussed. They stay together on this device.", "From the service areas", false],
    ["Can Microsoft fund my pilot?", "Funding depends on your partner status and the programme, so a person on the team should answer this. I'll send them your question and the page you were on.", "Passed to the Partner Incubation team", true]
  ];
  document.getElementById("chips").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return; var q = QA[+b.dataset.q];
    var u = document.createElement("div"); u.className = "m u"; u.textContent = q[0]; log.appendChild(u);
    var a = document.createElement("div"); a.className = "m a"; a.textContent = q[1];
    var s = document.createElement("small"); s.textContent = q[2]; a.appendChild(s);
    if (q[3]) { var h = document.createElement("a"); h.className = "hand"; h.href = "team.html#contact"; h.textContent = "Send to the team"; a.appendChild(h); }
    log.appendChild(a); log.scrollTop = log.scrollHeight;
  });

  // Welcome pop-up. Pages call PIS.welcome(onTour).
  PIS.welcome = function (onTour) {
    var w = document.createElement("div");
    w.className = "welcome";
    w.innerHTML = '<div class="welcome-card" role="dialog" aria-modal="true" aria-labelledby="wtitle">' +
      '<div class="welcome-top"><div class="welcome-lines" aria-hidden="true"><i style="--c:var(--biz)"></i><i style="--c:var(--work)"></i><i style="--c:var(--agent)"></i><i style="--c:var(--fin)"></i></div>' +
      '<h2 id="wtitle">Welcome to Partner Incubation Station</h2>' +
      "<p>Thank you for being part of our partner community. This site is built for you, and we'd love to hear how you use it.</p></div>" +
      '<div class="welcome-body"><p>There are two ways in:</p><ul>' +
      '<li><span class="n">1</span><span><b>Already worked with us?</b>Pick your service area to find the services and recommendations we discussed.</span></li>' +
      '<li><span class="n">2</span><span><b>Starting fresh?</b>Take a guided journey and leave with a plan for your practice.</span></li></ul>' +
      '<div class="welcome-acts"><button class="btn fade" type="button" data-w="tour">Take the two-minute tour</button><button class="btn line" type="button" data-w="skip">Explore on my own</button></div></div></div>';
    document.body.appendChild(w);
    var first = w.querySelector("[data-w=tour]"); first.focus();
    function close(tour) {
      try { localStorage.setItem("pis-welcomed", "1"); } catch (e) {}
      w.remove(); document.removeEventListener("keydown", key);
      if (tour && onTour) onTour();
    }
    function key(e) {
      if (e.key === "Escape") close(false);
      if (e.key === "Tab") { var f = w.querySelectorAll("button"); if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); } }
    }
    document.addEventListener("keydown", key);
    w.addEventListener("click", function (e) { var b = e.target.closest("[data-w]"); if (b) close(b.dataset.w === "tour"); });
  };
})();
