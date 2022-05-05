// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqNxa7fRrxyVnUjcrufZVSb9TTSy1_3hk",
  authDomain: "otp-app-demo-f0de9.firebaseapp.com",
  projectId: "otp-app-demo-f0de9",
  storageBucket: "otp-app-demo-f0de9.appspot.com",
  messagingSenderId: "959957700931",
  appId: "1:959957700931:web:498f7c5b06587f04cbdff6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;