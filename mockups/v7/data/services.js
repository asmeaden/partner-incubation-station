/* Services from the FY27 Frontier Partner Incubation services list.
   Names are used word for word from slide 5 of the FY27 Frontier Partner Incubation Overview deck.
   depth: 1:1 engagement. group: fast-follower formats (all still to confirm, so no dates or named sessions).
   areas: biz, work, agent, fin. later: never a first step. needsCustomer: needs a customer or delivered work. */
window.REVIEW = {
  name: "Copilot Practice Development Review",
  desc: "The practice review conversation with the team. It's the starting point for every partner, and your roadmap follows from it."
};

window.SERVICES = [
  { id: "advisory-guide", name: "AI Advisory Practice Development Guide", areas: ["biz"],
    desc: "Advisory framework, executive engagement, discovery and packaging guidance for turning delivery work into a named advisory offer.",
    depth: "1:1 tailored packaging", group: ["Self-serve guide and self-assessment", "Webinar", "Office hours"],
    who: "All partners." },
  { id: "advisory-ubb", name: "AI Advisory with UBB", areas: ["biz", "fin"],
    desc: "Advisory built around consumption pricing: showing value, outcome-based pricing and commercial model design.",
    depth: "Commercial model deep dive", group: ["Group workshop", "Template"],
    who: "A later, optional stage that depends on your consumption readiness from the practice review.", later: true },
  { id: "offer-dev", name: "Offer Development Guidance", areas: ["biz"],
    desc: "Shapes a proven capability into a scoped, priced, repeatable offer with collateral.",
    depth: "Shaping your specific offer", group: ["Workshop", "Template", "Peer review"],
    who: "All partners." },
  { id: "agent-dev", name: "Agent Development", areas: ["agent"],
    desc: "Architecture guidance, hands-on validation and reusable patterns for production-ready agents.",
    depth: "Hands-on validation", group: ["Office hours", "Bootcamps", "Agentathons"],
    who: "Hands-on validation needs a customer engaged.", needsCustomer: true },
  { id: "co-dev", name: "Apps, Skills & Plugins Co-Dev", areas: ["agent"],
    desc: "Builds reusable skills, plugins and connectors alongside the partner.",
    depth: "Building together", group: ["Demo-and-learn", "Hackathon", "Pattern libraries"],
    who: "All partners can use the patterns and sessions. Building together is 1:1." },
  { id: "factory", name: "Agent Factory Operating Model", areas: ["agent"],
    desc: "How to scale agent delivery beyond single projects: reuse, governance and lifecycle.",
    depth: "Partner-specific factory design", group: ["Group workshop", "Template"],
    who: "All partners." },
  { id: "economics", name: "AI Economics, FinOps & Cost Mgmt", areas: ["fin", "agent"],
    desc: "Forecasting, monitoring and managing AI consumption cost; cost frameworks and managed-service packaging.",
    depth: "Applying the cost model to your managed-services offer", group: ["Webinar", "Checklist pack"],
    who: "All partners." },
  { id: "acm", name: "ACM Enablement for Copilot & Agents", areas: ["work", "agent"],
    desc: "Adoption and change management consulting, help finding ACM resources, and framework feedback.",
    depth: "Consulting on live customer engagements", group: ["Resource pack", "Recurring clinic"],
    who: "Consulting on live customer engagements is 1:1.", needsCustomer: true },
  { id: "profitability", name: "AI Transformation Profitability Playbook and Workshops", areas: ["biz", "work"],
    desc: "Protects margin as AI changes how work is delivered.",
    depth: "Selective 1:1 workshops for priority partners", group: ["Webinar series", "Workshops"],
    who: "All partners can join the series. Workforce applies where the gap is in your own internal AI use." },
  { id: "gtm", name: "GTM & Co-Sell Readiness", areas: ["biz"],
    desc: "Readiness to take an offer to market and co-sell with Microsoft.",
    depth: "Readiness review of your offer", group: ["Checklist", "Webinar", "Sales play"],
    who: "All partners." },
  { id: "case-study", name: "Case Study & Proof-Point Development", areas: ["biz", "work", "agent", "fin"],
    desc: "Turns delivered work into case studies and proof points.",
    depth: "Customer interviews and drafting", group: ["Template", "Guide", "Nominations"],
    who: "Needs delivered customer work.", needsCustomer: true }
];

/* Group session formats for the Events page. Dates and named sessions are still to confirm. */
window.FORMATS = [
  { id: "webinar", name: "Webinars", text: "Live online sessions open to all partners.", match: ["Webinar", "Webinar series"] },
  { id: "office", name: "Office hours", text: "Drop-in time with the team to bring your questions and plans.", match: ["Office hours"] },
  { id: "workshop", name: "Workshops", text: "Small-group working sessions that leave you with a template.", match: ["Workshop", "Group workshop", "Workshops"] },
  { id: "build", name: "Bootcamps, Agentathons and hackathons", text: "Hands-on building with the team and other partners.", match: ["Bootcamps", "Agentathons", "Hackathon", "Demo-and-learn"] },
  { id: "clinic", name: "Recurring clinic", text: "A regular adoption and change management clinic.", match: ["Recurring clinic"] }
];
window.formatServices = function (f) {
  return window.SERVICES.filter(function (s) { return s.group.some(function (g) { return f.match.indexOf(g) >= 0; }); });
};
