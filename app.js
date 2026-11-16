/* ========== Seed data (public directory info — verify before relying) ========== */
  const HOUSING = [
    { id: "kha", name: "Kennewick Housing Authority", city: "Kennewick", type: "Housing Authority",
      phone: "509-586-8576", address: "1915 W 4th Place, Kennewick, WA 99336",
      website: "https://kennewickha.org/", email: "info@kennewickha.org",
      hours: "Mon–Wed 9:30–12 & 12:30–5:30; Thu 9:30–12; closed Fri",
      about: "Public housing & Housing Choice Vouchers for Kennewick, Richland, and Benton County. Call to confirm waitlist status.",
      priority: "high" },
    { id: "hacpfc", name: "Housing Authority of Pasco & Franklin County", city: "Pasco", type: "Housing Authority",
      phone: "509-547-3581", address: "2505 W Lewis St, Pasco, WA 99301",
      website: "https://hacpfc.org/", email: "info@hacpfc.org",
      hours: "Mon–Thu 10–5 (closed 12–12:30); closed Fri",
      about: "Public housing, HCV, and affordable apartments in Franklin County / Pasco area. Waitlists open/close periodically.",
      priority: "high" },
    { id: "cac", name: "Community Action Connections (Home Base / Coordinated Entry)", city: "Pasco", type: "Coordinated Entry",
      phone: "509-545-4042", address: "720 W Court St (upstairs), Pasco, WA 99301",
      website: "https://www.bfcac.org/", email: "info@bfcac.org",
      hours: "Mon–Fri 8–11:30 & 1–4 / 4:30",
      about: "Front door for many homeless & housing crisis services in Benton & Franklin Counties. Rental help, prevention, referrals. Call for current intake status.",
      priority: "high" },
    { id: "hrc", name: "Housing Resource Center (screenings)", city: "Kennewick", type: "Coordinated Entry",
      phone: "509-737-3946", address: "7404 W Hood Pl, Suite 201, Kennewick, WA (BFHD)",
      website: "https://www.bfcac.org/",
      hours: "Call to confirm screening times",
      about: "Walk-in / scheduled housing screenings linked to coordinated entry. Bring ID and any income or eviction paperwork if available.",
      priority: "high" },
    { id: "ugm", name: "Tri-City Union Gospel Mission", city: "Pasco", type: "Shelter",
      phone: "509-547-2112", address: "Tri-Cities (men / women / family programs — confirm site)",
      website: "https://www.uniongospelmission.org/",
      hours: "Emergency shelter; check-in times vary — call first",
      about: "Emergency shelter and recovery programs. Separate programs for men, women, and families. Call for bed availability and check-in rules.",
      priority: "high" },
    { id: "dvs", name: "Domestic Violence Services of Benton & Franklin Counties", city: "Tri-Cities", type: "Safety",
      phone: "509-582-9841", address: "Confidential",
      website: "https://www.dvsbf.org/",
      hours: "24/7 crisis line",
      about: "Crisis line, advocacy, and housing support for survivors. If you are in danger, call 911 first.",
      priority: "high" },
    { id: "salvation", name: "The Salvation Army — Tri-Cities", city: "Pasco", type: "Assistance",
      phone: "509-547-8384", address: "Tri-Cities service area",
      website: "https://www.salvationarmy.org/",
      hours: "Call for program hours",
      about: "Emergency assistance, seasonal help, and referrals. Availability varies by funding.",
      priority: "med" },
    { id: "habitat", name: "Habitat for Humanity Tri-Cities", city: "Kennewick", type: "Homeownership",
      phone: "509-586-1234", address: "Tri-Cities",
      website: "https://www.habitat-tcp.org/",
      hours: "Business hours — call",
      about: "Affordable homeownership pathway for income-eligible families. Application cycles and sweat-equity requirements apply.",
      priority: "med" },
    { id: "worksource-h", name: "WorkSource Columbia Basin (housing-adjacent supports)", city: "Kennewick", type: "Support",
      phone: "509-734-5900", address: "Kennewick / regional",
      website: "https://www.worksourcewa.com/",
      hours: "Typical business hours",
      about: "Employment services that often pair with stability goals. Not a housing authority; useful for income plans.",
      priority: "low" },
    { id: "211", name: "Washington 211", city: "Statewide", type: "Referral",
      phone: "211", address: "Phone / web",
      website: "https://wa211.org/",
      hours: "24/7",
      about: "Statewide health & human services referral line. Dial 2-1-1 or 1-877-211-9274.",
      priority: "high" },
    { id: "liheap", name: "LIHEAP / energy help via CAC", city: "Pasco", type: "Utilities",
      phone: "509-545-4042", address: "720 W Court St, Pasco",
      website: "https://www.bfcac.org/",
      hours: "Mon–Fri (see CAC hours)",
      about: "Low-income home energy assistance. Seasonal application windows — call CAC.",
      priority: "med" },
    { id: "senior", name: "Aging & Long Term Care of Eastern WA (senior housing resources)", city: "Regional", type: "Senior",
      phone: "509-458-2509", address: "Regional",
      website: "https://www.altcew.org/",
      hours: "Business hours",
      about: "Information and assistance for older adults, including housing options and supports.",
      priority: "low" }
  ];

  const JOBS = [
    { id: "bentonpud", name: "Benton PUD", city: "Kennewick",
      phone: "509-582-2175", website: "https://www.bentonpud.org/",
      about: "Public utility district — customer service, line work, engineering, admin.",
      how: ["Check Careers on bentonpud.org", "Note CDL / apprenticeship postings", "Bring proof of eligibility to work"],
      priority: "high" },
    { id: "pnnl", name: "Pacific Northwest National Laboratory (PNNL)", city: "Richland",
      website: "https://www.pnnl.gov/careers",
      about: "DOE national lab — science, engineering, IT, facilities, admin. Badge & background checks typical.",
      how: ["Create account on PNNL careers portal", "Filter by entry / facilities / admin if applicable", "Be ready for security requirements"],
      priority: "high" },
    { id: "bft", name: "Ben Franklin Transit", city: "Richland",
      phone: "509-735-5100", website: "https://www.bft.org/",
      about: "Regional transit — operators, maintenance, customer service.",
      how: ["Review Careers / employment page on bft.org", "CDL often required for operator roles", "Ask about training pathways"],
      priority: "high" },
    { id: "enw", name: "Energy Northwest", city: "Richland",
      website: "https://www.energy-northwest.com/",
      about: "Nuclear & energy services — skilled trades, operations, professional roles.",
      how: ["Use Energy Northwest careers portal", "Note union and clearance notes on postings"],
      priority: "high" },
    { id: "hanford", name: "Hanford / DOE site employers (e.g. CPCCo, HMIS)", city: "Richland",
      website: "https://www.hanford.gov/",
      about: "Cleanup & site support contractors. Badging, drug screens, and site access rules are common.",
      how: ["Search current prime contractor career pages", "Track badge / training requirements", "Attend job fairs when announced"],
      priority: "high" },
    { id: "kadlec", name: "Kadlec / Providence", city: "Richland",
      website: "https://www.providence.org/careers",
      about: "Hospital & health system — clinical and non-clinical roles.",
      how: ["Apply via Providence careers", "Certifications required for many clinical posts"],
      priority: "med" },
    { id: "worksource", name: "WorkSource Columbia Basin", city: "Kennewick",
      phone: "509-734-5900", website: "https://www.worksourcewa.com/",
      about: "Free job search help, workshops, WIOA programs, resume support.",
      how: ["Register / update WorkSourceWA profile", "Ask about hiring events", "Request career counseling"],
      priority: "high" },
    { id: "city-ken", name: "City of Kennewick", city: "Kennewick",
      website: "https://www.go2kennewick.com/",
      about: "Municipal jobs — public works, parks, admin, public safety support roles.",
      how: ["Check city employment / HR page", "Watch civil service postings"],
      priority: "med" },
    { id: "city-rich", name: "City of Richland", city: "Richland",
      website: "https://www.ci.richland.wa.us/",
      about: "City employment opportunities across departments.",
      how: ["Use city jobs portal", "Note residency or certification prefs"],
      priority: "med" },
    { id: "city-pasco", name: "City of Pasco", city: "Pasco",
      website: "https://www.pasco-wa.gov/",
      about: "City of Pasco careers — various city services.",
      how: ["Check Pasco employment listings", "Prepare standard application materials"],
      priority: "med" },
    { id: "benton-co", name: "Benton County", city: "Prosser / Kennewick",
      website: "https://www.co.benton.wa.us/",
      about: "County government openings.",
      how: ["Search Benton County jobs", "Read job class specs carefully"],
      priority: "med" },
    { id: "franklin-co", name: "Franklin County", city: "Pasco",
      website: "https://www.franklincountywa.gov/",
      about: "County government openings.",
      how: ["Search Franklin County employment", "Note exam or background steps"],
      priority: "med" }
  ];

  const CHECKS = [
    { id: "c-id", group: "Documents", label: "Government photo ID (driver license or state ID)" },
    { id: "c-ssn", group: "Documents", label: "Social Security card or number ready" },
    { id: "c-bc", group: "Documents", label: "Birth certificates for household members" },
    { id: "c-addr", group: "Documents", label: "Proof of current / last address (mail, lease, or letter)" },
    { id: "c-inc", group: "Income", label: "Zero-income statement prepared (if applicable)" },
    { id: "c-pay", group: "Income", label: "Pay stubs or benefit letters (if any income)" },
    { id: "c-bank", group: "Income", label: "Bank statements (if requested)" },
    { id: "c-tax", group: "Income", label: "Last tax return or W-2 (if available)" },
    { id: "c-exp", group: "Housing", label: "Eviction / notice paperwork (if any)" },
    { id: "c-hh", group: "Housing", label: "List of everyone who will live with you" },
    { id: "c-ref", group: "Housing", label: "Landlord or personal references" },
    { id: "c-vet", group: "Housing", label: "Veteran status docs (DD-214) if applicable" },
    { id: "c-resume", group: "Jobs", label: "Updated resume" },
    { id: "c-refs-j", group: "Jobs", label: "Job references list" },
    { id: "c-worksrc", group: "Jobs", label: "WorkSourceWA account created" },
    { id: "c-phone", group: "Jobs", label: "Reliable phone number & voicemail set up" }
  ];

  const H_STATUS = ["Not started", "Researching", "Applied", "Waitlisted", "Interview / appt", "Active help", "Closed"];
  const J_STATUS = ["Not started", "Researching", "Applied", "Interview", "Offer", "Closed"];
  const SITUATIONS = ["", "Looking for housing", "At risk of homelessness", "Experiencing homelessness", "Housed — seeking better option", "Other"];
  const CITIES = ["", "Kennewick", "Pasco", "Richland", "West Richland", "Prosser", "Other Benton/Franklin", "Outside area"];

  const STORE_KEY = "tc-housing-career-v1";
  const THEME_KEY = "tc-theme";

  /* ========== State ========== */
  function defaultState() {
    return {
      profile: { name: "", phone: "", email: "", city: "", situation: "", household: 1, income: "", zeroIncome: false, notes: "" },
      housing: {},
      jobs: {},
      checks: {},
      customHousing: [],
      customJobs: []
    };
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultState();
      const p = JSON.parse(raw);
      return { ...defaultState(), ...p, profile: { ...defaultState().profile, ...(p.profile || {}) } };
    } catch { return defaultState(); }
  }
  function saveState(s) {
    localStorage.setItem(STORE_KEY, JSON.stringify(s));
  }
  let state = loadState();
  let tab = "home";
  let hFilter = "all";
  let jFilter = "all";

  /* ========== Helpers ========== */
  function telHref(p) {
    if (!p) return "";
    const d = String(p).replace(/[^\d+]/g, "");
    return d ? "tel:" + d : "";
  }
  function fmtPhone(p) {
    if (!p) return "";
    const d = String(p).replace(/\D/g, "");
    if (d.length === 10) return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
    if (d === "211") return "2-1-1";
    return p;
  }
  function todayISO() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }
  function toast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2200);
  }
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      toast("Copied to clipboard");
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta);
      toast("Copied");
    }
  }
  function hTrack(id) {
    return state.housing[id] || { status: "Not started", followUp: "", notes: "" };
  }
  function jTrack(id) {
    return state.jobs[id] || { status: "Not started", followUp: "", notes: "" };
  }
  function allHousing() {
    return [...HOUSING, ...state.customHousing];
  }
  function allJobs() {
    return [...JOBS, ...state.customJobs];
  }
  function progress() {
    const checksDone = CHECKS.filter(c => state.checks[c.id]).length;
    const hDone = allHousing().filter(h => {
      const s = hTrack(h.id).status;
      return s !== "Not started" && s !== "Closed";
    }).length;
    const jPri = allJobs().filter(j => j.priority === "high");
    const jDone = jPri.filter(j => {
      const s = jTrack(j.id).status;
      return s !== "Not started" && s !== "Closed";
    }).length;
    return { checksDone, checksTotal: CHECKS.length, hDone, hTotal: allHousing().length, jDone, jTotal: jPri.length };
  }
  function greeting() {
    const h = new Date().getHours();
    const name = state.profile.name?.trim();
    const hi = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
    return name ? `${hi}, ${name.split(" ")[0]}.` : `${hi}.`;
  }
  function nextActions() {
    const acts = [];
    const p = state.profile;
    if (!p.name) acts.push({ t: "Add your name in Profile", tab: "profile" });
    if (!p.phone) acts.push({ t: "Add a phone number so agencies can reach you", tab: "profile" });
    if (!p.situation) acts.push({ t: "Set your housing situation in Profile", tab: "profile" });
    if (!p.city) acts.push({ t: "Select your city in Profile", tab: "profile" });
    if (p.zeroIncome && !state.checks["c-inc"]) acts.push({ t: "Generate & save your Zero-Income Statement", tab: "statement" });
    const due = [];
    allHousing().forEach(h => {
      const tr = hTrack(h.id);
      if (tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed")
        due.push({ t: `Follow up: ${h.name}`, tab: "housing", id: h.id });
    });
    allJobs().forEach(j => {
      const tr = jTrack(j.id);
      if (tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed")
        due.push({ t: `Job follow-up: ${j.name}`, tab: "jobs", id: j.id });
    });
    acts.push(...due.slice(0, 4));
    if (!state.checks["c-worksrc"]) acts.push({ t: "Create / update WorkSourceWA account", tab: "jobs", id: "worksource" });
    const openH = allHousing().filter(h => h.priority === "high" && hTrack(h.id).status === "Not started");
    openH.slice(0, 2).forEach(h => acts.push({ t: `Start: ${h.name}`, tab: "housing", id: h.id }));
    const openJ = allJobs().filter(j => j.priority === "high" && jTrack(j.id).status === "Not started");
    openJ.slice(0, 2).forEach(j => acts.push({ t: `Research: ${j.name}`, tab: "jobs", id: j.id }));
    if (!state.checks["c-id"]) acts.push({ t: "Gather government photo ID", tab: "checklist" });
    const seen = new Set();
    return acts.filter(a => { if (seen.has(a.t)) return false; seen.add(a.t); return true; }).slice(0, 8);
  }
  function statementText() {
    const p = state.profile;
    const name = p.name || "[Your full legal name]";
    const city = p.city || "[City]";
    const hh = p.household || 1;
    const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    return `ZERO-INCOME STATEMENT

Date: ${date}

I, ${name}, currently residing in or near ${city}, Washington, state the following:

1. I am applying for housing and/or related assistance in Benton and/or Franklin County, Washington.

2. Household size: ${hh} person(s).

3. At this time, I have no income from employment, self-employment, unemployment benefits, Social Security, SSI, SSDI, TANF, child support, pensions, or any other regular source of income.

4. ${p.notes ? "Additional information: " + p.notes : "I will notify the housing agency promptly if my income situation changes."}

5. I understand that providing false information may result in denial of assistance and other consequences under applicable law.

I certify that the information in this statement is true and complete to the best of my knowledge.

Signature: _______________________________     Date: _______________

Printed name: ${name}

Phone: ${p.phone || "________________"}

Email: ${p.email || "________________"}

---
Disclaimer: This is a personal worksheet template, not legal advice. Agencies may require their own forms. Call to confirm what they accept.`;
  }
  function tasksText() {
    const lines = ["Tri-Cities Housing & Career — Task List", ""];
    nextActions().forEach((a, i) => lines.push(`${i + 1}. ${a.t}`));
    lines.push("");
    lines.push("Checklist remaining:");
    CHECKS.filter(c => !state.checks[c.id]).forEach(c => lines.push(`- [ ] ${c.label}`));
    lines.push("");
    lines.push("Priority housing to contact:");
    allHousing().filter(h => h.priority === "high").forEach(h => {
      const tr = hTrack(h.id);
      lines.push(`- ${h.name} (${tr.status}) ${h.phone ? "tel " + h.phone : ""}`);
    });
    lines.push("");
    lines.push("Priority employers:");
    allJobs().filter(j => j.priority === "high").forEach(j => {
      lines.push(`- ${j.name} (${jTrack(j.id).status})`);
    });
    return lines.join("\n");
  }
  function dueCount() {
    let n = 0;
    allHousing().forEach(h => {
      const tr = hTrack(h.id);
      if (tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed") n++;
    });
    allJobs().forEach(j => {
      const tr = jTrack(j.id);
      if (tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed") n++;
    });
    return n;
  }

  /* ========== Theme ========== */
  function applyTheme() {
    const t = localStorage.getItem(THEME_KEY) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", t === "dark");
    document.querySelector('meta[name="theme-color"]').content = t === "dark" ? "#0f1614" : "#1c6b62";
  }
  function toggleTheme() {
    const dark = !document.documentElement.classList.contains("dark");
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    applyTheme();
  }

  /* ========== Render ========== */
  function setTab(t, focusId) {
    tab = t;
    render(focusId);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    if (focusId) {
      requestAnimationFrame(() => {
        const el = document.getElementById("item-" + focusId);
        if (el) { el.open = true; el.scrollIntoView({ behavior: "smooth", block: "start" }); }
      });
    }
  }

  function renderNav() {
    const items = [
      { id: "home", label: "Home", icon: "M3 10.5 L12 3 L21 10.5 V21 H14 V14 H10 V21 H3 Z" },
      { id: "housing", label: "Housing", icon: "M4 12 L12 4 L20 12 V20 H4 Z" },
      { id: "jobs", label: "Jobs", icon: "M4 7 H20 V19 H4 Z M8 7 V5 H16 V7" },
      { id: "checklist", label: "List", icon: "M5 6 H19 M5 12 H19 M5 18 H13" },
      { id: "profile", label: "Profile", icon: "M12 12 a4 4 0 1 0 0-8 a4 4 0 0 0 0 8 M4 20 a8 8 0 0 1 16 0" }
    ];
    const due = dueCount();
    document.getElementById("nav").innerHTML = items.map(i => `
      <button type="button" class="${tab === i.id || (tab === "statement" && i.id === "profile") ? "active" : ""}" data-tab="${i.id}">
        ${due && i.id === "home" ? '<span class="dot"></span>' : ""}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="${i.icon}"/></svg>
        ${i.label}
      </button>
    `).join("");
    document.querySelectorAll("#nav button").forEach(b => b.onclick = () => setTab(b.dataset.tab));
  }

  function renderHome() {
    const pr = progress();
    const acts = nextActions();
    const dials = [
      { name: "CAC / Coordinated Entry", phone: "509-545-4042" },
      { name: "Kennewick HA", phone: "509-586-8576" },
      { name: "Pasco HA", phone: "509-547-3581" },
      { name: "211", phone: "211" },
      { name: "DV Crisis Line", phone: "509-582-9841" },
      { name: "WorkSource", phone: "509-734-5900" }
    ];
    return `
      <div class="card">
        <h2>${greeting()}</h2>
        <p class="muted">Track housing applications, job leads, and documents for the Tri-Cities. Data stays on this device.</p>
        <div class="stats" style="margin-top:12px">
          <div class="stat"><div class="n">${pr.hDone}/${pr.hTotal}</div><div class="l">Housing</div></div>
          <div class="stat"><div class="n">${pr.jDone}/${pr.jTotal}</div><div class="l">Priority jobs</div></div>
          <div class="stat"><div class="n">${pr.checksDone}/${pr.checksTotal}</div><div class="l">Checklist</div></div>
        </div>
      </div>
      <div class="card">
        <div class="between"><h2>Next actions</h2>
          <button class="btn sm secondary" type="button" id="copyTasks">Copy tasks</button>
        </div>
        ${acts.length ? `<ol class="actions-list">${acts.map(a =>
          `<li><a href="#" data-goto="${a.tab}" data-id="${a.id || ""}">${a.t}</a></li>`).join("")}</ol>`
          : `<p class="muted">You're caught up — keep checking waitlists and job boards weekly.</p>`}
      </div>
      <div class="card">
        <h2>Quick dial</h2>
        <div class="list">
          ${dials.map(d => `
            <div class="between item" style="padding:10px 12px">
              <span style="font-size:.9rem;font-weight:600">${d.name}</span>
              <a class="btn sm" href="${telHref(d.phone)}">${fmtPhone(d.phone)}</a>
            </div>`).join("")}
        </div>
      </div>
      <div class="card">
        <h2>Tools</h2>
        <div class="row" style="margin-top:4px">
          <button class="btn secondary" type="button" data-goto="statement">Zero-Income Statement</button>
          <button class="btn secondary" type="button" id="exportBtn">Export backup</button>
          <button class="btn ghost" type="button" id="importBtn">Import</button>
        </div>
        <input type="file" id="importFile" accept="application/json,.json" hidden />
        <p class="muted" style="margin-top:10px">Numbers and programs change. Always call to confirm hours, waitlists, and requirements.</p>
      </div>`;
  }

  function renderHousing() {
    let list = allHousing();
    if (hFilter === "high") list = list.filter(h => h.priority === "high");
    if (hFilter === "active") list = list.filter(h => { const s = hTrack(h.id).status; return s !== "Not started" && s !== "Closed"; });
    if (hFilter === "due") list = list.filter(h => { const tr = hTrack(h.id); return tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed"; });
    return `
      <div class="card">
        <h2>Housing tracker</h2>
        <p class="muted">Pre-loaded Tri-Cities agencies & programs. Update status and follow-up dates as you go.</p>
        <div class="filters">
          ${[["all","All"],["high","Priority"],["active","In progress"],["due","Due"]].map(([k,l]) =>
            `<button type="button" class="${hFilter===k?"on":""}" data-hf="${k}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="list">
        ${list.map(h => {
          const tr = hTrack(h.id);
          const due = tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed";
          return `
          <details class="item ${due ? "due" : ""}" id="item-${h.id}">
            <summary>
              <div class="between">
                <div>
                  <div style="font-weight:700">${h.name}</div>
                  <div class="muted" style="font-size:.8rem">${h.city} · ${h.type}</div>
                </div>
                <span class="chip ${tr.status==="Not started"?"":tr.status==="Closed"?"warn":"ok"}">${tr.status}</span>
              </div>
            </summary>
            <div class="body">
              <p style="margin:0 0 8px;font-size:.9rem">${h.about || ""}</p>
              ${h.hours ? `<p class="muted" style="margin:0 0 8px">Hours: ${h.hours}</p>` : ""}
              ${h.address ? `<p class="muted" style="margin:0 0 8px">${h.address}</p>` : ""}
              <div class="row" style="margin-bottom:10px">
                ${h.phone ? `<a class="btn sm" href="${telHref(h.phone)}">Call ${fmtPhone(h.phone)}</a>` : ""}
                ${h.website ? `<a class="btn sm secondary" href="${h.website}" target="_blank" rel="noopener">Website</a>` : ""}
                ${h.email ? `<a class="btn sm ghost" href="mailto:${h.email}">Email</a>` : ""}
              </div>
              <label class="field"><span>Status</span>
                <select data-h-status="${h.id}">${H_STATUS.map(s => `<option ${s===tr.status?"selected":""}>${s}</option>`).join("")}</select>
              </label>
              <label class="field"><span>Follow-up date</span>
                <input type="date" data-h-follow="${h.id}" value="${tr.followUp || ""}" />
              </label>
              <label class="field"><span>Notes</span>
                <textarea data-h-notes="${h.id}" rows="2">${tr.notes || ""}</textarea>
              </label>
              ${h.custom ? `<button class="btn sm danger" type="button" data-del-h="${h.id}">Remove custom</button>` : ""}
            </div>
          </details>`;
        }).join("") || `<div class="empty">No items match this filter.</div>`}
      </div>
      <div class="card">
        <h3>Add custom contact</h3>
        <label class="field"><span>Name</span><input type="text" id="chName" placeholder="Property or agency" /></label>
        <label class="field"><span>Phone</span><input type="tel" id="chPhone" placeholder="509-555-0100" /></label>
        <label class="field"><span>City</span><input type="text" id="chCity" placeholder="Kennewick" /></label>
        <label class="field"><span>Notes</span><textarea id="chAbout" rows="2"></textarea></label>
        <button class="btn block" type="button" id="addHousing">Add to tracker</button>
      </div>`;
  }

  function renderJobs() {
    let list = allJobs();
    if (jFilter === "high") list = list.filter(j => j.priority === "high");
    if (jFilter === "active") list = list.filter(j => { const s = jTrack(j.id).status; return s !== "Not started" && s !== "Closed"; });
    if (jFilter === "due") list = list.filter(j => { const tr = jTrack(j.id); return tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed"; });
    return `
      <div class="card">
        <h2>Job applications</h2>
        <p class="muted">Tri-Cities employers & WorkSource. Update status as you apply.</p>
        <div class="filters">
          ${[["all","All"],["high","Priority"],["active","In progress"],["due","Due"]].map(([k,l]) =>
            `<button type="button" class="${jFilter===k?"on":""}" data-jf="${k}">${l}</button>`).join("")}
        </div>
      </div>
      <div class="list">
        ${list.map(j => {
          const tr = jTrack(j.id);
          const due = tr.followUp && tr.followUp <= todayISO() && tr.status !== "Closed";
          return `
          <details class="item ${due ? "due" : ""}" id="item-${j.id}">
            <summary>
              <div class="between">
                <div>
                  <div style="font-weight:700">${j.name}</div>
                  <div class="muted" style="font-size:.8rem">${j.city}${j.priority==="high"?" · Priority":""}</div>
                </div>
                <span class="chip ${tr.status==="Not started"?"":tr.status==="Closed"?"warn":"ok"}">${tr.status}</span>
              </div>
            </summary>
            <div class="body">
              <p style="margin:0 0 8px;font-size:.9rem">${j.about || ""}</p>
              ${j.how && j.how.length ? `<ul style="margin:0 0 10px;padding-left:18px;font-size:.88rem">${j.how.map(x=>`<li>${x}</li>`).join("")}</ul>` : ""}
              <div class="row" style="margin-bottom:10px">
                ${j.phone ? `<a class="btn sm" href="${telHref(j.phone)}">Call ${fmtPhone(j.phone)}</a>` : ""}
                ${j.website ? `<a class="btn sm secondary" href="${j.website}" target="_blank" rel="noopener">Careers / site</a>` : ""}
              </div>
              <label class="field"><span>Status</span>
                <select data-j-status="${j.id}">${J_STATUS.map(s => `<option ${s===tr.status?"selected":""}>${s}</option>`).join("")}</select>
              </label>
              <label class="field"><span>Follow-up date</span>
                <input type="date" data-j-follow="${j.id}" value="${tr.followUp || ""}" />
              </label>
              <label class="field"><span>Notes</span>
                <textarea data-j-notes="${j.id}" rows="2">${tr.notes || ""}</textarea>
              </label>
              ${j.custom ? `<button class="btn sm danger" type="button" data-del-j="${j.id}">Remove custom</button>` : ""}
            </div>
          </details>`;
        }).join("") || `<div class="empty">No items match this filter.</div>`}
      </div>
      <div class="card">
        <h3>Add custom employer</h3>
        <label class="field"><span>Name</span><input type="text" id="cjName" /></label>
        <label class="field"><span>Phone</span><input type="tel" id="cjPhone" /></label>
        <label class="field"><span>Website</span><input type="text" id="cjWeb" placeholder="https://" /></label>
        <label class="field"><span>Notes</span><textarea id="cjAbout" rows="2"></textarea></label>
        <button class="btn block" type="button" id="addJob">Add to tracker</button>
      </div>`;
  }

  function renderChecklist() {
    const groups = [...new Set(CHECKS.map(c => c.group))];
    return `
      <div class="card">
        <h2>Document checklist</h2>
        <p class="muted">Tap items as you gather them. Progress saves on this device.</p>
      </div>
      ${groups.map(g => `
        <div class="card">
          <div class="group-title">${g}</div>
          ${CHECKS.filter(c => c.group === g).map(c => `
            <label class="check-row ${state.checks[c.id] ? "done" : ""}">
              <input type="checkbox" data-check="${c.id}" ${state.checks[c.id] ? "checked" : ""} />
              <span>${c.label}</span>
            </label>`).join("")}
        </div>`).join("")}`;
  }

  function renderProfile() {
    const p = state.profile;
    return `
      <div class="card">
        <h2>Your profile</h2>
        <p class="muted">Used for next actions and the zero-income statement. Stored only on this device.</p>
        <label class="field"><span>Full name</span><input type="text" id="pName" value="${esc(p.name)}" autocomplete="name" /></label>
        <label class="field"><span>Phone</span><input type="tel" id="pPhone" value="${esc(p.phone)}" autocomplete="tel" /></label>
        <label class="field"><span>Email</span><input type="email" id="pEmail" value="${esc(p.email)}" autocomplete="email" /></label>
        <label class="field"><span>City</span>
          <select id="pCity">${CITIES.map(c => `<option value="${c}" ${c===p.city?"selected":""}>${c || "Select…"}</option>`).join("")}</select>
        </label>
        <label class="field"><span>Housing situation</span>
          <select id="pSit">${SITUATIONS.map(c => `<option value="${c}" ${c===p.situation?"selected":""}>${c || "Select…"}</option>`).join("")}</select>
        </label>
        <label class="field"><span>Household size</span><input type="number" id="pHH" min="1" max="20" value="${p.household || 1}" /></label>
        <label class="field"><span>Income notes</span><textarea id="pIncome" rows="2">${esc(p.income)}</textarea></label>
        <label class="check-row" style="border:none;padding:4px 0 12px">
          <input type="checkbox" id="pZero" ${p.zeroIncome ? "checked" : ""} />
          <span>I currently have zero income</span>
        </label>
        <label class="field"><span>Other notes</span><textarea id="pNotes" rows="2">${esc(p.notes)}</textarea></label>
        <button class="btn block" type="button" id="saveProfile">Save profile</button>
      </div>
      <div class="card">
        <h3>Zero-Income Statement</h3>
        <p class="muted">Generate a printable / copyable worksheet from your profile.</p>
        <button class="btn secondary block" type="button" data-goto="statement">Open generator</button>
      </div>
      <div class="card">
        <h3>Data</h3>
        <div class="row">
          <button class="btn secondary" type="button" id="exportBtn2">Export JSON</button>
          <button class="btn danger" type="button" id="eraseBtn">Erase all data</button>
        </div>
      </div>`;
  }

  function renderStatement() {
    const text = statementText();
    return `
      <div class="card no-print">
        <h2>Zero-Income Statement</h2>
        <div class="warning">Agencies may require their own form or a notarized statement. This is a personal worksheet only — not legal advice. Confirm requirements by phone.</div>
        <div class="row">
          <button class="btn" type="button" id="copyStmt">Copy text</button>
          <button class="btn secondary" type="button" id="printStmt">Print</button>
          <button class="btn ghost" type="button" data-goto="profile">Edit profile</button>
        </div>
      </div>
      <div class="card">
        <div class="statement" id="stmtBox">${esc(text)}</div>
      </div>`;
  }

  function esc(s) {
    return String(s ?? "").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function render(focusId) {
    const app = document.getElementById("app");
    const map = { home: renderHome, housing: renderHousing, jobs: renderJobs, checklist: renderChecklist, profile: renderProfile, statement: renderStatement };
    app.innerHTML = (map[tab] || renderHome)();
    renderNav();
    bind(focusId);
  }

  function bind(focusId) {
    document.querySelectorAll("[data-goto]").forEach(el => {
      el.addEventListener("click", e => { e.preventDefault(); setTab(el.getAttribute("data-goto"), el.getAttribute("data-id") || undefined); });
    });
    document.querySelectorAll("[data-hf]").forEach(b => b.onclick = () => { hFilter = b.dataset.hf; render(); });
    document.querySelectorAll("[data-jf]").forEach(b => b.onclick = () => { jFilter = b.dataset.jf; render(); });

    document.querySelectorAll("[data-h-status]").forEach(el => {
      el.onchange = () => { const id = el.dataset.hStatus; state.housing[id] = { ...hTrack(id), status: el.value }; saveState(state); render(); };
    });
    document.querySelectorAll("[data-h-follow]").forEach(el => {
      el.onchange = () => { const id = el.dataset.hFollow; state.housing[id] = { ...hTrack(id), followUp: el.value }; saveState(state); };
    });
    document.querySelectorAll("[data-h-notes]").forEach(el => {
      el.onchange = () => { const id = el.dataset.hNotes; state.housing[id] = { ...hTrack(id), notes: el.value }; saveState(state); };
    });
    document.querySelectorAll("[data-j-status]").forEach(el => {
      el.onchange = () => { const id = el.dataset.jStatus; state.jobs[id] = { ...jTrack(id), status: el.value }; saveState(state); render(); };
    });
    document.querySelectorAll("[data-j-follow]").forEach(el => {
      el.onchange = () => { const id = el.dataset.jFollow; state.jobs[id] = { ...jTrack(id), followUp: el.value }; saveState(state); };
    });
    document.querySelectorAll("[data-j-notes]").forEach(el => {
      el.onchange = () => { const id = el.dataset.jNotes; state.jobs[id] = { ...jTrack(id), notes: el.value }; saveState(state); };
    });
    document.querySelectorAll("[data-check]").forEach(el => {
      el.onchange = () => { state.checks[el.dataset.check] = el.checked; saveState(state); render(); };
    });
    document.querySelectorAll("[data-del-h]").forEach(el => {
      el.onclick = () => {
        state.customHousing = state.customHousing.filter(x => x.id !== el.dataset.delH);
        delete state.housing[el.dataset.delH];
        saveState(state); render();
      };
    });
    document.querySelectorAll("[data-del-j]").forEach(el => {
      el.onclick = () => {
        state.customJobs = state.customJobs.filter(x => x.id !== el.dataset.delJ);
        delete state.jobs[el.dataset.delJ];
        saveState(state); render();
      };
    });

    const addH = document.getElementById("addHousing");
    if (addH) addH.onclick = () => {
      const name = document.getElementById("chName").value.trim();
      if (!name) return toast("Enter a name");
      const id = "custom-h-" + Date.now();
      state.customHousing.push({
        id, name, phone: document.getElementById("chPhone").value.trim(),
        city: document.getElementById("chCity").value.trim() || "Tri-Cities",
        type: "Custom", about: document.getElementById("chAbout").value.trim(),
        priority: "med", custom: true
      });
      saveState(state); toast("Added"); render();
    };
    const addJ = document.getElementById("addJob");
    if (addJ) addJ.onclick = () => {
      const name = document.getElementById("cjName").value.trim();
      if (!name) return toast("Enter a name");
      const id = "custom-j-" + Date.now();
      state.customJobs.push({
        id, name, phone: document.getElementById("cjPhone").value.trim(),
        website: document.getElementById("cjWeb").value.trim(),
        city: "Tri-Cities", about: document.getElementById("cjAbout").value.trim(),
        priority: "med", custom: true
      });
      saveState(state); toast("Added"); render();
    };

    const saveP = document.getElementById("saveProfile");
    if (saveP) saveP.onclick = () => {
      state.profile = {
        name: document.getElementById("pName").value.trim(),
        phone: document.getElementById("pPhone").value.trim(),
        email: document.getElementById("pEmail").value.trim(),
        city: document.getElementById("pCity").value,
        situation: document.getElementById("pSit").value,
        household: Number(document.getElementById("pHH").value) || 1,
        income: document.getElementById("pIncome").value.trim(),
        zeroIncome: document.getElementById("pZero").checked,
        notes: document.getElementById("pNotes").value.trim()
      };
      saveState(state); toast("Profile saved");
    };

    const copyTasks = document.getElementById("copyTasks");
    if (copyTasks) copyTasks.onclick = () => copyText(tasksText());
    const copyStmt = document.getElementById("copyStmt");
    if (copyStmt) copyStmt.onclick = () => copyText(statementText());
    const printStmt = document.getElementById("printStmt");
    if (printStmt) printStmt.onclick = () => window.print();

    function doExport() {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "tri-cities-assistant-backup.json";
      a.click();
      toast("Backup downloaded");
    }
    document.getElementById("exportBtn")?.addEventListener("click", doExport);
    document.getElementById("exportBtn2")?.addEventListener("click", doExport);

    const importBtn = document.getElementById("importBtn");
    const importFile = document.getElementById("importFile");
    if (importBtn && importFile) {
      importBtn.onclick = () => importFile.click();
      importFile.onchange = () => {
        const f = importFile.files?.[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = () => {
          try {
            const data = JSON.parse(r.result);
            state = { ...defaultState(), ...data, profile: { ...defaultState().profile, ...(data.profile || {}) } };
            saveState(state); toast("Imported"); render();
          } catch { toast("Invalid file"); }
        };
        r.readAsText(f);
      };
    }
    document.getElementById("eraseBtn")?.addEventListener("click", () => {
      if (confirm("Erase all saved data on this device?")) {
        state = defaultState();
        saveState(state);
        toast("Data erased");
        render();
      }
    });

    if (focusId) {
      const el = document.getElementById("item-" + focusId);
      if (el) el.open = true;
    }
  }

  /* ========== Boot ========== */
  applyTheme();
  document.getElementById("themeBtn").onclick = toggleTheme;
  render();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
