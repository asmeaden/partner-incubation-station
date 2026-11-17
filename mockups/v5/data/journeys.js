/* Journey content, drawn from the three practice guides.
   Business Transformation is fully built; the others list their planned stops. */
window.JOURNEYS = {
  biz: {
    name: "Business Transformation", group: "Practice Development", color: "var(--biz)", time: "About 15 minutes",
    intro: "Diagnose your AI advisory practice, find the capability gap that's holding it back and leave with a plan to close it.",
    source: "AI Advisory Practice Guide",
    stops: ["Your practice today", "What sounds like you", "Capability check", "Your team", "Your plan"],
    levels: [
      { id: 1, name: "Product-centric", text: "Readiness workshops, licensing conversations and use-case lists.", evidence: "Product activity and one-off engagements." },
      { id: 2, name: "Process-centric", text: "Workflow redesign, prioritised roadmaps and business cases you can defend.", evidence: "Repeatable offers, KPI baselines and adoption plans." },
      { id: 3, name: "Transformation-centric", text: "Executive AI strategy, operating model and ongoing value services.", evidence: "Industry plays, a value cadence and managed advisory." }
    ],
    caps: [
      { id: "discovery", n: 1, comp: "Executive and business discovery", title: "Advisory and discovery skills",
        say: "I demo when I should be running discovery.",
        head: "Lead with discovery, not a demo.",
        why: "This sits under every other capability. The best cost model falls flat if the conversation starts wrong: customers want an advisor, not a tour.",
        checks: ["I open by asking about goals, not with what Copilot does.", "I have a repeatable framework for scoping an engagement.", "Customers come to me for judgement, not only for reporting.", "I can pause a demo and shift into discovery when it's needed."],
        res: [["Task Ideation Exercise", "https://aka.ms/CoworkPartnerKit", "Proof of Value Kit"], ["Partner Practice Development Guide", "https://aka.ms/CopilotPartnerGuide", "Guide"], ["Copilot Cowork on Microsoft Learn", "https://aka.ms/CopilotCoworkDocs", "Docs"]] },
      { id: "compete", n: 2, comp: "Executive and business discovery", title: "Compete and positioning",
        say: "I defend features instead of the platform.",
        head: "Answer the objective, not the objection.",
        why: "Models and benchmarks change weekly. Argue the leaderboard and you defend ground that moves; name the objective underneath and the platform wins it.",
        checks: ["I can name Cowork's lasting differentiators without a feature list.", "I know where the compete battlecards are and have read the current set.", "I can hear the objective behind an objection and reframe to it.", "I can say which tool fits a job, including when it isn't Cowork."],
        res: [["Why Microsoft for Partners", "https://aka.ms/WhyMicrosoftForPartners", "Battlecards"], ["Copilot Cowork on Microsoft Learn", "https://aka.ms/CopilotCoworkDocs", "Docs"]] },
      { id: "case", n: 4, comp: "Business value and case", title: "Business case and ROI",
        say: "We start before anyone has captured the baseline.",
        head: "Capture the baseline before the pilot starts.",
        why: "Value is a comparison. Without a captured before (time and cost per task, and who does it) there is nothing to measure the after against.",
        checks: ["I capture today's effort and cost per task before Cowork goes on.", "I agree success metrics and KPIs with the sponsor, in writing.", "I can build a forward ROI case from hours saved, run rate and credit cost.", "The customer signs off the assumptions the case rests on."],
        res: [["Business Outcomes Workbook", "https://aka.ms/CoworkPartnerKit", "Proof of Value Kit"], ["Engagement Delivery Guide", "https://aka.ms/CoworkPartnerKit", "Proof of Value Kit"], ["Copilot Credit Planning Model", "https://aka.ms/CopilotCreditPlanningModel", "Tool"], ["Partner-led customer trials", "https://aka.ms/ABSTrialsRequest", "Programme"]] },
      { id: "usecase", n: 5, comp: "Process transformation", title: "Use-case fit",
        say: "I'm unsure which workflows deliver real value.",
        head: "Recommend workflows that pay, and say when they don't.",
        why: "Not all usage is equal. High-volume tasks like inbox triage return far less than fewer, complex ones. The wrong use cases cost budget and credibility.",
        checks: ["I can map a customer's processes to task categories and spot the fits.", "I know when to recommend a different tool instead of Cowork.", "I can tell high-volume usage apart from high-value usage.", "I have a view on which function should pilot first, and why."],
        res: [["Cowork Task Packs", "https://aka.ms/CoworkPartnerKit", "Proof of Value Kit"], ["Nifty Fifty scenario catalogue", "https://aka.ms/CoworkPartnerKit", "Proof of Value Kit"], ["Cowork adoption site", "https://adoption.microsoft.com/copilot/cowork", "Site"]] },
      { id: "task", n: 6, comp: "Process transformation", title: "Task design and scenario build",
        say: "Right scenario, but the output needs rework.",
        head: "A good use case still needs a well-built task.",
        why: "Cowork delivers against how the job was framed. A task that names its sources, deliverables and guardrails returns finished work.",
        checks: ["I frame a task as the whole job, not just the first step.", "I name the systems and sources a task should use.", "I define what good looks like: outputs, structure and exclusions.", "I know when to build a skill or add a plugin rather than reprompt."],
        res: [["Cowork Task Packs (57 tasks)", "https://aka.ms/CoworkPartnerKit", "Proof of Value Kit"], ["Skills and plugins in Cowork", "https://aka.ms/CopilotCoworkDocs", "Docs"], ["Microskilling: Cowork", "https://aka.ms/MicroSkillingCowork", "On demand"]] },
      { id: "story", n: 7, comp: "Measurement and proof", title: "Value storytelling and readout",
        say: "I can show usage, but not dollar value.",
        head: "Turn usage data into a story a CFO trusts.",
        why: "Executives don't want a dashboard; they want to know if it was worth it. Report numbers and you're a vendor; interpret them and you're an advisor.",
        checks: ["I can turn tasks and hours into a defensible dollar figure.", "I build a value-versus-cost story, not just a usage report.", "I lead with the headline insight rather than a data dump.", "I can defend my assumptions, like loaded rate and time saved, under pushback."],
        res: [["Microsoft Analytics Hub", "https://microsoft.github.io/Analytics-Hub/choose-report/", "Reports"], ["Value readout", "https://aka.ms/CoworkPartnerKit", "Delivery Guide"], ["Business outcomes by function", "https://aka.ms/CoworkPartnerKit", "Proof of Value Kit"]] },
      { id: "cadence", n: 10, comp: "Ongoing strategic advisory", title: "Value cadence and expansion",
        say: "We prove value once, then the work stops.",
        head: "The pilot ends. The advisory relationship shouldn't.",
        why: "Consumption shifts every month, so a roadmap goes stale fast. Partners who run a recurring value review keep the relationship and win the next cohort.",
        checks: ["I run a scheduled value review rather than waiting to be called back.", "I can recommend the next cohort or function, with evidence.", "I revisit the credit operating model as usage patterns change.", "I have a retained advisory or managed-service offer to move customers onto."],
        res: [["Scale step", "https://aka.ms/CoworkPartnerKit", "Delivery Guide"], ["FY27 Commercial GTM Playbook", "https://aka.ms/FY27PartnerGTMPlaybooks", "Playbook"], ["Cowork Offer Templates", "https://aka.ms/CoworkOfferTemplates", "Templates"]] }
    ],
    seats: [
      { name: "AI Advisory Lead", text: "Executive dialogue, strategy and account transformation.", core: true },
      { name: "Business Value Consultant", text: "Baseline, ROI, KPIs and benefits realisation.", core: true },
      { name: "Industry SME", text: "Industry context, process credibility and priority scenarios.", core: true },
      { name: "Process Transformation Lead", text: "Workflow redesign and operating-model change." },
      { name: "Adoption and Change Lead", text: "Behaviour, communications, learning and adoption." },
      { name: "Analytics Lead", text: "Measurement, interpretation and reporting." },
      { name: "Solution Architect", text: "Connects advice to a secure, feasible solution." }
    ],
    offers: [
      { name: "AI Investment Planning Strategy", tagline: "From AI investment to value", text: "Builds the AI spend baseline, the value hypothesis and the investment case.", caps: ["discovery", "case"] },
      { name: "AI Functional or Industry Starter Pack", tagline: "AI functional starter pack", text: "One function or industry, bounded. Hybrid fixed, outcome and subscription pricing.", caps: ["usecase", "task"] },
      { name: "Custom Skills and Plugin Offer", tagline: "AI workforce accelerator", text: "Skills, plugins and grounding that turn a scenario into finished work.", caps: ["task", "story", "cadence"] }
    ],
    sessions: [
      { name: "Session 1: Foundation", text: "The model shift, Cowork demos and prompt anatomy.", caps: ["discovery", "task"] },
      { name: "Session 3: Compete deep dive", text: "Battlecards and the which-tool-for-the-work matrix.", caps: ["compete", "usecase"] },
      { name: "Session 4: Proof of Value Kit", text: "The four-step engagement, task ideation and chargeback models.", caps: ["case", "usecase", "story"] },
      { name: "Session 5: Offer building", text: "Anatomy of a strong offer and the three offer templates.", caps: ["cadence"] }
    ]
  },
  work: {
    name: "Workforce Transformation", group: "Practice Development", color: "var(--work)", time: "About 10 minutes",
    intro: "Help employees make Copilot part of how they work every day, from launch to lasting habits.",
    source: "Agent Adoption and Change Playbook (Copilot sections)",
    stops: ["Align to productivity goals", "Launch with training and champions", "Build habits over time", "Measure usage and sentiment", "Plan the next wave"],
    out: "A phased adoption plan with success measures"
  },
  agent: {
    name: "Agentic Transformation", group: "Practice Development", color: "var(--agent)", time: "About 15 minutes",
    intro: "Pick the right agent scenario, then lead the people side of the change from pilot to scale.",
    source: "Agent Adoption and Change Playbook",
    stops: ["Rank scenarios by impact and complexity", "Plan the change and success measures", "Check for resistance", "Pilot and launch", "Prove value and scale"],
    out: "A phased rollout plan and a completed envisioning template"
  },
  fin: {
    name: "FinOps for AI", group: "FinOps", color: "var(--fin)", time: "About 15 minutes",
    intro: "Build the services that help customers forecast, govern and optimise their AI spend.",
    source: "FinOps for AI Practice Guide",
    stops: ["Place your customer on the maturity path", "Model cost and size demand", "Plan: advisory services", "Control: governance services", "Optimise: operations services"],
    out: "Your service menu and recommended tool stack"
  }
};
