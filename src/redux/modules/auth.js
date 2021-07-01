import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authAPI } from '../../api';
import { setProfile } from './profile';

// Actions types
export const SIGNUP = 'auth/SIGNUP';
export const SIGNIN = 'auth/SIGNIN';
export const AUTHME = 'auth/AUTHME';

// Actions
export const signup = createAsyncThunk(
  SIGNUP,
  async (credentials, { rejectWithValue }) => {
    try {
      return await authAPI.signup(credentials);
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  SIGNIN,
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      let data = await authAPI.signin(credentials);
      if (data.status_code === 4) {
        dispatch(authMe({ token: data.token }));
      }
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const authMe = createAsyncThunk(
  AUTHME,
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const data = await authAPI.authMe(credentials.token);
      dispatch(setProfile({ ...data.profile }));
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const auth = createSlice({
  name: 'auth',
  initialState: {
    isShowServerError: false,
    isSuccessRegister: false,
    serverErrorMsg: '',
    isAuth: false,
    token: null,
    isLoading: false,
    profile: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: {
    // signUp
    [signup.pending]: (state) => {
      state.isLoading = true;
    },
    [signup.rejected]: (state, action) => {
      if (!action.payload) {
        state.serverErrorMsg = "Server isn't available now, try later";
      } else if (action.payload.status_code === 2) {
        state.serverErrorMsg = 'User is already exist';
      }
      state.isSuccessRegister = false;
      state.isLoading = false;
    },
    [signup.fulfilled]: (state, action) => {
      if (action.payload.status_code === 1) {
        state.serverErrorMsg = '';
        state.isSuccessRegister = true;
      } else {
        state.serverErrorMsg = 'Some server error';
        state.isSuccessRegister = false;
      }
      state.isLoading = false;
    },
    //  signIn
    [signin.pending]: (state) => {
      state.isLoading = true;
    },
    [signin.rejected]: (state, action) => {
      if (!action.payload) {
        state.serverErrorMsg = "Server isn't available now, try later";
      } else if (action.payload.status_code === 3) {
        state.serverErrorMsg = 'Incorrect login or password';
      }
      state.isLoading = false;
    },
    [signin.fulfilled]: (state, action) => {
      if (action.payload.status_code === 4) {
        state.token = action.payload.token;
      } else {
        state.serverErrorMsg = 'Some server error';
      }
      state.isLoading = false;
    },
    // authMe
    [authMe.rejected]: (state, action) => {
      state.isAuth = false;
    },
    [authMe.fulfilled]: (state, action) => {
      state.isAuth = true;
    },
  },
});

export const { setToken } = auth.actions;

export default auth.reducer;
