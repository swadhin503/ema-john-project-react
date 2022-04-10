// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrq4inqJeEZr60DnUrrZTakQ-gJSbeO4A",
  authDomain: "ema-john-project-react.firebaseapp.com",
  projectId: "ema-john-project-react",
  storageBucket: "ema-john-project-react.appspot.com",
  messagingSenderId: "279841774927",
  appId: "1:279841774927:web:9f48db968afa4952a0793a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;