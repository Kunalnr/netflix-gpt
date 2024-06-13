// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCpKhHA6T5uMvMlUWK9hpmXqkCJPhshlDg",
  authDomain: "netflixgpt-18348.firebaseapp.com",
  projectId: "netflixgpt-18348",
  storageBucket: "netflixgpt-18348.appspot.com",
  messagingSenderId: "187298462145",
  appId: "1:187298462145:web:4abab6ef5ce8bdb5d8d740",
  measurementId: "G-DQS560PLSV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
