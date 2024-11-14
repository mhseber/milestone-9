// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR9l0uCp9-Rof_f1QyLCX0lOb7G9dAIoc",
    authDomain: "react-routing-style.firebaseapp.com",
    projectId: "react-routing-style",
    storageBucket: "react-routing-style.firebasestorage.app",
    messagingSenderId: "875093388304",
    appId: "1:875093388304:web:e2ce90f5aebff393682e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);