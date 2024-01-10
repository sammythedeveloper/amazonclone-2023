import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9ytWO63iy42WGoKMwHGLveqs5ksJENIY",
  authDomain: "fir-52671.firebaseapp.com",
  projectId: "fir-52671",
  storageBucket: "fir-52671.appspot.com",
  messagingSenderId: "241274904515",
  appId: "1:241274904515:web:e3c9670abecd3862852776",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
