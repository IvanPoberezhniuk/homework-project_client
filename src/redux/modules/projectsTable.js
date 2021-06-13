import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { projectsAPI } from '../../api';

export const FETCH_PROJECTS = 'projectsTable/FETCH_PROJECTS';

export const fetchProjects = createAsyncThunk(
  FETCH_PROJECTS,
  async ({ rejectWithValue }) => {
    try {
      const response = await projectsAPI.fetchProjects();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const projectsTableSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [{ projectName: 'first' }],
    isLoading: false,
  },
  reducers: {
    addProject: (state, action) => {
      state.list.push({ name: 'test' });
    },
    deleteProject: (state, action) => {},
    editProject: (state, action) => {},
    startProject: (state, action) => {},
    finishProject: (state, action) => {},
  },
  extraReducers: {
    [fetchProjects.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [fetchProjects.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {
  addProject,
  editProject,
  deleteProject,
  startProject,
  finishProject,
} = projectsTableSlice.actions;

export default projectsTableSlice.reducer;
