// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJTMd3bQ_2nL-oFGnHZ3qKNgoN4lhS5xw",
  authDomain: "db-vtx-system.firebaseapp.com",
  projectId: "db-vtx-system",
  storageBucket: "db-vtx-system.appspot.com",
  messagingSenderId: "708418771168",
  appId: "1:708418771168:web:23e05f6c643f0d7c319885",
  measurementId: "G-70MT98R453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);