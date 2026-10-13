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

## Automatic class reminders

The project now includes a trusted Firebase backend in `functions/`:

- `registerReminderDevice` is a callable function. The PWA uses anonymous Firebase Authentication and sends the device's FCM token plus selected branch to this function; it never writes tokens directly to Firestore.
- `sendClassReminders` is a second-generation scheduled function in `asia-south1`. It runs each minute in `Asia/Kolkata`, detects classes beginning in roughly five minutes, sends data-only FCM pushes, removes invalid tokens, and uses Firestore idempotency records to prevent duplicate reminders.

The server stores only an anonymous Firebase UID, the FCM token, the selected branch index, and an update timestamp in the private `reminderDevices` collection. Keep that collection and `reminderLocks` inaccessible to browser clients in your Firestore rules; the Admin SDK used by Cloud Functions does not need client access.

### Deploying the backend

Scheduled Cloud Functions require the Firebase **Blaze** plan. Cloud Scheduler has a monthly charge after the three-job free allowance, and Cloud Functions/Firestore/FCM usage can also incur charges. No billing change is made by the source code alone.

After billing is enabled for `lnjpit-timetable`, deploy from the project root:

```powershell
cd functions
npm install
cd ..
firebase login
firebase deploy --only functions
```

Before deploying, verify that Anonymous authentication remains enabled. If Firebase Authentication requires it for your project, add `pragyakumar-wq.github.io` to Authentication → Settings → Authorized domains. The current client will continue to give in-page reminders until this backend is deployed; it registers for closed-app reminders automatically once the callable function is live.

## Branding
The included icon is an **LNJPIT-style app icon**, not an official institute logo. Replace it with the official logo only if you have permission/right to use it.
