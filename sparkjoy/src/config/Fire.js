 
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBcUkgQQiOqpFGVyX9wHjjZMKEwJs4rCi8",
  authDomain: "thesparkofjoy-e82c9.firebaseapp.com",
  databaseURL: "https://thesparkofjoy-e82c9.firebaseio.com",
  projectId: "thesparkofjoy-e82c9",
  storageBucket: "thesparkofjoy-e82c9.appspot.com",
  messagingSenderId: "413427380809",
  appId: "1:413427380809:web:6f6c88886f58b4badd4598",
  measurementId: "G-TQFQ0DHS4J"
};


const fire = firebase.initializeApp(firebaseConfig);
export default fire;