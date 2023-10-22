// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d54e2.firebaseapp.com",
  projectId: "mern-estate-d54e2",
  storageBucket: "mern-estate-d54e2.appspot.com",
  messagingSenderId: "319553858953",
  appId: "1:319553858953:web:5da664484a8133e778c558"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);