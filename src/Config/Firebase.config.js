// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApbiZwef-OD-YacAJIs9KoDDnx2MYbA8U",
    authDomain: "connect-job-681f5.firebaseapp.com",
    projectId: "connect-job-681f5",
    storageBucket: "connect-job-681f5.appspot.com",
    messagingSenderId: "328559092687",
    appId: "1:328559092687:web:dc20d98dd2d742f5a268ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);