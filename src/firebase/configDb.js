import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA9S17U1R0j-cdVmaa5NxGzitrsSqIW4Bs",
  authDomain: "rn-alphabet-db.firebaseapp.com",
  databaseURL: "https://rn-alphabet-db.firebaseio.com",
  projectId: "rn-alphabet-db",
  storageBucket: "rn-alphabet-db.appspot.com",
  messagingSenderId: "331448629900",
  appId: "1:331448629900:web:751ef2d385172ebed859a9"
};
firebase.initializeApp(firebaseConfig, "[DEFAULT]");

export default firebase.database();