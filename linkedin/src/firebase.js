import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5SKfja3tGf6lXFPKQ2MEhWofe_tr0l_M",
  authDomain: "linkedin-68345.firebaseapp.com",
  projectId: "linkedin-68345",
  storageBucket: "linkedin-68345.appspot.com",
  messagingSenderId: "429242648132",
  appId: "1:429242648132:web:78c3869841bb710ec35e11",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
