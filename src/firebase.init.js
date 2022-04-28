// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArz1-v7xv6X_GB1CZCx4GiYkXKnLdBlTE",
  authDomain: "genus-car-service-1c714.firebaseapp.com",
  projectId: "genus-car-service-1c714",
  storageBucket: "genus-car-service-1c714.appspot.com",
  messagingSenderId: "7791079410",
  appId: "1:7791079410:web:d2f5a207d6c2a44f04056b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
