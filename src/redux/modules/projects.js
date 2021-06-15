import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { projectsAPI } from '../../api';

// Actions types
export const FETCH_PROJECTS = 'projectsTable/FETCH_PROJECTS';
export const ADD_PROJECT = 'projectsTable/ADD_PROJECTS';
export const EDIT_PROJECT = 'projectsTable/EDIT_PROJECTS';
export const DELETE_PROJECT = 'projectsTable/DELETE_PROJECTS';

// Actions
export const fetchProjects = createAsyncThunk(
  FETCH_PROJECTS,
  async (_, thunkApi) => {
    try {
      const response = await projectsAPI.fetchProjects();
      return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const addProject = createAsyncThunk(
  ADD_PROJECT,
  async (project, thunkApi) => {
    try {
      console.log(11231231232, project);
      const response = await projectsAPI.addProject(project);
      return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const editProject = createAsyncThunk(
  EDIT_PROJECT,
  async (project, thunkApi) => {
    try {
      const response = await projectsAPI.editProject(project);
      return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  DELETE_PROJECT,
  async (id, thunkApi) => {
    try {
      const response = await projectsAPI.deleteProject(id);
      return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const projectsTableSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [addProject.pending]: (state) => {
      state.isLoading = true;
    },
    [addProject.fulfilled]: (state, action) => {
      state.list = action.payload;
      console.log(action);
      state.isLoading = false;
    },
    [addProject.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [editProject.pending]: (state) => {
      state.isLoading = true;
    },
    [editProject.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [editProject.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [deleteProject.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProject.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [deleteProject.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default projectsTableSlice.reducer;
