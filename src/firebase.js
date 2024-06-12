import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZKMlHEoxy0ph5-aBXRIhuQEXHdNMOwnk",
  authDomain: "coursfirebase-46cd9.firebaseapp.com",
  projectId: "coursfirebase-46cd9",
  storageBucket: "coursfirebase-46cd9.appspot.com",
  messagingSenderId: "500451102333",
  appId: "1:500451102333:web:361f2972a13d9034efab14",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
