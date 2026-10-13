// Compatibility entry point for Firebase's default worker discovery. The app
// explicitly passes the registration for sw.js to getToken(), so one worker
// owns both PWA caching and Firebase Messaging instead of competing workers.
importScripts("./sw.js");
