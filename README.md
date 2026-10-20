# LNJPIT Connect

A mobile-first student companion for LNJPIT Chapra. The interface follows the supplied dark navy and blue reference with a fixed bottom navigation bar.

## ✨ Key Features
- **Real-Time IST Live Tracker**: Displays current and upcoming classes synced to Indian Standard Time (`Asia/Kolkata`) with live progress bars, remaining-time countdowns, and automatic Lunch Break (`1:00 PM – 2:00 PM`) detection.
- **Branch & Lab Batch Filtering**:
  - Covers all 7 branches/sections (`EEE`, `CSE-A`, `CSE-B`, `Civil`, `Mechanical`, `Mathematics & Computing`, `Food Processing & Preservation`).
  - Dedicated **Lab Batch Selector (`All`, `Batch G1 Only`, `Batch G2 Only`)** filters both the timetable views and notifications so students only see sessions relevant to their practical group.
- **Dual Views & Instant Search**:
  - **Weekly Grid View**: Full Monday–Saturday matrix with semantic color coding (`Lectures`, `Labs & Sports`, `Remedial`, `Activities`), group badges, and `● LIVE` highlights.
  - **Interactive Day Agenda View**: Single-day or 6-day vertical timeline cards with quick day-selector pills (`Mon`–`Sat`) and lunch break dividers.
  - **Quick Search & Category Filter Pills**: Filter by `Lectures`, `Labs & Sports`, `Remedial`, or search any subject code (`Math`, `Physics`, `PPS`, `IAI`, `EGD`, etc.).
- **Dark & Light Theme**: Automatic system theme detection with a manual Dark/Light mode toggle and print-ready layout (`🖨️ Print`).
- **Course Code Reference & Weekly Stats**: Built-in reference guide for 1st-semester course abbreviations (`IAI`, `PPS`, `CFET`, `BEEE`, `EGD`, `UHV`, `EIC`) and weekly contact-hour metrics.
- **Resilient Offline PWA & Push Notifications**:
  - Offline-safe unified Service Worker (`sw.js`) caches the app shell and assets.
  - Supports in-app 5-minute class reminders (with vibration & toast alerts) plus closed-app Firebase Cloud Messaging (FCM) push reminders via Firebase Cloud Functions (`functions/index.js`).

## 📁 Project Structure
- `index.html` & `public/index.html` — Complete responsive timetable application (kept identical for GitHub Pages root or Firebase Hosting `public/` deployment)
- `manifest.webmanifest` & `public/manifest.webmanifest` — Installable PWA configuration with maskable icons and app shortcuts
- `sw.js` & `public/sw.js` — Unified offline caching and Firebase Cloud Messaging service worker
- `firebase-messaging-sw.js` & `public/firebase-messaging-sw.js` — Compatibility entry point loading `sw.js`
- `404.html` & `public/404.html` — Custom themed 404 fallback page
- `icons/` & `public/icons/` — High-resolution anti-aliased `192x192` and `512x512` PWA icons
- `functions/` — Firebase Cloud Functions v2 backend (`registerReminderDevice`, `unregisterReminderDevice`, and scheduled `sendClassReminders`)


## 👤 Credits
Developed by **Pragya Kumar · MNC 18** · Lok Nayak Jai Prakash Institute of Technology (LNJPIT), Chapra, Bihar.
