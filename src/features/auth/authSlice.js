import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth, googleAuthProvider } from '../../lib/firebase';

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     console.log(user.uid);
//   } else console.log('im out');
// });

export const signIn = createAsyncThunk('auth/login', async () => {
  const info = await auth.signInWithPopup(googleAuthProvider);
  const { displayName, uid, email, photoURL } = info.user;
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
    },
    [signOut.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
