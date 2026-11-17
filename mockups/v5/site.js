/* Shared header, footer and assistant for every v5 page.
   Each page sets <body data-page="home|practice|fin|cases|resources|journey">. */
(function () {
  var NAV = [
    ["practice", "Practice Development", "index.html#journeys"],
    ["fin", "FinOps", "journey.html?j=fin"],
    ["cases", "Case Studies", "case-studies.html"],
    ["resources", "Resource Bank", "resources.html"]
  ];
  var page = document.body.getAttribute("data-page") || "home";

  var mark = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10c3 0 3-6 7-6s4 6 7 6" fill="none" stroke="#1f6fe0" stroke-width="2.4" stroke-linecap="round"/><path d="M3 10c3 0 3 6 7 6s4-6 7-6" fill="none" stroke="#7a4fd8" stroke-width="2.4" stroke-linecap="round"/><circle cx="3" cy="10" r="2" fill="#fff"/><circle cx="17" cy="10" r="2" fill="#ffc65c"/></svg>';
  var links = NAV.map(function (n) {
    return '<a href="' + n[2] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
  }).join("");

  document.body.insertAdjacentHTML("afterbegin",
    '<a class="skip" href="#main">Skip to main content</a>' +
    '<header class="top"><div class="wrap">' +
      '<a class="brand" href="index.html"><span class="mark">' + mark + "</span>Partner Incubation Station</a>" +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menu"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '<nav id="site-nav" aria-label="Primary">' + links + "</nav>" +
      '<a class="cta" href="index.html#team">Talk to the team</a>' +
    "</div></header>");

  document.body.insertAdjacentHTML("beforeend",
    '<footer class="site"><div class="wrap"><span>Partner Incubation Station. Microsoft Frontier Partner Incubation.</span>' +
    '<nav aria-label="Footer">' + links + '<a href="index.html#whats-on">What\'s on</a></nav></div></footer>' +
    '<button class="help-btn" id="helpBtn" type="button" aria-expanded="false" aria-controls="dock"><i>?</i>Ask a question</button>' +
    '<div class="dock closed" id="dock" role="dialog" aria-label="Assistant">' +
      "<header><b>Ask the station</b><span>Answers from our practice guides. The team picks up anything that needs a person.</span></header>" +
      '<div class="log" id="log"><div class="m a">Hi. Ask about any journey, or pick a question below.</div></div>' +
      '<div class="chips" id="chips"><button type="button" data-q="0">Which journey should I start with?</button>' +
      '<button type="button" data-q="1">How do I price a Cowork offer?</button>' +
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
    ["Which journey should I start with?", "If your customers already use Copilot and you're moving into advisory work, start with Business Transformation. It checks seven capabilities and tells you which gap to close first.", "From the Business Transformation journey", false],
    ["How do I price a Cowork offer?", "Start from your two strongest capabilities, then price the Assess and Identify steps as a fixed-fee entry point. Cost governance and value reviews are monthly work, which is where recurring revenue sits.", "From the Business Transformation journey, your plan", false],
    ["Can Microsoft fund my pilot?", "Funding depends on your partner status and the programme, so a person on the team should answer this. I'll send them your question and the journey you were on.", "Passed to the Partner Incubation team", true]
  ];
  document.getElementById("chips").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return; var q = QA[+b.dataset.q];
    var u = document.createElement("div"); u.className = "m u"; u.textContent = q[0]; log.appendChild(u);
    var a = document.createElement("div"); a.className = "m a"; a.textContent = q[1];
    var s = document.createElement("small"); s.textContent = q[2]; a.appendChild(s);
    if (q[3]) { var h = document.createElement("a"); h.className = "hand"; h.href = "index.html#team"; h.textContent = "Send to the team"; a.appendChild(h); }
    log.appendChild(a); log.scrollTop = log.scrollHeight;
  });
})();
