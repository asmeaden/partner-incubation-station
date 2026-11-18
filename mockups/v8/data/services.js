/* Services from the FY27 Frontier Partner Incubation services list, named word for word from slide 5 of the
   FY27 Frontier Partner Incubation Overview deck.
   The station leads with 1:many support; 1:1 support is "talk to the team".
   group: 1:many formats (still to confirm). oneToOne: what the team does 1:1.
   cover: how well our three decks support the service: "covered", "partly" or "none".
   sources: where in the decks; self: links taken from the decks (null = named in a deck without a link).
   journeys: related journey and stop. note: what to feed back to the team. */
(function () {
  var K = "https://aka.ms/", GH = "https://github.com/microsoft/", HUB = "https://microsoft.github.io/Analytics-Hub/";
  var ADV = "AI Advisory Practice Guide", FIN = "FinOps for AI Practice Guide", ACM = "Agent Adoption and Change Playbook";

  window.DECKS = { ADV: ADV, FIN: FIN, ACM: ACM };

  window.REVIEW = {
    id: "review", name: "Copilot Practice Development Review",
    desc: "The practice review conversation with the team. It's the starting point for every partner, and your roadmap follows from it.",
    cover: "partly",
    sources: [[ADV, "Slides 3 and 4", "The six advisory components and ten capability categories, with a self-assessment"], [ADV, "Slide 27", "The three practice levels: product-, process- and transformation-centric"]],
    note: "The services list refers to the FY27 maturity model. It isn't in our three decks, so the site uses the three practice levels from the AI Advisory Practice Guide instead."
  };

  window.SERVICES = [
    { id: "advisory-guide", name: "AI Advisory Practice Development Guide", areas: ["biz"],
      desc: "Advisory framework, executive engagement, discovery and packaging guidance for turning delivery work into a named advisory offer.",
      group: ["Self-serve guide and self-assessment", "Webinar", "Office hours"], oneToOne: "Tailored packaging of your advisory offer", who: "All partners.",
      cover: "covered",
      sources: [[ADV, "Slides 3 to 4", "Six advisory components and ten capability categories"], [ADV, "Slides 5 to 14", "A self-check and resources for each capability"], [ADV, "Slides 25 to 27", "Building your advisory bench, and the three practice levels"]],
      self: [["Partner Practice Development Guide", K + "CopilotPartnerGuide", "Guide"], ["Cowork Proof of Value Kit", K + "CoworkPartnerKit", "Kit"], ["Partner Skilling Hub", K + "PartnerSkilling", "Training"], ["Microskilling: Cowork", K + "MicroSkillingCowork", "On demand"]],
      journeys: [["biz", "The whole Business Transformation journey"]],
      note: "The service's self-serve guide with self-assessment closely matches the Business Transformation journey." },

    { id: "advisory-ubb", name: "AI Advisory with UBB", areas: ["biz", "fin"],
      desc: "Advisory built around consumption pricing: showing value, outcome-based pricing and commercial model design.",
      group: ["Group workshop", "Template"], oneToOne: "Commercial model deep dive", who: "A later, optional stage that depends on your consumption readiness from the practice review.", later: true,
      cover: "covered",
      sources: [[ADV, "Slide 7", "Cost and credit modelling"], [ADV, "Slide 11", "Value storytelling and readout"], [ADV, "Slides 15 to 16", "Pricing an offer, recurring revenue and three offer templates"], [FIN, "Slides 8 to 20", "Plan: business case, forecasting and ROI tools"]],
      self: [["Copilot Credit Planning Model", K + "CopilotCreditPlanningModel", "Tool"], ["Copilot Credits licensing guide", K + "CopilotCredits/LicensingGuide", "Guide"], ["Cowork ROI Model", HUB + "cowork-billing/cowork-roi-model/app/", "Web app"], ["Cowork Offer Templates", K + "CoworkOfferTemplates", "Templates"]],
      journeys: [["fin", "FinOps for AI: Plan services"], ["biz", "Business Transformation: value storytelling"]],
      note: "Outcome-based pricing is mentioned (AI Advisory guide, slide 16) but not explained in depth." },

    { id: "offer-dev", name: "Offer Development Guidance", areas: ["biz"],
      desc: "Shapes a proven capability into a scoped, priced, repeatable offer with collateral.",
      group: ["Workshop", "Template", "Peer review"], oneToOne: "Shaping your specific offer", who: "All partners.",
      cover: "covered",
      sources: [[ADV, "Slide 15", "Four moves that turn a capability into an offer you can price"], [ADV, "Slide 16", "Three ready-made offer templates"], [ADV, "Slide 17", "Chapter 3: build offers and solutions"]],
      self: [["Cowork Offer Templates", K + "CoworkOfferTemplates", "Templates"], ["Partner Practice Development Guide", K + "CopilotPartnerGuide", "Guide"], ["Cowork Partner Launch Kit", K + "CoworkPartnerLaunchKit", "Kit"]],
      journeys: [["biz", "Business Transformation: your plan matches an offer to your strengths"]] },

    { id: "agent-dev", name: "Agent Development", areas: ["agent"],
      desc: "Architecture guidance, hands-on validation and reusable patterns for production-ready agents.",
      group: ["Office hours", "Bootcamps", "Agentathons"], oneToOne: "Hands-on validation with a customer engaged", who: "Hands-on validation needs a customer engaged.", needsCustomer: true,
      cover: "partly",
      sources: [[ACM, "Slide 10", "Technical readiness: a dev and test environment, maker permissions and connectors"]],
      self: [],
      journeys: [["agent", "Agentic Transformation: Plan phase"]],
      note: "None of the three decks cover agent architecture, validation or reusable build patterns. The adoption playbook only covers technical readiness in the Plan phase." },

    { id: "co-dev", name: "Apps, Skills & Plugins Co-Dev", areas: ["agent"],
      desc: "Builds reusable skills, plugins and connectors alongside the partner.",
      group: ["Demo-and-learn", "Hackathon", "Pattern libraries"], oneToOne: "Building together", who: "All partners can use the patterns and sessions. Building together is 1:1.",
      cover: "partly",
      sources: [[ADV, "Slide 10", "Task design: when to build a skill or add a plugin"], [ADV, "Slide 16", "Offer 3: Custom Skills and Plugin Offer"]],
      self: [["Skills and plugins in Cowork", K + "CopilotCoworkDocs", "Docs"], ["Cowork Offer Templates", K + "CoworkOfferTemplates", "Templates"]],
      journeys: [["biz", "Business Transformation: task design and scenario build"]],
      note: "Covers skills and plugins for Cowork only. There's no content on connectors, apps or reusable build patterns." },

    { id: "factory", name: "Agent Factory Operating Model", areas: ["agent"],
      desc: "How to scale agent delivery beyond single projects: reuse, governance and lifecycle.",
      group: ["Group workshop", "Template"], oneToOne: "Partner-specific factory design", who: "All partners.",
      cover: "partly",
      sources: [[ACM, "Slide 5", "Centre of Excellence: design and publishing standards, lifecycle frameworks, avoiding agent sprawl"], [ACM, "Slides 24 and 28", "Governance monitoring and moving agents into operations"], [FIN, "Slides 22 and 27", "Agent inventory and accountability"]],
      self: [["Copilot Chat and Agent Intelligence", GH + "CopilotChatAnalytics", "Report"], ["AI-in-One Dashboard", GH + "AI-in-One-Dashboard", "Report"], ["Copilot Studio Agents Report", null, "Microsoft Learn"]],
      journeys: [["agent", "Agentic Transformation: Manage and Improve phases"], ["fin", "FinOps for AI: agent inventory and accountability"]],
      note: "Governance and lifecycle are covered. Scaling delivery through reuse across projects, the factory model itself, isn't." },

    { id: "economics", name: "AI Economics, FinOps & Cost Mgmt", areas: ["fin", "agent"],
      desc: "Forecasting, monitoring and managing AI consumption cost; cost frameworks and managed-service packaging.",
      group: ["Webinar", "Checklist pack"], oneToOne: "Applying the cost model to your managed-services offer", who: "All partners.",
      cover: "covered",
      sources: [[FIN, "Slides 2 to 7", "The capability, the three areas and the customer maturity path"], [FIN, "Slides 8 to 50", "Fit-gap and tools for plan, control and optimise"], [ADV, "Slides 7, 12 and 13", "Cost modelling, demand sizing and cost governance"]],
      self: [["Copilot Credit Planning Model", K + "CopilotCreditPlanningModel", "Tool"], ["Cost management guided demos", K + "CostManagementDemo", "Demo"], ["Copilot Credits on Microsoft Learn", K + "CopilotCredits/Learn", "Docs"], ["Analytics Hub: Cowork billing", HUB + "cowork-billing/", "Reports"], ["Get started with FinOps", "https://learn.microsoft.com/en-us/training/modules/get-started-with-finops/", "Microsoft Learn"]],
      journeys: [["fin", "The whole FinOps for AI journey"]],
      note: "Managed-service packaging is touched on (Managed AgentOps, FinOps guide slide 2) but not covered in detail." },

    { id: "acm", name: "ACM Enablement for Copilot & Agents", areas: ["work", "agent"],
      desc: "Adoption and change management consulting, help finding ACM resources, and framework feedback.",
      group: ["Resource pack", "Recurring clinic"], oneToOne: "Consulting on live customer engagements", who: "Consulting on live customer engagements is 1:1.", needsCustomer: true,
      cover: "covered",
      sources: [[ACM, "Slides 3 to 5", "The ACM approach, and what's different for agents"], [ACM, "Slides 7 to 31", "Objectives, actions and outputs for each phase"], [ACM, "Slides 35 to 44", "Prioritisation matrix, envisioning template, value metrics and resistance guidance"]],
      self: [["Agent scenario prioritisation matrix", null, "Template"], ["Agentic solution envisioning template", null, "Template"], ["Addressing resistance to agent adoption", null, "Guide"], ["Copilot Studio Agents Report", null, "Microsoft Learn"]],
      journeys: [["agent", "The whole Agentic Transformation journey"], ["work", "The whole Workforce Transformation journey"]],
      note: "The playbook names its templates and Microsoft Learn resources but doesn't link to them. Copilot (non-agent) adoption is only covered briefly." },

    { id: "profitability", name: "AI Transformation Profitability Playbook and Workshops", areas: ["biz", "work"],
      desc: "Protects margin as AI changes how work is delivered.",
      group: ["Webinar series", "Workshops"], oneToOne: "Selective 1:1 workshops for priority partners", who: "All partners can join the series. Workforce applies where the gap is in your own internal AI use.",
      cover: "none", sources: [], self: [], journeys: [],
      note: "Not covered in our three decks. The AI Advisory guide (slide 15) mentions recurring revenue from governance and value reviews, but there's no margin or profitability content." },

    { id: "gtm", name: "GTM & Co-Sell Readiness", areas: ["biz"],
      desc: "Readiness to take an offer to market and co-sell with Microsoft.",
      group: ["Checklist", "Webinar", "Sales play"], oneToOne: "Readiness review of your offer", who: "All partners.",
      cover: "partly",
      sources: [[ADV, "Slide 17", "Chapter 4: go to market, with campaigns, co-sell, incentives and the launch kit"], [ADV, "Slide 6", "Compete and positioning"], [ADV, "Slide 23", "Index of GTM playbooks and compete resources"]],
      self: [["FY27 Commercial GTM Playbook", K + "FY27PartnerGTMPlaybooks", "Playbook"], ["FY27 SMB GTM Playbook", K + "SMBPartnerPlaybook", "Playbook"], ["Why Microsoft for Partners", K + "WhyMicrosoftForPartners", "Battlecards"], ["Cowork Partner Launch Kit", K + "CoworkPartnerLaunchKit", "Kit"]],
      journeys: [["biz", "Business Transformation: compete and positioning"]],
      note: "Links to the GTM playbooks and battlecards, but there's no co-sell readiness checklist in the decks." },

    { id: "case-study", name: "Case Study & Proof-Point Development", areas: ["biz", "work", "agent", "fin"],
      desc: "Turns delivered work into case studies and proof points.",
      group: ["Template", "Guide", "Nominations"], oneToOne: "Customer interviews and drafting", who: "Needs delivered customer work.", needsCustomer: true,
      cover: "none", sources: [[ADV, "Slide 11", "Closest match: value storytelling and readout"]], self: [], journeys: [["biz", "Business Transformation: value storytelling"]],
      note: "No case study or proof-point content in our three decks. The closest is value storytelling and readout." }
  ];

  window.COVER = { covered: "From our guides", partly: "Partly in our guides", none: "Not in our guides yet" };

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
  window.serviceById = function (id) { return id === "review" ? window.REVIEW : window.SERVICES.filter(function (s) { return s.id === id; })[0]; };
})();
