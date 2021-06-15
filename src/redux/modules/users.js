import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { usersAPI } from '../../api';

const FETCH_USERS = 'usersTable/FETCH_USERS';
// const ADD_USER = 'usersTable/ADD_USER';
// const EDIT_USER = 'usersTable/EDIT_USER';
// const DELETE_USER = 'usersTable/DELETE_USER';
// const ISLOADING_UESER = 'projectsTable/ISLOADING_UESER';

// Actions
export const fetchUsers = createAsyncThunk(FETCH_USERS, async (_, thunkApi) => {
  try {
    const response = await usersAPI.fetchUsers();
    return response.data.users;
  } catch (err) {
    return thunkApi.rejectedWithValue(err.response.data);
  }
});

export const usersTableSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.users += 1;
    },
    deleteUser: (state, action) => {},
    editUser: (state, action) => {},
    setIsLoading: (state, action) => {},
  },
  extraReducers: {
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
  },
});

export const { addUser, editUser, deleteUser } = usersTableSlice.actions;

export default usersTableSlice.reducer;
