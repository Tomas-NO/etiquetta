import firebase from "firebase";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBzvcmB-whSSQM7nIOQMGxPkwEFoQ0SdVc",
  authDomain: "etiquetta-5403d.firebaseapp.com",
  projectId: "etiquetta-5403d",
  storageBucket: "etiquetta-5403d.appspot.com",
  messagingSenderId: "366210232440",
  appId: "1:366210232440:web:2f03107d81b236a3d03d8d",
  measurementId: "G-WXHN235QCR",
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

export const getStorage = () => firebase.storage();
