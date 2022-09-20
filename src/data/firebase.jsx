import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig =({
    apiKey: "AIzaSyCuyoKEWazK5HBVsFtOq3OyLCU3ZXZo9DA",
    authDomain: "natflux-71b1e.firebaseapp.com",
    projectId: "natflux-71b1e",
    storageBucket: "natflux-71b1e.appspot.com",
    messagingSenderId: "136808905323",
    appId: "1:136808905323:web:4f4e1689500cdf743f4f2e"
    // apiKey: process.env.REACT__APP_API_KEY,
    // authDomain: process.env.REACT__APP_AUTH_DOMAIN,
    // projectId: process.env.REACT__APP_PROJECT_ID,
    // storageBucket: process.env.REACT__APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT__APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT__APP_APP_ID
});


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const provider = new GoogleAuthProvider()

export const getFirestoreApp = () => {
    return app;
}