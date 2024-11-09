// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOBRv-QEOcjjrEa5In3O5KWTXZ5W8dcKY",
    authDomain: "email-password-auth-6e068.firebaseapp.com",
    projectId: "email-password-auth-6e068",
    storageBucket: "email-password-auth-6e068.firebasestorage.app",
    messagingSenderId: "596365726172",
    appId: "1:596365726172:web:97a096f43910298f1dff19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);