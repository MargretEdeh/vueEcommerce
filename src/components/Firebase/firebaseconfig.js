// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx2TA8UKaTzAT_cJokoGuoRj0Gw-kJQdI",
  authDomain: "techcart-c46af.firebaseapp.com",
  projectId: "techcart-c46af",
  storageBucket: "techcart-c46af.appspot.com",
  messagingSenderId: "413482617705",
  appId: "1:413482617705:web:98018f72c859301de60bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export  {auth};