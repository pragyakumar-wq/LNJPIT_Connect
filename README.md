# LNJPIT Connect

A mobile-first student companion for LNJPIT Chapra. The interface follows the supplied dark navy and blue reference with a fixed bottom navigation bar.

## Screens

- **Home:** quick access to Timetable, Study Notes, Notices, Lost & Found, Community and More, plus the live timetable overview.
- **Schedule:** the existing live IST class tracker, branch and lab-batch filters, search, day agenda, weekly grid, reminders and course reference.
- **Study Notes:** subject cards link to the existing B.Tech Semester 1 study website; search and branch filters work locally.
- **Notices:** ready-to-fill notice screen. It shows an empty state until official notices are connected.
- **Lost & Found / Community:** navigation-ready pages marked **Coming Soon**.
- **Profile:** theme and install controls plus the existing attendance tracker, which stores records in this browser.

## Open in VS Code

1. Extract `LNJPIT_Connect_APP_Enhanced.zip`.
2. Open the extracted folder in VS Code.
3. Open `index.html` in a browser, or serve the folder over localhost for PWA and notification features.

The timetable, filters, theme selection, screen navigation, and attendance tracker run in the browser. The study cards open the existing external study site. Web push notifications require the configured Firebase project and HTTPS hosting.

## Files

- `index.html` — app screens, styles, timetable data and client-side behavior
- `manifest.webmanifest`, `sw.js`, `firebase-messaging-sw.js` — install and offline behavior
- `icons/` — LNJPIT app icons
- `functions/` — Firebase Cloud Functions for scheduled class reminders

Built for LNJPIT students.
