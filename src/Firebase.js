import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLNhNM7GJAc1FyJ4nM140g1bZB5pG1hHg",
    authDomain: "my-bank-app-70.firebaseapp.com",
    databaseURL: "https://my-bank-app-70-default-rtdb.firebaseio.com",
    projectId: "my-bank-app-70",
    storageBucket: "my-bank-app-70.appspot.com",
    messagingSenderId: "815962329563",
    appId: "1:815962329563:web:57e769335d5fe0afe617fe"
  };

  firebase.intializeApp(firebaseConfig);

  export default firebase;