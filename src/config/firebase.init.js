// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeuuWnL83gOE-Cas9UuI4pK6bWOIpAq70",
  authDomain: "tsczlearn.firebaseapp.com",
  projectId: "tsczlearn",
  storageBucket: "tsczlearn.appspot.com",
  messagingSenderId: "838242097781",
  appId: "1:838242097781:web:e8d5450659e9a20100363c",
  measurementId: "G-WKB3SR8J80"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);