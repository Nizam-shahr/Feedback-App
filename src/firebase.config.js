// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMfaRa21Znsemciinn4CQ0Ijgl1nfTIdY",
  authDomain: "house-market-place-app-f2bdb.firebaseapp.com",
  projectId: "house-market-place-app-f2bdb",
  storageBucket: "house-market-place-app-f2bdb.appspot.com",
  messagingSenderId: "484537342773",
  appId: "1:484537342773:web:f0832e537aa0042530ca7c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()