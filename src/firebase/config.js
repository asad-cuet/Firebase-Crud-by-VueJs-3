import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEcX358xVPs16zHg8HzgpnSV4RsNzqvZo",
  authDomain: "st-project-807fd.firebaseapp.com",
  projectId: "st-project-807fd",
  storageBucket: "st-project-807fd.appspot.com",
  messagingSenderId: "618323811160",
  appId: "1:618323811160:web:8bdea4d5641d535752232d"
};


//init firebase
firebase.initializeApp(firebaseConfig)   //firebaseConfig is const name from paste code

//init firestore service
const projectFirestore= firebase.firestore()

const timestamp=firebase.firestore.FieldValue.serverTimestamp   //Optional, if you want to make timestamp column

export { projectFirestore, timestamp }