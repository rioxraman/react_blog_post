import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEzgPejGTvVwseE2ZMihmqOWnkdHYwy-Y",
    authDomain: "react-hooks-blog-c7f47.firebaseapp.com",
    projectId: "react-hooks-blog-c7f47",
    storageBucket: "react-hooks-blog-c7f47.appspot.com",
    messagingSenderId: "288296544615",
    appId: "1:288296544615:web:f720ec21572f2be61de7c2"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
