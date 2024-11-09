// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBk1JV3wSj250E9neOzMlg_nlJMcnJjs-M",
    authDomain: "fir-practice-53238.firebaseapp.com",
    projectId: "fir-practice-53238",
    storageBucket: "fir-practice-53238.firebasestorage.app",
    messagingSenderId: "317217784178",
    appId: "1:317217784178:web:e69ce1fb7a5f2778709deb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;