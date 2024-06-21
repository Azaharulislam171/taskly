
import { initializeApp } from "firebase/app";
import {getFirestore,Timestamp } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider,onAuthStateChanged} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
apiKey: "AIzaSyCh0ExqNpc632VPhG0OYPbxwn5dCcustUg",
authDomain: "aitodolist-3a06b.firebaseapp.com",
projectId: "aitodolist-3a06b",
storageBucket: "aitodolist-3a06b.appspot.com",
messagingSenderId: "990234030200",
appId: "1:990234030200:web:3cc5b9be67bf82bcaabd8d",
measurementId: "G-063LJR8D5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); 
const provider = new GoogleAuthProvider();

export { db, auth, Timestamp, storage, provider };