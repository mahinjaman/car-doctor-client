// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDP7JUw72rci1i-PX-0ntgzaHzdwfD9mvU",
    authDomain: "car-doctor-2-dcc86.firebaseapp.com",
    projectId: "car-doctor-2-dcc86",
    storageBucket: "car-doctor-2-dcc86.appspot.com",
    messagingSenderId: "912645481094",
    appId: "1:912645481094:web:dfe255bbaecf2500a0a707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)

export default Auth;