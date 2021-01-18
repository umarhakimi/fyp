import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyDuxnf7v0liiO60pbtYGpxIjzu_8OMQ_iA",
  authDomain: "digitalmycard-7cb52.firebaseapp.com",
  databaseURL: "https://digitalmycard-7cb52-default-rtdb.firebaseio.com",
  projectId: "digitalmycard-7cb52",
  storageBucket: "digitalmycard-7cb52.appspot.com",
  messagingSenderId: "1048811636243",
  appId: "1:1048811636243:web:abdeb620a7233d1224e1e6",
  measurementId: "G-VBGG9ZFZXJ"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default fire;