 /* import  {initializeApp} from 'firebase/app';
 import {getAuth} from 'firebase/auth';
 
 
const firebaseConfig = {
  apiKey: "AIzaSyAzvo5WY_MP6Wu__XhKo5A38pYxnZL_MP8",
  authDomain: "pwd-login-fb.firebaseapp.com",
  projectId: "pwd-login-fb",
  storageBucket: "pwd-login-fb.appspot.com",
  messagingSenderId: "649220597472",
  appId: "1:649220597472:web:389cdd6ff369cddf339285",
  measurementId: "G-5HW4YRDZ2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {auth} */





// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzvo5WY_MP6Wu__XhKo5A38pYxnZL_MP8",
  authDomain: "pwd-login-fb.firebaseapp.com",
  projectId: "pwd-login-fb",
  storageBucket: "pwd-login-fb.appspot.com",
  messagingSenderId: "649220597472",
  appId: "1:649220597472:web:389cdd6ff369cddf339285",
  measurementId: "G-5HW4YRDZ2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}