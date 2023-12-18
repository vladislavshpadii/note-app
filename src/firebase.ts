import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_2O04xM9cIOR0z9IXpy7J5q3zk4eXMeo",
    authDomain: "note-app-4ccb1.firebaseapp.com",
    projectId: "note-app-4ccb1",
    storageBucket: "note-app-4ccb1.appspot.com",
    messagingSenderId: "74270370792",
    appId: "1:74270370792:web:0e78ca241e0ee79b99925d"
  };
  
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)