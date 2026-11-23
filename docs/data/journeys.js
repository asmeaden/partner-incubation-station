/* Journey content for all four journeys, drawn from the three practice guides.
   Each journey is a list of stops. Stop types: single, multi, groups (paged checklists), matrix, plan. */
(function () {
  var K = "https://aka.ms/", GH = "https://github.com/microsoft/", HUB = "https://microsoft.github.io/Analytics-Hub/";
  var T = {
    pocKit: ["Cowork Proof of Value Kit", K + "CoworkPartnerKit", "Kit"],
    guide: ["Partner Practice Development Guide", K + "CopilotPartnerGuide", "Guide"],
    coworkDocs: ["Copilot Cowork on Microsoft Learn", K + "CopilotCoworkDocs", "Docs"],
    cpm: ["Copilot Credit Planning Model", K + "CopilotCreditPlanningModel", "Tool"],
    offers: ["Cowork Offer Templates", K + "CoworkOfferTemplates", "Templates"],
    skilling: ["Partner Skilling Hub", K + "PartnerSkilling", "Training"],
    micro: ["Microskilling: Cowork", K + "MicroSkillingCowork", "On demand"],
    adoption: ["Copilot adoption resources", null, "Site"],
    valuelens: ["ValueLens for Microsoft Copilot", GH + "ValueLens-for-Microsoft-Copilot", "Report"],
    didForMe: ["What Cowork Did For Me", GH + "What-I-did-with-Cowork", "Report"],
    central: ["Consumption Central", GH + "ConsumptionCentral-for-Microsoft-Copilot", "Report"],
    roiModel: ["Cowork ROI Model", HUB + "cowork-billing/cowork-roi-model/app/", "Web app"],
    roiCalc: ["Copilot Productivity ROI Calculator", HUB + "tools/copilot-roi-calculator/", "Web app"],
    readiness: ["M365 Copilot Readiness Report", GH + "M365UsageAnalytics", "Report"],
    policy: ["Cowork Policy Helper", HUB + "cowork-billing/cowork-policy-helper/app/index.html", "Web app"],
    chargeApp: ["Cowork Chargeback", HUB + "cowork-billing/cowork-chargeback/app/index.html", "Web app"],
    chargeRpt: ["Cowork Chargeback and Billing Report", GH + "CreditUsage", "Report"],
    focus: ["FinOps and FOCUS Cost Report", HUB + "FinOps-Cowork/app/finops.html", "Web app"],
    aiInOne: ["AI-in-One Dashboard", GH + "AI-in-One-Dashboard", "Report"],
    chatIntel: ["Copilot Chat and Agent Intelligence", GH + "CopilotChatAnalytics", "Report"],
    pax: ["PAX: Portable Audit eXporter", GH + "PAX", "Script"],
    superUse: ["Super Usage Adoption", GH + "DecodingSuperUsage", "Report"],
    sentiment: ["Adoption and Sentiment Report", "https://github.com/olivierpecheux/copilot-adoption-sentiment-report", "Report"],
    team: ["Cowork Team Report", GH + "CoworkDashboard", "Report"],
    costDemo: ["Cost management guided demos", K + "CostManagementDemo", "Demo"],
    credits: ["Copilot Credits on Microsoft Learn", K + "CopilotCredits/Learn", "Docs"],
    licensing: ["Copilot Credits licensing guide", K + "CopilotCredits/LicensingGuide", "Guide"],
    launch: ["Cowork Partner Launch Kit", K + "CoworkPartnerLaunchKit", "Kit"],
    billing: ["Analytics Hub: Cowork billing", HUB + "cowork-billing/", "Reports"],
    matrix: ["Agent scenario prioritisation matrix", null, "Template"],
    envision: ["Agentic solution envisioning template", null, "Template"],
    bizcase: ["Steps to build a business case for agents", null, "Guide"],
    agentMgmt: ["Microsoft 365 Copilot Agent Management Essentials", null, "Microsoft Learn"],
    resist: ["Addressing resistance to agent adoption", null, "Guide"],
    feedback: ["Focus group and survey questions", null, "Template"],
    agentsRpt: ["Copilot Studio Agents Report", null, "Microsoft Learn"],
    wti: ["Work Trend Index 2025: the Frontier Firm", null, "Research"]
  };

  var CONCERNS = [
    { id: "jobs", name: "Job security", text: "People worry AI will make their role redundant.", fix: "Hold open discussions to explain that AI augments roles, and share real examples of time freed for higher-value work." },
    { id: "data", name: "Data security and confidentiality", text: "People are unsure how their data is accessed, stored or shared.", fix: "Explain how security and governance are handled, and link to your responsible AI and data security policies." },
    { id: "early", name: "Lack of early involvement", text: "The people affected were brought in after the build.", fix: "Start change management before development and involve stakeholders in shaping the solution." },
    { id: "purpose", name: "Unclear purpose or value", text: "People don't see what it does or how it helps them.", fix: "Repeat the reasons and benefits in ongoing communications, and have leaders champion the value." },
    { id: "trust", name: "Trust in AI outputs", text: "People doubt the accuracy of what the AI produces.", fix: "Train users to spot and correct errors, give them checklists for verifying outputs, and reinforce human oversight." },
    { id: "fatigue", name: "Change fatigue", text: "People feel overwhelmed by the pace of new tools.", fix: "Pace the rollout, prioritise change management and provide ongoing support." }
  ];

  window.TOOLS = T;
  window.CONCERNS = CONCERNS;

  window.JOURNEYS = {
    /* ---------------- Business Transformation ---------------- */
    biz: {
      name: "Business Transformation", short: "Business", group: "Practice Development", color: "var(--biz)", time: "About 15 minutes",
      intro: "Diagnose your AI advisory practice, find the capability gap that's holding it back and leave with a plan to close it.",
      source: "AI Advisory Practice Guide", recStop: "caps",
      via: "discovery, business case, use-case fit, value story",
      out: "Your maturity level, top three gaps, a matching offer and a learning path",
      stops: [
        { id: "level", label: "Your practice today", type: "single", required: true,
          title: "Where is your practice today?", sub: "Pick the description closest to how you work now. Your answers stay on this device.",
          field: { id: "pname", label: "Practice or company name (optional)", placeholder: "Shown on your plan" },
          options: [
            { id: 1, tag: "Level 1", name: "Product-centric", text: "Readiness workshops, licensing conversations and use-case lists.", small: "Typical evidence: product activity and one-off engagements." },
            { id: 2, tag: "Level 2", name: "Process-centric", text: "Workflow redesign, prioritised roadmaps and business cases you can defend.", small: "Typical evidence: repeatable offers, KPI baselines and adoption plans." },
            { id: 3, tag: "Level 3", name: "Transformation-centric", text: "Executive AI strategy, operating model and ongoing value services.", small: "Typical evidence: industry plays, a value cadence and managed advisory." }
          ] },
        { id: "flags", label: "What sounds like you", type: "multi", quote: true, two: true,
          title: "Which of these sound like your team?", sub: "Pick any that ring true. We'll check those capabilities first. Not sure? Skip ahead and we'll check them all.",
          fromGroups: "caps" },
        { id: "caps", label: "Capability check", type: "groups", priorityFrom: "flags", what: "capability",
          groups: [
            { id: "discovery", meta: "Executive and business discovery", title: "Advisory and discovery skills", say: "I demo when I should be running discovery.",
              head: "Lead with discovery, not a demo.", why: "This sits under every other capability. The best cost model falls flat if the conversation starts wrong: customers want an advisor, not a tour.",
              checks: ["I open by asking about goals, not with what Copilot does.", "I have a repeatable framework for scoping an engagement.", "Customers come to me for judgement, not only for reporting.", "I can pause a demo and shift into discovery when it's needed."],
              res: [["Task Ideation Exercise", K + "CoworkPartnerKit", "Proof of Value Kit"], T.guide, T.coworkDocs] },
            { id: "compete", meta: "Executive and business discovery", title: "Compete and positioning", say: "I defend features instead of the platform.",
              head: "Answer the objective, not the objection.", why: "Models and benchmarks change weekly. Argue the leaderboard and you defend ground that moves; name the objective underneath and the platform wins it.",
              checks: ["I can name Cowork's lasting differentiators without a feature list.", "I know where the compete battlecards are and have read the current set.", "I can hear the objective behind an objection and reframe to it.", "I can say which tool fits a job, including when it isn't Cowork."],
              res: [["Why Microsoft for Partners", K + "WhyMicrosoftForPartners", "Battlecards"], T.coworkDocs] },
            { id: "case", meta: "Business value and case", title: "Business case and ROI", say: "We start before anyone has captured the baseline.",
              head: "Capture the baseline before the pilot starts.", why: "Value is a comparison. Without a captured before (time and cost per task, and who does it) there is nothing to measure the after against.",
              checks: ["I capture today's effort and cost per task before Cowork goes on.", "I agree success metrics and KPIs with the sponsor, in writing.", "I can build a forward ROI case from hours saved, run rate and credit cost.", "The customer signs off the assumptions the case rests on."],
              res: [["Business Outcomes Workbook", K + "CoworkPartnerKit", "Proof of Value Kit"], ["Engagement Delivery Guide", K + "CoworkPartnerKit", "Proof of Value Kit"], T.cpm, ["Partner-led customer trials", K + "ABSTrialsRequest", "Programme"]] },
            { id: "usecase", meta: "Process transformation", title: "Use-case fit", say: "I'm unsure which workflows deliver real value.",
              head: "Recommend workflows that pay, and say when they don't.", why: "Not all usage is equal. High-volume tasks like inbox triage return far less than fewer, complex ones. The wrong use cases cost budget and credibility.",
              checks: ["I can map a customer's processes to task categories and spot the fits.", "I know when to recommend a different tool instead of Cowork.", "I can tell high-volume usage apart from high-value usage.", "I have a view on which function should pilot first, and why."],
              res: [["Cowork Task Packs", K + "CoworkPartnerKit", "Proof of Value Kit"], ["Nifty Fifty scenario catalogue", K + "CoworkPartnerKit", "Proof of Value Kit"], ["Cowork adoption site", "https://adoption.microsoft.com/copilot/cowork", "Site"]] },
            { id: "task", meta: "Process transformation", title: "Task design and scenario build", say: "Right scenario, but the output needs rework.",
              head: "A good use case still needs a well-built task.", why: "Cowork delivers against how the job was framed. A task that names its sources, deliverables and guardrails returns finished work.",
              checks: ["I frame a task as the whole job, not just the first step.", "I name the systems and sources a task should use.", "I define what good looks like: outputs, structure and exclusions.", "I know when to build a skill or add a plugin rather than reprompt."],
              res: [["Cowork Task Packs (57 tasks)", K + "CoworkPartnerKit", "Proof of Value Kit"], ["Skills and plugins in Cowork", K + "CopilotCoworkDocs", "Docs"], T.micro] },
            { id: "story", meta: "Measurement and proof", title: "Value storytelling and readout", say: "I can show usage, but not dollar value.",
              head: "Turn usage data into a story a CFO trusts.", why: "Executives don't want a dashboard; they want to know if it was worth it. Report numbers and you're a vendor; interpret them and you're an advisor.",
              checks: ["I can turn tasks and hours into a defensible dollar figure.", "I build a value-versus-cost story, not just a usage report.", "I lead with the headline insight rather than a data dump.", "I can defend my assumptions, like loaded rate and time saved, under pushback."],
              res: [["Microsoft Analytics Hub", HUB + "choose-report/", "Reports"], ["Value readout", K + "CoworkPartnerKit", "Delivery Guide"], T.valuelens] },
            { id: "cadence", meta: "Ongoing strategic advisory", title: "Value cadence and expansion", say: "We prove value once, then the work stops.",
              head: "The pilot ends. The advisory relationship shouldn't.", why: "Consumption shifts every month, so a roadmap goes stale fast. Partners who run a recurring value review keep the relationship and win the next cohort.",
              checks: ["I run a scheduled value review rather than waiting to be called back.", "I can recommend the next cohort or function, with evidence.", "I revisit the credit operating model as usage patterns change.", "I have a retained advisory or managed-service offer to move customers onto."],
              res: [["Scale step", K + "CoworkPartnerKit", "Delivery Guide"], ["FY27 Commercial GTM Playbook", K + "FY27PartnerGTMPlaybooks", "Playbook"], T.offers] }
          ] },
        { id: "seats", label: "Your team", type: "multi", two: true,
          title: "Who's on your advisory bench?", sub: "No single profile covers the practice. Tick the roles you have today, in-house or through someone you can call on. Most partners start with the first three and borrow the rest.",
          options: [
            { id: "lead", name: "AI Advisory Lead", text: "Executive dialogue, strategy and account transformation.", badge: "Start here" },
            { id: "value", name: "Business Value Consultant", text: "Baseline, ROI, KPIs and benefits realisation.", badge: "Start here" },
            { id: "sme", name: "Industry SME", text: "Industry context, process credibility and priority scenarios.", badge: "Start here" },
            { id: "process", name: "Process Transformation Lead", text: "Workflow redesign and operating-model change." },
            { id: "change", name: "Adoption and Change Lead", text: "Behaviour, communications, learning and adoption." },
            { id: "analytics", name: "Analytics Lead", text: "Measurement, interpretation and reporting." },
            { id: "architect", name: "Solution Architect", text: "Connects advice to a secure, feasible solution." }
          ] },
        { id: "plan", label: "Your plan", type: "plan" }
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

    /* ---------------- Workforce Transformation ---------------- */
    work: {
      name: "Workforce Transformation", short: "Workforce", group: "Practice Development", color: "var(--work)", time: "About 10 minutes",
      intro: "Help a customer's employees make Copilot part of how they work every day, from launch to lasting habits.",
      source: "Adoption and Change Management Playbook (Copilot sections)", recStop: "phases",
      via: "plan, launch, adopt, manage, improve",
      out: "Where to focus now, the actions to take and how to measure success",
      stops: [
        { id: "stage", label: "Where you are", type: "single", required: true,
          title: "Where is your customer's Copilot rollout?", sub: "Think of one customer you're working with now. You can take the journey again for others.",
          field: { id: "pname", label: "Customer or project name (optional)", placeholder: "Shown on your plan" },
          options: [
            { id: 1, name: "Not started", text: "We're planning the rollout and building the case." },
            { id: 2, name: "Piloting", text: "A small group is using Copilot and we're learning." },
            { id: 3, name: "Rolled out, usage is patchy", text: "Licences are out but habits haven't formed everywhere." },
            { id: 4, name: "Embedded", text: "Copilot is part of daily work and we're planning the next wave." }
          ] },
        { id: "phases", label: "Readiness check", type: "groups", what: "phase",
          groups: [
            { id: "plan", meta: "Phase 1", title: "Plan", head: "Ensure alignment, readiness and success measures.", why: "Strategic alignment, readiness, stakeholder engagement and agreed success metrics set up everything that follows.",
              checks: ["Copilot is tied to clear productivity goals agreed with leaders.", "We've assessed readiness: licences, data and who goes first.", "Key stakeholders are engaged and sponsoring the rollout.", "We've defined success metrics and captured a baseline."],
              res: [T.adoption, T.readiness] },
            { id: "implement", meta: "Phase 2", title: "Implement", head: "Launch with communications, training and engagement.", why: "Targeted communications, hands-on training and active stakeholder engagement turn licences into usage.",
              checks: ["Targeted communications explain the why and what to expect.", "Employees get hands-on training on everyday scenarios.", "Leaders and managers are visibly involved in the launch.", "There's a clear support channel for questions and issues."],
              res: [T.adoption, T.skilling] },
            { id: "adopt", meta: "Phase 3", title: "Adopt", head: "Make Copilot part of normal ways of working.", why: "Usage fades after launch unless employees are engaged over time and see peers getting value.",
              checks: ["We engage employees over time, not just at launch.", "A Copilot champions community shares tips and wins.", "Self-service help and best practices are easy to find.", "Managers make Copilot part of how their teams work."],
              res: [T.superUse, T.adoption] },
            { id: "manage", meta: "Phase 4", title: "Manage", head: "Monitor success and support long-term adoption.", why: "Tracking metrics and gathering feedback shows where to help and proves the investment is paying off.",
              checks: ["We monitor usage and feature adoption regularly.", "We gather feedback and sentiment from employees.", "We track productivity gains against the baseline.", "Features are enabled for the right people, with responsible-use policies."],
              res: [T.sentiment, T.roiCalc, T.aiInOne] },
            { id: "improve", meta: "Phase 5", title: "Improve", head: "Learn, enhance and plan the next iteration.", why: "Evaluating trends and learning from experience sets up the next wave of licences or scenarios.",
              checks: ["We review trends and learn from what's working.", "We act on feedback with enhancements.", "We've planned the next wave: more licences or more scenarios.", "We're exploring where agents could help next."],
              res: [T.wti, T.valuelens] }
          ] },
        { id: "measures", label: "Success measures", type: "multi",
          title: "What do you measure today?", sub: "Pick the measures you already track for this customer.",
          options: [
            { id: "usage", name: "Copilot usage and feature adoption", text: "Active users, frequency and which features are used." },
            { id: "productivity", name: "Productivity gains", text: "Time saved on everyday tasks against the baseline." },
            { id: "sentiment", name: "Employee engagement and sentiment", text: "How people feel about Copilot and what they need." },
            { id: "outcomes", name: "Business outcome KPIs", text: "Changes in the metrics the business already cares about." }
          ] },
        { id: "concerns", label: "What you're hearing", type: "multi", two: true,
          title: "What are employees saying?", sub: "Pick the concerns you're hearing. We'll add ways to handle each to your plan.",
          options: CONCERNS },
        { id: "plan", label: "Your plan", type: "plan" }
      ]
    },

    /* ---------------- Agentic Transformation ---------------- */
    agent: {
      name: "Agentic Transformation", short: "Agentic", group: "Practice Development", color: "var(--agent)", time: "About 15 minutes",
      intro: "Pick the right agent scenario, then lead the people side of the change from pilot to scale.",
      source: "Adoption and Change Management Playbook for Microsoft 365 Copilot agents", recStop: "phases",
      via: "scenario, plan, implement, adopt, value",
      out: "Your scenario priorities, where to focus now and how to show value",
      stops: [
        { id: "scenarios", label: "Pick scenarios", type: "matrix",
          title: "Which agent scenarios are you considering?", sub: "Add up to three. Rate each for business impact and how complex it is to build and roll out. We'll place them on the prioritisation matrix." },
        { id: "phases", label: "Change readiness", type: "groups", what: "phase",
          groups: [
            { id: "plan", meta: "Phase 1", title: "Plan", head: "Align the agent to priorities and prepare people.", why: "Agents change business processes, not just personal habits. Strong buy-in and clear measures before the build reduce resistance later.",
              checks: ["The agent is tied to a business priority with a clear why.", "We've decided how to measure success and captured a baseline.", "Sponsors, process owners, IT and the governance board are engaged.", "Employees have been consulted, and communications and training are planned."],
              res: [T.matrix, T.envision, T.bizcase] },
            { id: "implement", meta: "Phase 2", title: "Implement", head: "Pilot, launch and support the change.", why: "A pilot proves the end-to-end process works, builds quick wins and finds your champions.",
              checks: ["We've piloted the full process and agent with a small group.", "Everyone in scope has access, permissions and licences.", "Leaders have launched communications and hands-on training.", "There's hypercare support and a fallback to the old process.", "We monitor usage and feedback daily after launch."],
              res: [T.agentMgmt] },
            { id: "adopt", meta: "Phase 3", title: "Adopt", head: "Reinforce the new way of working.", why: "Without reinforcement, people drift back to workarounds. Leaders, managers and communities make the change stick.",
              checks: ["Leaders and managers visibly reinforce the new way of working.", "We seek employee feedback and act on it quickly.", "A community of practice or agent champions group is running.", "Employees know where to find refresher training and support."],
              res: [T.resist, T.feedback] },
            { id: "manage", meta: "Phase 4", title: "Manage", head: "Prove value and keep it safe.", why: "Value data keeps sponsors engaged; governance and performance monitoring keep employees' confidence.",
              checks: ["We compare value metrics before and after, and share the value story.", "The CoE monitors compliance, data access and misuse.", "We monitor technical performance with alerts.", "We keep employees updated and celebrate success stories."],
              res: [T.agentsRpt] },
            { id: "improve", meta: "Phase 5", title: "Improve", head: "Operationalise, then scale.", why: "Moving from project to operations, then scaling to new processes, is how organisations progress towards becoming a Frontier Firm.",
              checks: ["The agent has a named owner and has moved from project to operations.", "There's a review schedule, and training stays current.", "We've run a post-implementation review and captured lessons.", "We've identified the next processes or teams for agents."],
              res: [T.agentsRpt, T.wti] }
          ] },
        { id: "concerns", label: "Resistance check", type: "multi", two: true,
          title: "What concerns are you hearing?", sub: "Pick any that apply. We'll add ways to handle each to your plan.",
          options: CONCERNS },
        { id: "value", label: "Value", type: "multi", two: true,
          title: "Where should the agent drive value?", sub: "Pick the outcomes that matter most. We'll show the KPI and business outcome to track for each.",
          options: [
            { id: "revenue", name: "Drive more business", text: "Example: sales reps use an agent to reach more decision makers.", kpi: "Opportunities created", outcome: "Revenue per seller" },
            { id: "experience", name: "Improve satisfaction and engagement", text: "Example: an agent analyses customer sentiment and flags risks.", kpi: "Customer risk score", outcome: "Retention" },
            { id: "quality", name: "Improve deliverable accuracy", text: "Example: engineering uses the Researcher agent for QA.", kpi: "Defect recurrence rate", outcome: "Customer satisfaction" },
            { id: "cost", name: "Reduce operating costs", text: "Example: a self-service agent answers IT and HR questions.", kpi: "Resolution time", outcome: "Lower support costs" },
            { id: "productivity", name: "Help teams do more, faster", text: "Example: an HR analyst uses an agent to screen candidates.", kpi: "Time to review", outcome: "Time to hire" },
            { id: "risk", name: "Spot and reduce risks earlier", text: "Example: a Security Copilot agent flags risks in real time.", kpi: "Threats detected", outcome: "Reduced fines" }
          ] },
        { id: "plan", label: "Your plan", type: "plan" }
      ]
    },

    /* ---------------- FinOps for AI ---------------- */
    fin: {
      name: "FinOps for AI", short: "FinOps", group: "FinOps", color: "var(--fin)", time: "About 15 minutes",
      intro: "Build the services that help customers forecast, govern and optimise their AI spend.",
      source: "FinOps for AI Practice Guide and AI Advisory Practice Guide", recStop: "services",
      via: "maturity, plan, control, optimise",
      out: "Your service menu, the tools to use and where to focus",
      stops: [
        { id: "maturity", label: "Customer maturity", type: "single", required: true,
          title: "Where are your customers on the FinOps maturity path?", sub: "Pick where most of your customers are today.",
          field: { id: "pname", label: "Practice or company name (optional)", placeholder: "Shown on your plan" },
          options: [
            { id: 1, tag: "Level 1", name: "Cost visibility", text: "We see what we are spending." },
            { id: 2, tag: "Level 2", name: "Cost control", text: "We set guardrails and control spend." },
            { id: 3, tag: "Level 3", name: "Cost attribution", text: "We allocate cost to teams and workloads." },
            { id: 4, tag: "Level 4", name: "Cost-to-outcome optimisation", text: "We optimise for value, not just cost." },
            { id: 5, tag: "Level 5", name: "AI capital allocation", text: "We invest AI money where it drives the highest ROI." }
          ] },
        { id: "modes", label: "Investment modes", type: "multi", two: true,
          title: "How are your customers investing in AI?", sub: "Customers usually mix several models. Pick the ones you see.",
          options: [
            { id: "licensed", name: "Copilot and Microsoft 365", text: "Licensed" },
            { id: "cowork", name: "Cowork and Microsoft 365 agents", text: "Consumption" },
            { id: "custom", name: "Custom agents, plugins and solutions", text: "Project or IP" },
            { id: "azure", name: "Azure AI services", text: "Consumption" },
            { id: "ops", name: "Managed AgentOps and operations", text: "Recurring" }
          ] },
        { id: "services", label: "Services you deliver", type: "groups", what: "area", tick: "Tick the services you already deliver",
          groups: [
            { id: "plan", meta: "Capability area 1", title: "Plan: AI Economics Advisory", head: "Should we invest? If so, where and how?", why: "Outcome for the customer: confident investment decisions backed by a strong business case and forecast.",
              checks: [
                { id: "p1", t: "Business value and outcome advisory", need: "Validate benefits and outcomes", native: "Cowork deep dive", tools: [T.valuelens, T.didForMe], gap: "Validate the baseline, accept outcomes and realise cash value", fit: "Report enabled" },
                { id: "p2", t: "Consumption and cost forecasting", need: "Forecast cost and price new AI demand", native: "Consumption Dashboard", tools: [T.central, T.cpm], gap: "Model new demand, with price and adoption sensitivity", fit: "Report enabled" },
                { id: "p3", t: "Technology choice and scenario modelling", need: "Select tools and choose a funding mix", native: "Cost Management billing", tools: [T.roiModel, T.roiCalc], gap: "Cross-product choice and pay-as-you-go versus licensed break-even", fit: "Partial" },
                { id: "p4", t: "Business case and ROI development", need: "Approve TCO and a costed value case", native: "Consumption Dashboard", tools: [T.roiModel, T.roiCalc], gap: "Actual TCO, Finance-approved assumptions and realised savings", fit: "Report enabled" },
                { id: "p5", t: "Roadmap and investment prioritisation", need: "Rank cases and fund rollout waves", native: "Credit usage by service", tools: [T.readiness, T.valuelens, T.central], gap: "Strategy, portfolio and risk-adjusted rollout waves", fit: "Partner led" }
              ] },
            { id: "control", meta: "Capability area 2", title: "Control: AI Economics Governance", head: "How do we control it?", why: "Outcome for the customer: governed, predictable and accountable AI spend.",
              checks: [
                { id: "c1", t: "Spending policy design", need: "Assign tiers and manage spend exceptions", native: "Cost Management policies", tools: [T.policy], gap: "Policy design, RACI, tiers and exception approval", fit: "Native and report" },
                { id: "c2", t: "Budget allocation and ownership", need: "Set budgets and name budget owners", native: "Cost Management limits", tools: [T.central, T.chargeRpt], gap: "Owner register and budget cascade", fit: "Partial" },
                { id: "c3", t: "Chargeback and showback frameworks", need: "Allocate cost and check invoice charges", native: "Groups and credits (preview)", tools: [T.chargeApp, T.focus], gap: "Rates, cost centres, shared costs and invoice checks", fit: "Report enabled" },
                { id: "c4", t: "Guardrails, limits and approvals", need: "Enforce caps and approve spend exceptions", native: "Cost Management requests", tools: [T.policy], gap: "Approval integration, limit testing and runbooks", fit: "Native and report" },
                { id: "c5", t: "Agent inventory and accountability", need: "Join each agent to a business owner", native: "Credits (scoped preview)", tools: [T.aiInOne, T.chatIntel], gap: "Complete inventory and owner lifecycle", fit: "Partial" }
              ] },
            { id: "optimise", meta: "Capability area 3", title: "Optimise: Operations and Optimisation", head: "Are we spending in the right places?", why: "Outcome for the customer: optimised spend delivering measurable value and continuous improvement.",
              checks: [
                { id: "o1", t: "Consumption monitoring and reporting", need: "Review cost at an agreed refresh", native: "Consumption Dashboard", tools: [T.central, T.pax], gap: "Deployment, refresh SLA and ledger reconciliation", fit: "Report enabled" },
                { id: "o2", t: "Cost anomaly detection", need: "Triage spend outside the baseline", native: "Cost Management alerts", tools: [T.central], gap: "Baseline logic, alert routing and triage", fit: "Partial" },
                { id: "o3", t: "Usage and value optimisation", need: "Improve tasks and cohort adoption", native: "Cowork task breakdown", tools: [T.superUse, T.sentiment], gap: "Test fixes, redesign and adoption coaching", fit: "Report enabled" },
                { id: "o4", t: "Outcome-to-cost analysis", need: "Cost accepted outcomes in currency", native: "Cowork assisted value", tools: [T.central, T.chargeRpt], gap: "Join cost and outcome, and validate cash value", fit: "Report enabled" },
                { id: "o5", t: "Executive QBRs and recommendations", need: "Agree QBR actions and owners", native: "Usage trends and policies", tools: [T.valuelens, T.team], gap: "Business trade-offs, recommendations and action owners", fit: "Partner led" }
              ] }
          ] },
        { id: "skills", label: "Capability check", type: "groups", what: "capability",
          groups: [
            { id: "cost", meta: "Business value and case", title: "Cost and credit modelling", head: "Answer the cost question with a defensible number.", why: "Every usage-based billing conversation opens with cost. Partners who can't answer with a credible number lose credibility before the value conversation starts.",
              checks: ["I can explain how tasks and turns become credits, and credits become dollars.", "I've forecast cost before a rollout, not just reported usage after.", "I've run a cost-modelling tool live, in front of a customer.", "I know which assumptions, like rate and task mix, drive the forecast."],
              res: [T.cpm, T.licensing, T.credits] },
            { id: "demand", meta: "Governance and economics", title: "Demand sizing and rollout", head: "Size the rollout before usage and cost scale on you.", why: "Usage rarely grows evenly; a few power users drive most consumption. Partners who don't plan for it get caught out by cost spikes mid-rollout.",
              checks: ["I can segment users into usage tiers and estimate consumption per tier.", "I have a rollout sequence, from pilot to organisation-wide, tied to demand.", "I know the levers, like policies, alerts and limits, that hold cost as it scales.", "I can set expectations for how usage evolves in the first 90 days."],
              res: [T.costDemo, T.launch, T.cpm, T.billing] },
            { id: "govern", meta: "Governance and economics", title: "Cost governance and chargeback", head: "Put an owner, a budget and a guardrail on spend.", why: "Governance is where consumption stops being a surprise. Policies, budget owners and a chargeback model turn variable cost into managed cost.",
              checks: ["I can set up spending policies, limits and alerts in the admin center.", "I've agreed a budget owner and a purchase path with the customer.", "I can recommend central budget, showback or chargeback, and say why.", "I run an agent and skill inventory so spend stays accountable."],
              res: [T.coworkDocs, T.credits, ["Chargeback models", K + "CoworkPartnerKit", "Proof of Value Kit"], T.billing] }
          ] },
        { id: "plan", label: "Your plan", type: "plan" }
      ]
    }
  };
})();
