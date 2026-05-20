// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa0m4kcy3FP5cXB5sYRUkQ6yww_HWalXI",
  authDomain: "local-food-lover-abc35.firebaseapp.com",
  projectId: "local-food-lover-abc35",
  storageBucket: "local-food-lover-abc35.firebasestorage.app",
  messagingSenderId: "486219861203",
  appId: "1:486219861203:web:376605a069a1b3e80f1826",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
