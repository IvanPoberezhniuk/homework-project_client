import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { authAPI } from '../../api';
import { deleteProfile, setProfile } from './profile';

// Actions types
export const SIGNUP = 'auth/SIGNUP';
export const SIGNIN = 'auth/SIGNIN';
export const SIGNOUT = 'auth/SIGNOUT';

// Actions
export const signup = createAsyncThunk(
  SIGNUP,
  async (credentials, { rejectWithValue }) => {
    try {
      return await authAPI.signup(credentials);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  SIGNIN,
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { headers, data: userDTO } = await authAPI.signin(credentials);
      const { autorization, refreshtoken } = { ...headers };
      const token = autorization.substring(7, autorization.length).trim();
      const refreshToken = refreshtoken.trim();

      await dispatch(setProfile(userDTO));

      if (credentials.rememberMe) {
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('isAuth', true);
        localStorage.setItem('userDTO', JSON.stringify(userDTO));
      }

      return { token, refreshToken };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const signout = createAsyncThunk(
  SIGNOUT,
  async (args, { rejectWithValue, dispatch, getState }) => {
    try {
      const { auth } = getState();

      const res = await authAPI.signout(auth.token, auth.refreshToken);
      await dispatch(deleteProfile);

      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('isAuth');
      localStorage.removeItem('userDTO');

      return { msg: res.data.msg };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const auth = createSlice({
  name: 'auth',
  initialState: {
    isShowServerError: false,
    isSuccessRegister: false,
    serverErrorMsg: '',
    isAuth: JSON.parse(localStorage.getItem('isAuth')) ? true : false,
    token: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    isLoading: false,
  },
  reducers: {
    setToken: (state, action) => {
      const { token } = action.payload;
      state.token = token;
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

      state.isAuth = false;
      state.isLoading = false;
    },
    [signin.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;

      state.isAuth = true;
      state.isLoading = false;
    },
    // signOut
    [signout.pending]: (state) => {
      state.isLoading = true;
    },
    [signout.rejected]: (state, action) => {
      state.isAuth = true;
      state.isLoading = false;
    },
    [signout.fulfilled]: (state, action) => {
      state.token = null;
      state.refreshToken = null;
      state.isAuth = false;
      state.isLoading = false;
    },
  },
});

export const { setToken, setRefreshToken } = auth.actions;

export default auth.reducer;
