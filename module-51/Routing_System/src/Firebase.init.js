// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyzYfLkdrAde-Cg6e6UGzIT0dZG-FB2DA",
    authDomain: "auth-more-add-page.firebaseapp.com",
    projectId: "auth-more-add-page",
    storageBucket: "auth-more-add-page.firebasestorage.app",
    messagingSenderId: "729202531056",
    appId: "1:729202531056:web:7d0b5ae9651ed83d9f4035"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);