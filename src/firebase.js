// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBseDLNNWpCJawpKGgX48l-YHMgHEmp8LQ",
  authDomain: "user-821d8.firebaseapp.com",
  projectId: "user-821d8",
  storageBucket: "user-821d8.appspot.com",
  messagingSenderId: "122711853727",
  appId: "1:122711853727:web:ab5576062bccb520c2f0aa",
  measurementId: "G-3VH2ZYZK3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
