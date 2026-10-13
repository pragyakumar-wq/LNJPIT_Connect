# LNJPIT 1st Semester Timetable — PWA

This folder is a ready-to-deploy Progressive Web App for the LNJPIT 1st Semester July–December 2026 revised timetable.

## Included
- `index.html` — complete timetable app
- `manifest.webmanifest` — installable PWA configuration
- `sw.js` — offline caching/service worker
- `icons/` — LNJPIT-style app icons

## Deploy free with GitHub Pages
1. Create a **Public** repository on GitHub.
2. Upload **all files and the `icons` folder** from this package.
3. Make sure `index.html` is in the repository root.
4. Open **Settings → Pages**.
5. Under Build and deployment choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then Save.
7. GitHub will give you an HTTPS URL like:
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`
8. Open that URL in Chrome. HTTPS enables the normal browser notification permission flow and PWA installation.

## Install on Android
Open the HTTPS website in Chrome → menu `⋮` → **Install app** / **Add to Home screen**.

## Notifications
The app requests browser notification permission when you enable reminders. While the app/page is running, it can show a reminder 5 minutes before the selected branch's class.

**Important:** A static GitHub Pages site cannot reliably send a scheduled push notification when the app is completely closed. True background push notifications require a Web Push backend (VAPID) or a service such as Firebase Cloud Messaging. This package does not pretend otherwise.

## Branding
The included icon is an **LNJPIT-style app icon**, not an official institute logo. Replace it with the official logo only if you have permission/right to use it.
