// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "streamify-11686.firebaseapp.com",
  databaseURL: "https://streamify-11686-default-rtdb.firebaseio.com",
  projectId: "streamify-11686",
  storageBucket: "streamify-11686.appspot.com",
  messagingSenderId: "839598384758",
  appId: "1:839598384758:web:48686748db11d1ce25e157",
  measurementId: "G-8102LFLS8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
