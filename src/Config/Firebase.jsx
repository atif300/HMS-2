
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXVji_kpjsq5Cgq-Uoq9DX4ixQ7P85bsw",
    authDomain: "login-signup-0045.firebaseapp.com",
    projectId: "login-signup-0045",
    storageBucket: "login-signup-0045.appspot.com",
    messagingSenderId: "658996443946",
    appId: "1:658996443946:web:d09753b2aaefc7f78c7c53"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage}