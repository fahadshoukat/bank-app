// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLNhNM7GJAc1FyJ4nM140g1bZB5pG1hHg",
  authDomain: "my-bank-app-70.firebaseapp.com",
  databaseURL: "https://my-bank-app-70-default-rtdb.firebaseio.com",
  projectId: "my-bank-app-70",
  storageBucket: "my-bank-app-70.appspot.com",
  messagingSenderId: "815962329563",
  appId: "1:815962329563:web:57e769335d5fe0afe617fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }