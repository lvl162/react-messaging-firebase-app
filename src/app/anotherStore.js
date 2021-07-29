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
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import postsReducer from '../features/posts/postsSlice';
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
  profileParamsToPopulate: ['contacts:users', { child: 'role', root: 'roles' }],
  useFirestoreForProfile: true,
  profileFactory: (user) => {
    console.log(user);
    const profile = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      email: user.email,
      role: ['user'],
    };
    if (user.providerData && user.providerData.length) {
      profile.providerData = user.providerData;
    }
    return profile;
  },
  // Firestore for Profile instead of Realtime DB
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
  counter: counterReducer,
  auth: authReducer,
  posts: postsReducer,
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
