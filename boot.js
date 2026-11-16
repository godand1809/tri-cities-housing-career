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
