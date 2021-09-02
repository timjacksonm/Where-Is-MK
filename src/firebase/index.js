// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

// The Firebase config object contains unique, but non-secret identifiers for your Firebase project.
// The content of the Firebase config file or object is considered public. Protected by Firebase Security Rules.
const firebaseConfig = {
  apiKey: 'AIzaSyDPPrm5Zb9yj6Vm8eGY1jYadRWcMAVa_ds',
  authDomain: 'where-is-mk.firebaseapp.com',
  projectId: 'where-is-mk',
  storageBucket: 'where-is-mk.appspot.com',
  messagingSenderId: '902783434627',
  appId: '1:902783434627:web:8c33afcd1922cde6b7c0b6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const test = async () => {
  const docRef = doc(db, 'characters', 'asdf');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};

export default test;
