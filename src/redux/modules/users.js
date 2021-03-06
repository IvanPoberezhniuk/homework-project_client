import { usersAPI } from 'api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_USERS = 'usersTable/FETCH_USERS';
const EDIT_USER = 'usersTable/EDIT_USER';
const DELETE_USER = 'usersTable/DELETE_USER';
const GET_USER_PROJECTS = 'usersTable/GET_USER_PROJECTS';
const GET_ALL_USERS_PROJECTS = 'usersTable/GET_ALL_USERS_PROJECTS';
const GET_USER_SKILSS = 'usersTable/GET_USER_SKILSS';

// Actions
export const fetchUsers = createAsyncThunk(FETCH_USERS, async (_, thunkApi) => {
  try {
    const response = await usersAPI.fetchUsers();
    return response.data;
  } catch (err) {
    return thunkApi.rejectedWithValue(err.response.data);
  }
});

export const editUser = createAsyncThunk(EDIT_USER, async (payload, {dispatch, rejectWithValue}) => {
  try {
    const response = await usersAPI.editUser(payload.userId, {roleName: payload.role});
    dispatch(fetchUsers());
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
}
);

export const deleteUser = createAsyncThunk(
  DELETE_USER,
  async (payload, {dispatch, rejectWithValue}) => {
    try {
      const response = await usersAPI.deleteUser(payload.id);
      if(response.status === 204){
        dispatch(fetchUsers());
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserProjects = createAsyncThunk(
  GET_USER_PROJECTS,
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await usersAPI.getProjects(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAllUsersProjects = createAsyncThunk(
  GET_ALL_USERS_PROJECTS,
  async (users, { dispatch, rejectWithValue }) => {
    try {
      const requests = users.map(async (user) => {
        const projectsRes = await usersAPI.getProjects(user.userId);
        const busy = projectsRes.data.length >= 3 ? true : false;
        return { ...user, projects: projectsRes.data, busy };
      });

      return Promise.all(requests);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserSkills = createAsyncThunk(
  GET_USER_SKILSS,
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await usersAPI.getUserSkills(id);
      return response.data.skills;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const usersTableSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    currentUserProjects: [],
    skills: [],
    userSkills: [],
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
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state) => {
      state.isLoading = false;
    },
    //get user projects
    [getUserProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserProjects.fulfilled]: (state, action) => {
      state.currentUserProjects = action.payload;
      state.isLoading = false;
    },
    [getUserProjects.rejected]: (state) => {
      state.isLoading = false;
    },
    //getAllUsersProjects
    [getAllUsersProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsersProjects.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [getAllUsersProjects.rejected]: (state) => {
      state.isLoading = false;
    },
    //getUserSkills
    [getUserSkills.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserSkills.fulfilled]: (state, action) => {
      state.userSkills = action.payload;
    },
    [getUserSkills.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default usersTableSlice.reducer;
