// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-projects-bcbe2.firebaseapp.com",
  projectId: "ai-projects-bcbe2",
  storageBucket: "ai-projects-bcbe2.firebasestorage.app",
  messagingSenderId: "958492972392",
  appId: "1:958492972392:web:510d7b767dcd1cb39272dd",
  measurementId: "G-E1C1BQGE7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);