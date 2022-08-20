import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite"
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx2XiYt3huY7JCYNIe_uEOWpC4za5hg3A",
  authDomain: "euroameri-car.firebaseapp.com",
  projectId: "euroameri-car",
  storageBucket: "euroameri-car.appspot.com",
  messagingSenderId: "519925930876",
  appId: "1:519925930876:web:4b01bd96e6220b012422f9",
  measurementId: "G-LFW4N8K2FE"
};

const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const db = getFirestore(app);


// Initialize Firebase
export { db };

