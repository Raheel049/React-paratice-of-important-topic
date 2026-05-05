// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGDCfSbVWES0svOf7yoxt7vQpozdsWD00",
  authDomain: "react-project-e0c02.firebaseapp.com",
  projectId: "react-project-e0c02",
  storageBucket: "react-project-e0c02.firebasestorage.app",
  messagingSenderId: "370658260430",
  appId: "1:370658260430:web:4aa2ace178127e3806679f",
  measurementId: "G-5N6MJRHCMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };