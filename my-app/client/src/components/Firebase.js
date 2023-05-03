// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4reH8-yivmwzXib2jYzP8JofIqFTC03k",
  authDomain: "fitwell-ea5d8.firebaseapp.com",
  projectId: "fitwell-ea5d8",
  storageBucket: "fitwell-ea5d8.appspot.com",
  messagingSenderId: "740889588",
  appId: "1:740889588:web:afc78f11da2a67f8ac9fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export default {app, onAuthStateChanged};
export const auth = getAuth(app);





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
//   authDomain: "XXXXXXXXXXXXXXXXXXXXXXXX",
//   projectId: "XXXXXXXXX",
//   storageBucket: "XXXXXXXXXXXXXXXXXX",
//   messagingSenderId: "XXXXXXXXXXXX",
//   appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);
// export default app;