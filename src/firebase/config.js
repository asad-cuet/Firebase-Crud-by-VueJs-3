import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyADPuzWZSH76PmXDFlTppPDmmYNbsoxFLo",
  authDomain: "fir-crud-58cea.firebaseapp.com",
  projectId: "fir-crud-58cea",
  storageBucket: "fir-crud-58cea.appspot.com",
  messagingSenderId: "80999418786",
  appId: "1:80999418786:web:6732b43a5766c9345e40fb"
};


//init firebase
firebase.initializeApp(firebaseConfig)   //firebaseConfig is const name from paste code

//init firestore service
const projectFirestore= firebase.firestore()

const timestamp=firebase.firestore.FieldValue.serverTimestamp   //Optional, if you want to make timestamp column

export { projectFirestore, timestamp }