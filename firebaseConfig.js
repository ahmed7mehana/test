// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZr3qFsGZHMuKxK9zi9H1mvz2vk_OR8jc",
  authDomain: "candle-d8f1b.firebaseapp.com",
  projectId: "candle-d8f1b",
  storageBucket: "candle-d8f1b.appspot.com",
  messagingSenderId: "188986364300",
  appId: "1:188986364300:web:d210aaac21abbb47f486a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
