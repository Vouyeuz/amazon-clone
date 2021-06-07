import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5nv3btHdeuRprSGTr2zs7ta_IujPKCK0",
  authDomain: "clone-10f53.firebaseapp.com",
  projectId: "clone-10f53",
  storageBucket: "clone-10f53.appspot.com",
  messagingSenderId: "853133672931",
  appId: "1:853133672931:web:c3c6e9b42e30c2aee4e0d6",
  measurementId: "G-6EBWWDNYEM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
