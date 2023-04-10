import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCcDktE_g6cdmmVd3lGf6G5Xt_ZqWxdOq0",
    authDomain: "obiweezy-clone.firebaseapp.com",
    projectId: "obiweezy-clone",
    storageBucket: "obiweezy-clone.appspot.com",
    messagingSenderId: "620613114550",
    appId: "1:620613114550:web:0c0b245c2bb4afcb6c6417",
    measurementId: "G-DPNDB89NFZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth();

export {db, auth};