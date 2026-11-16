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

  