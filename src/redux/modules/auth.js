import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authAPI } from '../../api';

export const SIGNUP = 'auth/SIGNUP';
export const SIGNIN = 'auth/SIGNIN';
export const AUTHME = 'auth/AUTHME';

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
  async (credentials, { rejectWithValue }) => {
    try {
      return await authAPI.authMe(credentials.token);
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
    profile: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: {
    [signup.rejected]: (state, action) => {
      if (!action.payload) {
        state.serverErrorMsg = "Server isn't available now, try later";
      } else if (action.payload.status_code === 2) {
        state.serverErrorMsg = 'User is already exist';
      }
      state.isSuccessRegister = false;
    },
    [signup.fulfilled]: (state, action) => {
      if (action.payload.status_code === 1) {
        state.serverErrorMsg = '';
        state.isSuccessRegister = true;
      } else {
        state.serverErrorMsg = 'Some server error';
        state.isSuccessRegister = false;
      }
    },
    [signin.rejected]: (state, action) => {
      if (!action.payload) {
        state.serverErrorMsg = "Server isn't available now, try later";
      } else if (action.payload.status_code === 3) {
        state.serverErrorMsg = 'Incorrect login or password';
      }
    },
    [signin.fulfilled]: (state, action) => {
      if (action.payload.status_code === 4) {
        state.token = action.payload.token;
      } else {
        state.serverErrorMsg = 'Some server error';
      }
    },
    [authMe.rejected]: (state, action) => {
      state.isAuth = false;
    },
    [authMe.fulfilled]: (state, action) => {
      state.profile = action.payload.profile;
      if (state.profile) {
        state.isAuth = true;
      }
    },
  },
});

export const { setToken } = auth.actions;

export default auth.reducer;
