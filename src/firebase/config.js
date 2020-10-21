import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMtzDwqk3F7PfIerPmgnCBm6tUrKpJPzA",
    authDomain: "firegram-28d64.firebaseapp.com",
    databaseURL: "https://firegram-28d64.firebaseio.com",
    projectId: "firegram-28d64",
    storageBucket: "firegram-28d64.appspot.com",
    messagingSenderId: "622666436788",
    appId: "1:622666436788:web:7df4c580e5d90912e3c7e1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };