import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVd9ZUMGPztOl-2kUpXPdXC6exhiiSbvI",
  authDomain: "linkdin-clone-using-redux.firebaseapp.com",
  projectId: "linkdin-clone-using-redux",
  storageBucket: "linkdin-clone-using-redux.appspot.com",
  messagingSenderId: "178841180866",
  appId: "1:178841180866:web:5a1f43599dc5f8e637f95b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
