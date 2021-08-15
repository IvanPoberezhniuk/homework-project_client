import { usersAPI } from 'api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_USERS = 'usersTable/FETCH_USERS';
const EDIT_USER = 'usersTable/EDIT_USER';
const DELETE_USER = 'usersTable/DELETE_USER';

// Actions
export const fetchUsers = createAsyncThunk(FETCH_USERS, async (_, thunkApi) => {
  try {
    const response = await usersAPI.fetchUsers();
    return response.data;
  } catch (err) {
    return thunkApi.rejectedWithValue(err.response.data);
  }
});

export const editUser = createAsyncThunk(EDIT_USER, async (user, thunkApi) => {
  try {
    const response = await usersAPI.editUser(user);
    return response.data.users;
  } catch (err) {
    return thunkApi.rejectedWithValue(err.response.data);
  }
});

export const deleteUser = createAsyncThunk(
  DELETE_USER,
  async (payload, thunkApi) => {
    try {
      const response = await usersAPI.deleteUser(payload.id);
      return response.data.users;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const usersTableSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    // fetchUsers
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [fetchUsers.rejected]: (state) => {
      state.isLoading = false;
    },
    // editUser
    [editUser.pending]: (state) => {
      state.isLoading = true;
    },
    [editUser.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [editUser.rejected]: (state) => {
      state.isLoading = false;
    },
    // deleteUser
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersTableSlice.reducer;
