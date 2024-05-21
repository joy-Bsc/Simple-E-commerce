// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpoJ1_oFeDmWSHeA0CNartwwDj14s3fJI",
  authDomain: "database-15.firebaseapp.com",
  projectId: "database-15",
  storageBucket: "database-15.appspot.com",
  messagingSenderId: "314891897979",
  appId: "1:314891897979:web:eb310c2012681ed783e6de",
  measurementId: "G-MPYKQYLZJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
