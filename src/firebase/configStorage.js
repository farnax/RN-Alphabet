import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDn4ES7W6bEB8YuDcgPidmn0xpsfYUjYtk",
  authDomain: "rn-todo-f07ae.firebaseapp.com",
  databaseURL: "https://rn-todo-f07ae.firebaseio.com",
  projectId: "rn-todo-f07ae",
  storageBucket: "rn-todo-f07ae.appspot.com",
  messagingSenderId: "273614038804",
  appId: "1:273614038804:web:96f561f0a33286c717c401"
};
const storageApp = firebase.initializeApp(firebaseConfig, 'storageApp');

export default storageApp.storage();
