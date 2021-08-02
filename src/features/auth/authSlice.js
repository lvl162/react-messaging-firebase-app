import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  auth,
  firestore,
  googleAuthProvider,
  isDocExist,
  serverTimestamp,
} from '../../lib/firebase';

export const signIn = createAsyncThunk('auth/login', async () => {
  const info = await auth.signInWithPopup(googleAuthProvider);
  const { displayName, uid, email, photoURL } = info.user;
  const userDoc = firestore.collection('users').doc(uid);
  if (!isDocExist(userDoc)) {
    const batch = firestore.batch();
    batch.set(userDoc, {
      photoURL: photoURL,
      displayName: displayName,
      contacts: [],
      email: email,
      createdAt: serverTimestamp(),
    });

    batch
      .commit()
      .then((res) => console.log('successfully'))
      .catch((err) => console.log('error'));
  }
  console.log('info already added');
  return { displayName, uid, email, photoURL };
});

export const signOut = createAsyncThunk('auth/logout', async () => {
  return await auth.signOut();
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
    isLoggedIn: null,
  },
  reducers: {},
  extraReducers: {
    [signIn.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signIn.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [signIn.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [signOut.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signOut.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add any fetched posts to the array
      state.user = null;
      state.isLoggedIn = false;
    },
    [signOut.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
