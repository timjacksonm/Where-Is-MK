// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore';

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
initializeApp(firebaseConfig);

const db = getFirestore();

export const verifyCharacterData = async (coords, id) => {
  const { x, y } = coords;
  const docRef = doc(db, 'where-is-mk', 'characters');
  const docSnap = await getDoc(docRef);

  if (docSnap.data()[id]) {
    const { minimumX, minimumY, maximumX, maximumY } = docSnap.data()[id];
    return x > minimumX && x < maximumX && y < minimumY && y > maximumY; // if coords are within container ? returns true : returns false
  } else {
    // doc.data() will be undefined in this case
    console.log(`No such document! id:${id}`);
  }
};

export const getLeaderboardData = async (index) => {
  const docRef = doc(db, 'leaderboards', `${index}`);
  try {
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    // doc.data() will be undefined in this case
    console.log(`No such document!`);
  }
};

export const storeScoreToDb = async (index, user, completionTime) => {
  try {
    const prevData = await getLeaderboardData(index);
    await setDoc(doc(db, 'leaderboards', index), {
      ...prevData,
      [user]: { name: user, time: completionTime },
    });
  } catch (error) {
    console.log(error);
  }
};
