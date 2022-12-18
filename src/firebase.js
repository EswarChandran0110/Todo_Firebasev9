// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2ywcGBUpALUpnG79vkC3P-gVuNoQSoEE",
  authDomain: "todo-app-5776e.firebaseapp.com",
  projectId: "todo-app-5776e",
  storageBucket: "todo-app-5776e.appspot.com",
  messagingSenderId: "308475473809",
  appId: "1:308475473809:web:f44e405fd7653236b1f430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)