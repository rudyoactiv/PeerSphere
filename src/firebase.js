import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqL70kIENYdw2Ei6UieFmhUyIKyzPlldo",
  authDomain: "section-selection-database.firebaseapp.com",
  projectId: "section-selection-database",
  storageBucket: "section-selection-database.appspot.com",
  messagingSenderId: "1088243678428",
  appId: "1:1088243678428:web:38fad809e121de911ac819",
  measurementId: "G-J5V2GRNHVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider)