import { createSlice } from '@reduxjs/toolkit';

// const ADD_USER = 'usersTable/ADD_USER';
// const EDIT_USER = 'usersTable/EDIT_USER';
// const DELETE_USER = 'usersTable/DELETE_USER';
// const ISLOADING_UESER = 'projectsTable/ISLOADING_UESER';

export const usersTableSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
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
});

export const { addUser, editUser, deleteUser } = usersTableSlice.actions;

export default usersTableSlice.reducer;
