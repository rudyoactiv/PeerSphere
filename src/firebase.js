import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from  "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDqL70kIENYdw2Ei6UieFmhUyIKyzPlldo",
  authDomain: "section-selection-database.firebaseapp.com",
  projectId: "section-selection-database",
  storageBucket: "section-selection-database.appspot.com",
  messagingSenderId: "1088243678428",
  appId: "1:1088243678428:web:38fad809e121de911ac819",
  measurementId: "G-J5V2GRNHVB"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider)