// ============================================================================
//  Meher's Magical Vacation Planner — Firebase configuration
// ----------------------------------------------------------------------------
//  ONE-TIME SETUP (Papa or Mumma, ~5 minutes):
//   1. Go to  https://console.firebase.google.com  and click "Add project".
//      Name it anything (e.g. "meher-vacation"). Disable Analytics.
//   2. In the new project's left sidebar:
//         Build → Authentication → Get Started → Sign-in method
//         → enable "Anonymous"  → Save.
//   3.    Build → Firestore Database → Create database
//         → "Start in test mode" → pick a region close to India (asia-south1).
//   4. In Firestore Database → Rules, paste:
//        rules_version = '2';
//        service cloud.firestore {
//          match /databases/{database}/documents {
//            match /{document=**} {
//              allow read, write: if request.auth != null;
//            }
//          }
//        }
//      Click "Publish".
//   5. Project Overview (top-left gear) → Project settings → "Your apps"
//      → click </> (Web) → register a web app (any nickname)
//      → copy the firebaseConfig object Firebase shows you.
//   6. Paste those values into the object below, replacing every "REPLACE_ME".
//   7. Save this file and reload meher.html — you're done!
// ============================================================================

window.FIREBASE_CONFIG = {
  apiKey:            "REPLACE_ME",
  authDomain:        "REPLACE_ME.firebaseapp.com",
  projectId:         "REPLACE_ME",
  storageBucket:     "REPLACE_ME.appspot.com",
  messagingSenderId: "REPLACE_ME",
  appId:             "REPLACE_ME"
};
