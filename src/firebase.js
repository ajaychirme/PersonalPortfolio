
import { initializeApp } from "firebase/app";
//firestore used for database.
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBXL6vZteyUWrkQo8tJWwkaad8q_MAd1Pc",
  authDomain: "ajay-portfolio-a6225.firebaseapp.com",
  projectId: "ajay-portfolio-a6225",
  storageBucket: "ajay-portfolio-a6225.appspot.com",
  messagingSenderId: "334088947053",
  appId: "1:334088947053:web:9890505c9fc9c1866e4664"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore()