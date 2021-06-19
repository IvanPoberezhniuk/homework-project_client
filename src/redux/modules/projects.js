import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { projectsAPI } from '../../api';

// Actions types
export const FETCH_PROJECTS = 'projectsTable/FETCH_PROJECTS';
export const FETCH_PROJECT = 'projectsTable/FETCH_PROJECT';
export const ADD_PROJECT = 'projectsTable/ADD_PROJECT';
export const EDIT_PROJECT = 'projectsTable/EDIT_PROJECT';
export const EDIT_PROJECT_STATUS = 'projectsTable/EDIT_PROJECT_STATUS';
export const DELETE_PROJECT = 'projectsTable/DELETE_PROJECT';
export const START_PROJECT = 'projectsTable/START_PROJECT';
export const FINISH_PROJECT = 'projectsTable/FINISH_PROJECT';

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

export const fetchProject = createAsyncThunk(
  FETCH_PROJECT,
  async (project, thunkApi) => {
    const { id } = project;
    try {
      const response = await projectsAPI.fetchProjectById(id);
      return response.data.project;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const addProject = createAsyncThunk(
  ADD_PROJECT,
  async (id, thunkApi) => {
    try {
      const response = await projectsAPI.addProject(id);
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

export const editProjectStatus = createAsyncThunk(
  EDIT_PROJECT_STATUS,
  async (payload, thunkApi) => {
    try {
      const response = await projectsAPI.editProjectStatus(payload);
      return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  DELETE_PROJECT,
  async (payload, thunkApi) => {
    try {
      const response = await projectsAPI.deleteProjectById(payload);
      return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const startProject = createAsyncThunk(
  START_PROJECT,
  async (payload, thunkApi) => {
    try {
      const response = await projectsAPI.editProjectStatus(payload);
      return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);
export const finishProject = createAsyncThunk(
  FINISH_PROJECT,
  async (payload, thunkApi) => {
    try {
      const response = await projectsAPI.editProjectStatus(payload);
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
    current: {},
  },
  reducers: {
    eraseCurrentProject(state) {
      state.current = {};
    },
  },
  extraReducers: {
    // fetchProjects
    [fetchProjects.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [fetchProjects.rejected]: (state) => {
      state.isLoading = false;
    },
    // fetchProject
    [fetchProject.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProject.fulfilled]: (state, action) => {
      state.current = action.payload;
      state.isLoading = false;
    },
    [fetchProject.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // addProject
    [addProject.pending]: (state) => {
      state.isLoading = true;
    },
    [addProject.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [addProject.rejected]: (state) => {
      state.isLoading = false;
    },
    // editProject
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
    // deleteProject
    [deleteProject.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProject.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [deleteProject.rejected]: (state) => {
      state.isLoading = false;
    },
    // startProject
    [startProject.pending]: (state) => {
      state.isLoading = true;
    },
    [startProject.rejected]: (state) => {
      state.isLoading = false;
    },
    [startProject.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    // finishProject
    [finishProject.pending]: (state) => {
      state.isLoading = true;
    },
    [finishProject.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    },
    [finishProject.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { eraseCurrentProject } = projectsTableSlice.actions;

export default projectsTableSlice.reducer;
