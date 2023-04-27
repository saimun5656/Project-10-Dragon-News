// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0wavdZ-ubTNAYxf1mn7wunfVuHc9KARo",
  authDomain: "project-10-dragon-news.firebaseapp.com",
  projectId: "project-10-dragon-news",
  storageBucket: "project-10-dragon-news.appspot.com",
  messagingSenderId: "259230834530",
  appId: "1:259230834530:web:3941d45faf50db9599163b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app