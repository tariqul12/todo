// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWt0XJsSjUjnHlz3PDmZDLhft98o5tWdY",
  authDomain: "my-todo-95a80.firebaseapp.com",
  projectId: "my-todo-95a80",
  storageBucket: "my-todo-95a80.appspot.com",
  messagingSenderId: "255302530952",
  appId: "1:255302530952:web:cafca571f09d686056ac3d",
  measurementId: "G-XREWCNSD23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
