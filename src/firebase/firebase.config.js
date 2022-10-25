// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPLbAH667AzF5nqYd77SbV47UbGGurisY",
  authDomain: "programming-language-course.firebaseapp.com",
  projectId: "programming-language-course",
  storageBucket: "programming-language-course.appspot.com",
  messagingSenderId: "658053361794",
  appId: "1:658053361794:web:6ba3713c8ae33212bf049b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;