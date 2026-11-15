# Tri-Cities Housing & Career Assistant

Mobile-first, offline-capable web app for tracking **housing applications**, **job leads**, and **documents** in Benton & Franklin Counties (Kennewick, Pasco, Richland, and nearby).

All data is stored in your browser’s **localStorage**. Nothing is sent to a server.

## Quick start (phone)

1. Download the full project zip (from the chat or clone after uploading all files).
2. Open **`index.html`** in Chrome or Samsung Internet.
3. Optional: **Add to Home screen** for an app-like icon.

The complete app is a single `index.html` (CSS + JS included). Supporting files (`sw.js`, `manifest.webmanifest`) enable offline/PWA behavior when served over HTTPS (e.g. GitHub Pages).

## Finish this repo (one-time)

Automated upload could not push the large `index.html` body in one step. To complete the repo:

1. Download the project zip from the chat message.
2. On GitHub: **Add file → Upload files**
3. Upload at least:
   - `index.html` (full single-file app)
   - `sw.js`
   - `manifest.webmanifest`
4. Commit to `main`.

Or locally:

```bash
git clone https://github.com/godand1809/tri-cities-housing-career.git
cd tri-cities-housing-career
# copy full index.html, sw.js, manifest from the zip over these files
git add .
git commit -m "Add full app"
git push
```

## Features

- **Dashboard** — progress stats, next actions, quick-dial contacts
- **Housing tracker** — Kennewick HA, Pasco HA, Coordinated Entry / CAC, shelters, utility help
- **Job tracker** — Benton PUD, PNNL, Ben Franklin Transit, Energy Northwest, Hanford-area employers, WorkSource, cities & counties
- **Checklist** — documents, income, housing, and job prep items
- **Profile** — name, contact, household, situation
- **Zero-Income Statement** — generate, copy, or print from your profile
- **Copy task list** — for Google Tasks or notes
- **Dark mode** — system preference + toggle
- **Offline** — service worker after first load
- **Import / export** — JSON backup

## GitHub Pages

1. **Settings → Pages**
2. Source: branch `main`, folder `/ (root)`
3. Open `https://godand1809.github.io/tri-cities-housing-career/`

## Disclaimer

Phone numbers, hours, and program status change. Always **call to confirm** waitlists, intake, and forms. This is a personal organizer, not legal advice or an official government service.

Crisis: **911** · **988** · **2-1-1** · DV crisis line listed in the app under Housing.

## License

MIT — see [LICENSE](LICENSE).
