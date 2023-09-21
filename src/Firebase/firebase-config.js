import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGbQF9nuneLHbXytE0fNLVoemLs7u2HeY",
  authDomain: "authentication-codeclause.firebaseapp.com",
  projectId: "authentication-codeclause",
  storageBucket: "authentication-codeclause.appspot.com",
  messagingSenderId: "134979614746",
  appId: "1:134979614746:web:10cc3a5dc2cd69db73f9a3",
  measurementId: "G-JZD7FZDX27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)