// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBarofJMUgmY8jZRuIGyBrXCyT-7ls0k14",

  authDomain: "chatapp-19da0.firebaseapp.com",

  projectId: "chatapp-19da0",

  storageBucket: "chatapp-19da0.appspot.com",

  messagingSenderId: "298335546899",

  appId: "1:298335546899:web:e842ecd6980eb7137f99e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
