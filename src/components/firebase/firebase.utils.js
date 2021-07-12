import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB1dartMmE31Vol5tU66FPmnv0dd8476Rk",
  authDomain: "crwn-db-373cd.firebaseapp.com",
  projectId: "crwn-db-373cd",
  storageBucket: "crwn-db-373cd.appspot.com",
  messagingSenderId: "260742289370",
  appId: "1:260742289370:web:5f211758ac4d90f23b92e3",
  measurementId: "G-P4CEK5R90Y"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;