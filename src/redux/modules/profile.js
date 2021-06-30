import { profileAPI } from 'api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions types
export const GET_PROFILE = 'profile/GET_PROFILE';
const EDIT_PROFILE = 'profile/UPDATE_PROFILE';
const GET_AVAILABLE_SKILLS = 'profile/GET_AVAILABLE_SKILLS';

// Actions
export const editProfile = createAsyncThunk(
  EDIT_PROFILE,
  async (credentials, { rejectWithValue }) => {
    try {
      await profileAPI.editProfile(credentials);
      return credentials;
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
  async (credentials, { rejectWithValue }) => {
    try {
      return await profileAPI.getAvailableSkills();
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const profile = createSlice({
  name: 'profile',
  initialState: {
    isLoading: false,
    profile: null,
    availableSkills: [],
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profile = action.payload.profile;
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
      state.profile = {
        ...state.profile,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        skills: [...action.payload.skills],
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
      state.availableSkills = [...action.payload];
      state.isLoading = false;
    },
  },
});

export const { setProfile } = profile.actions;

export default profile.reducer;
