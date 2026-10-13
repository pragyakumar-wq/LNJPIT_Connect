# LNJPIT 1st Semester Timetable — PWA

This folder is a ready-to-deploy Progressive Web App for the LNJPIT 1st Semester July–December 2026 revised timetable.

## Included
- `index.html` — complete timetable app
- `manifest.webmanifest` — installable PWA configuration
- `sw.js` — offline caching and Firebase Messaging service worker
- `firebase-messaging-sw.js` — compatibility entry point that loads the unified worker
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

## Firebase notifications

1. In Firebase Console, open **Project settings → Cloud Messaging → Web Push certificates**.
2. Generate a key pair only if there is no existing one, then copy the **public VAPID key**.
3. In `index.html`, set `VAPID_PUBLIC_KEY` to that public key. Do not use a private key, service-account JSON, or legacy server key in this repository.
4. Deploy the site on HTTPS (GitHub Pages works), open the deployed URL, and tap **Enable notifications**.
5. Tap **Copy FCM token**, then use that token in Firebase Console → Messaging → **Send test message**. Do not publish the token in an issue, screenshot, or Git commit.

The app requests notification permission only from the button click. It receives foreground FCM messages in the page and background data messages through the unified service worker. The token flow is included specifically for Firebase Console testing; production sending should use a trusted backend, not browser code.

## Class reminders

While the app/page is running, it can show a reminder 5 minutes before the selected branch's class.

**Important:** A static GitHub Pages site cannot reliably send a scheduled push notification when the app is completely closed. Firebase Messaging enables delivery, but a trusted backend scheduler (for example, Cloud Functions/Run plus Cloud Scheduler) must still calculate and send each 5-minute reminder. This package does not pretend otherwise.

## Branding
The included icon is an **LNJPIT-style app icon**, not an official institute logo. Replace it with the official logo only if you have permission/right to use it.
