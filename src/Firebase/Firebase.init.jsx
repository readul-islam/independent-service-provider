// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfF0nG-aQsBaD3jnpqh9wvxsntUhI7dbE",
  authDomain: "assignment10-project-auth.firebaseapp.com",
  projectId: "assignment10-project-auth",
  storageBucket: "assignment10-project-auth.appspot.com",
  messagingSenderId: "547730592328",
  appId: "1:547730592328:web:d661e25ea58d7d5cb2be7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;