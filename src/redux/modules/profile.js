import { profileAPI } from 'api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions types
export const GET_PROFILE = 'profile/GET_PROFILE';
const EDIT_PROFILE = 'profile/UPDATE_PROFILE';
const GET_AVAILABLE_SKILLS = 'profile/GET_AVAILABLE_SKILLS';

// Actions
export const editProfile = createAsyncThunk(
  EDIT_PROFILE,
  async (credentials, { rejectWithValue, dispatch, getState }) => {
    try {
      const res = await profileAPI.editProfile(credentials);
      const state = getState();
      if(res.status === 204) {
        await dispatch(setProfile({...state.profile.userDTO, ...credentials}))
      }
      return {...state.profile.userDTO, ...credentials};
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const getProfile = createAsyncThunk(
  GET_PROFILE,
  async (credentials, { rejectWithValue }) => {
    try {
      return await profileAPI.getProfile(credentials.token);
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const getAvailableSkills = createAsyncThunk(
  GET_AVAILABLE_SKILLS,
  async (payload, { rejectWithValue }) => {
    try {
      const { skills } = await profileAPI.getAvailableSkills();
      return skills;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const profile = createSlice({
  name: 'profile',
  initialState: {
    isLoading: false,
    userDTO: JSON.parse(localStorage.getItem('userDTO')) || {},
    availableSkills: [],
  },
  reducers: {
    setProfile: (state, action) => {
      state.userDTO = {...action.payload};
      localStorage.setItem('userDTO', JSON.stringify({
        id: action.payload.id,
        firstName: action.payload.firstName, 
        lastName: action.payload.lastName,
        email: action.payload.email,
        rememberMe: action.payload.rememberMe,
        role: action.payload.role,
        roleId: action.payload.roleId,
      }));
    },
    deleteProfile: (state, action) => {
      state.userDTO = null;
    },
  },
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.userDTO = action.payload.profile;
      state.isLoading = false;
    },
    [getProfile.rejected]: (state) => {
      state.isLoading = false;
    },
    [editProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [editProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userDTO = {
        ...state.userDTO,
        ...action.payload,
      };
    },
    [editProfile.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAvailableSkills.pending]: (state) => {
      state.isLoading = true;
    },
    [getAvailableSkills.rejected]: (state) => {
      state.isLoading = false;
    },
    [getAvailableSkills.fulfilled]: (state, action) => {
      state.availableSkills = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setProfile, deleteProfile } = profile.actions;

export default profile.reducer;
