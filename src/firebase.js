import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpWnBq0m4cuIEUrQenTX4pKTiQCf1JN88",
  authDomain: "todo-e75a1.firebaseapp.com",
  projectId: "todo-e75a1",
  storageBucket: "todo-e75a1.appspot.com",
  messagingSenderId: "437011739214",
  appId: "1:437011739214:web:9b502554d2e2c80154c91f",
  measurementId: "G-MQG7WSC9DT"
});

const db = firebaseApp.firestore();

export default db;
