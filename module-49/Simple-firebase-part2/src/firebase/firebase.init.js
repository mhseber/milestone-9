// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDx2rI4HrXhZJJz7o0nM6WdCv6oSgXOUY",
    authDomain: "simple-firebase-part2-9185b.firebaseapp.com",
    projectId: "simple-firebase-part2-9185b",
    storageBucket: "simple-firebase-part2-9185b.firebasestorage.app",
    messagingSenderId: "477409547541",
    appId: "1:477409547541:web:7f772bbff64247ad40c51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
