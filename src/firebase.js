import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD76m7tSq5oiHqS_HuXo1guhc-QGzqoElg",
  authDomain: "audioshorts-new.firebaseapp.com",
  projectId: "audioshorts-new",
  storageBucket: "audioshorts-new.appspot.com",
  messagingSenderId: "357115263935",
  appId: "1:357115263935:web:cfad423f6dbb53cc2bff0a",
  measurementId: "G-7ZCY0F23CR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
