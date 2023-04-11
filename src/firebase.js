// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhzYA0ED8umsqeQv1i1JGeFaF6GtRs0F4",
  authDomain: "todo-5e3df.firebaseapp.com",
  projectId: "todo-5e3df",
  storageBucket: "todo-5e3df.appspot.com",
  messagingSenderId: "90257565886",
  appId: "1:90257565886:web:78ecaf891b2673a8ca96ef",
  measurementId: "G-M4T035EVMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;