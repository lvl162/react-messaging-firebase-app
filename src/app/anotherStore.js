import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
import {
  getFirebase,
  actionTypes as rrfActionTypes,
} from 'react-redux-firebase';
// import 'firebase/functions' // <- needed if using httpsCallable
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore
import { configureStore } from '@reduxjs/toolkit';
import { constants as rfConstants } from 'redux-firestore';

const fbConfig = {
  apiKey: 'AIzaSyAerLgcmu810-sjB2Jt9tbuWOGPNox5Jkc',
  authDomain: 'messaging-app-ad213.firebaseapp.com',
  projectId: 'messaging-app-ad213',
  storageBucket: 'messaging-app-ad213.appspot.com',
  messagingSenderId: '631028727218',
  appId: '1:631028727218:web:f97997de84c5b2d56af8ab',
  measurementId: 'G-RV13ZDYG8C',
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  enableClaims: true, // Get custom claims along with the profile
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions',
};

// Initialize firebase instance
if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig);
}

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// const store = createStore(rootReducer, initialState);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          // just ignore every redux-firebase and react-redux-firebase action type
          ...Object.keys(rfConstants.actionTypes).map(
            (type) => `${rfConstants.actionsPrefix}/${type}`
          ),
          ...Object.keys(rrfActionTypes).map(
            (type) => `@@reactReduxFirebase/${type}`
          ),
          'persist/PERSIST',
        ],
        ignoredPaths: ['firebase', 'firestore'],
      },
      thunk: {
        extraArgument: {
          getFirebase,
        },
      },
    }),
});

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
