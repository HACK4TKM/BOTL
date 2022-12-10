// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ2LCGy70b_htViej_tgoutE--rhVgRyA",
  authDomain: "sponsorhub-21a9a.firebaseapp.com",
  projectId: "sponsorhub-21a9a",
  storageBucket: "sponsorhub-21a9a.appspot.com",
  messagingSenderId: "672161977250",
  appId: "1:672161977250:web:966af568111d301ac358fb",
  measurementId: "G-Z51GY0JNPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };


