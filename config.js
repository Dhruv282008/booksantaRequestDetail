import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDDWCgR-7r2jiI0M9jumzsN678KBAMGC_8",
  authDomain: "book-santa-55978.firebaseapp.com",
  projectId: "book-santa-55978",
  storageBucket: "book-santa-55978.appspot.com",
  messagingSenderId: "348800027973",
  appId: "1:348800027973:web:fd52874ad932e757d6c22c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
