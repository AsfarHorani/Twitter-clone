// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBTjQc3WSoJLrbso57HbKuccx4wQVtKIM0",
    authDomain: "twitser-a7852.firebaseapp.com",
    projectId: "twitser-a7852",
    storageBucket: "twitser-a7852.appspot.com",
    messagingSenderId: "498730965101",
    appId: "1:498730965101:web:1eb79e09a12cec34288764",
    measurementId: "G-CCLDCL45EC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  export default db;