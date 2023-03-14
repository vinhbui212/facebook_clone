import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyByW9ko9Z3m7_8As0vOUwzWphRdoKqSPgw",
  authDomain: "facebookclone-e3b9d.firebaseapp.com",
  projectId: "facebookclone-e3b9d",
  storageBucket: "facebookclone-e3b9d.appspot.com",
  messagingSenderId: "108743431410",
  appId: "1:108743431410:web:2c77a63bf936222b566c6b",
  measurementId: "G-1EVXK236MH"
};

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
