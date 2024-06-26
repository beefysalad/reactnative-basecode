
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQhdhLvGse14x_a7J2yQSJHCgTTUxll3s",
  authDomain: "rnauth-85ec5.firebaseapp.com",
  projectId: "rnauth-85ec5",
  storageBucket: "rnauth-85ec5.appspot.com",
  messagingSenderId: "479934658265",
  appId: "1:479934658265:web:3f66bdd01798ec9ff130c8"
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)