import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZS3snaaJmzPww5ZA92CGz80T9jPv_fQQ",
  authDomain: "c2dapp.firebaseapp.com",
  projectId: "c2dapp",
  storageBucket: "c2dapp.appspot.com",
  messagingSenderId: "773558802306",
  appId: "1:773558802306:web:5cac087a2fc86d8787219b"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
