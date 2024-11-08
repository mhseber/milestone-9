// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAY6m8lsdSb7OgeGajzIiYak1Wva4Gy4JY",
    authDomain: "simple-firebase2-15159.firebaseapp.com",
    projectId: "simple-firebase2-15159",
    storageBucket: "simple-firebase2-15159.firebasestorage.app",
    messagingSenderId: "987246690546",
    appId: "1:987246690546:web:2efeab4f6bcaf08768506b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);