import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyAv38MAqkPVEkQ3zlSXspyANmSU3X4Hfcs",
    authDomain: "sparkofjoy-c743b.firebaseapp.com",
    databaseURL: "https://sparkofjoy-c743b.firebaseio.com",
    projectId: "sparkofjoy-c743b",
    storageBucket: "sparkofjoy-c743b.appspot.com",
    messagingSenderId: "843494370106",
    appId: "1:843494370106:web:9a4a744151e896fb1a3e03"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;