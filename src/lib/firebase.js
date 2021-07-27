import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAerLgcmu810-sjB2Jt9tbuWOGPNox5Jkc',
  authDomain: 'messaging-app-ad213.firebaseapp.com',
  projectId: 'messaging-app-ad213',
  storageBucket: 'messaging-app-ad213.appspot.com',
  messagingSenderId: '631028727218',
  appId: '1:631028727218:web:f97997de84c5b2d56af8ab',
  measurementId: 'G-RV13ZDYG8C',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);
// export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

export const getUserWithUsername = async (username) => {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);

  const userDoc = (await query.get()).docs[0];
  return userDoc;
};
export const { serverTimestamp } = firebase.firestore.FieldValue;
export const postToJson = (doc) => {
  const data = doc.data();
  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
};
