import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBDZRSZnxpMHK9u4KRvrwcZkPIYRqP-3Yo",
    authDomain: "facebook-46dc2.firebaseapp.com",
    projectId: "facebook-46dc2",
    storageBucket: "facebook-46dc2.appspot.com",
    messagingSenderId: "120162587490",
    appId: "1:120162587490:web:f393503a901679adb4d23b"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;