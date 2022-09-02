import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCiY3NZzCW6zhNmsVFgHBulAZrhKYkbsWI",
  authDomain: "e-commerce-d645e.firebaseapp.com",
  projectId: "e-commerce-d645e",
  storageBucket: "e-commerce-d645e.appspot.com",
  messagingSenderId: "470527485523",
  appId: "1:470527485523:web:e522e41b577ec99f4e08a6",
  measurementId: "G-PF82H0TCM6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


initializeApp(firebaseConfig);

export default db