import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCAPq8w8Owi9YQtxTXoaXUV7gfO66mXTPs",
  authDomain: "echri-b8fbf.firebaseapp.com",
  databaseURL: "https://echri-b8fbf-default-rtdb.firebaseio.com",
  projectId: "echri-b8fbf",
  storageBucket: "echri-b8fbf.appspot.com",
  messagingSenderId: "1034124369129",
  appId: "1:1034124369129:web:a7eb6443e200362edae478",
  measurementId: "G-7H3WNE35VP"
};

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();