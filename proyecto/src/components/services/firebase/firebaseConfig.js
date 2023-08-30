
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB73yn2yxA8SRLPJD0DM-jrKYqpbfyKxPM",
    authDomain: "eccomerce-4d8a4.firebaseapp.com",
    projectId: "eccomerce-4d8a4",
    storageBucket: "eccomerce-4d8a4.appspot.com",
    messagingSenderId: "192319230271",
    appId: "1:192319230271:web:f85944811fb89c6c40c38a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)