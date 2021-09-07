import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOrQ9mYC9XS_qi7LybQ3tDJsDffILY9Ew",
  authDomain: "programmingapproach-1a878.firebaseapp.com",
  projectId: "programmingapproach-1a878",
  storageBucket: "programmingapproach-1a878.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const analytics = firebase.analytics;
const auth = firebase.auth();

export { analytics, auth, firebase };
