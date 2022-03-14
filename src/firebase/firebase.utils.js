import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBUOVsjZIddGdiwThoh0Vemk3NsWGSOdqM",
  authDomain: "crwn-db-ae908.firebaseapp.com",
  projectId: "crwn-db-ae908",
  storageBucket: "crwn-db-ae908.appspot.com",
  messagingSenderId: "298399197931",
  appId: "1:298399197931:web:7396125dbc0d0765bfecae",
  measurementId: "G-P0H9MXES60"
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: "select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



