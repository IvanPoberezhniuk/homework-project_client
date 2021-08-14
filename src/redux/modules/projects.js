import { projectsAPI } from 'api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
      let projectsResponse = await projectsAPI.fetchProjects();
      let projects = projectsResponse.data;

      let requests = projects.map(async (p) => {
        let teamResponse = await projectsAPI.fetchProjectTeam(p.projectId);
        return {...p, team: [...teamResponse.data]}
      });
      let result = Promise.all(requests);

      return result;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const fetchProject = createAsyncThunk(
  FETCH_PROJECT,
  async (payload, thunkApi) => {
   // const { id } = payload;
    try {
      console.log('payl fetch');
      console.log(payload);
      const response = await projectsAPI.fetchProjectById(payload.id);
      console.log('res');
      console.log(response);
      if (response.status === 200) {
        const teamResponse = await projectsAPI.fetchProjectTeam(payload.id);
        console.log('team');
        console.log(teamResponse);
        return {...response.data, team: [...teamResponse.data]}
      }
      return response.data;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

export const createProject = createAsyncThunk(
  ADD_PROJECT,
  async (payload, {rejectWithValue, dispatch}) => {;
    //payload = projectName, users
    try {
      const projectResponse = await projectsAPI.createProject({
        projectName: payload.projectName,
      });
      if (+projectResponse.status === 201) {
         payload.users.forEach(async (user) => {
          await projectsAPI.addEmployee(projectResponse.data.projectId, { userId: user.userId });
        });
        dispatch(fetchProjects());
      }

    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const editProject = createAsyncThunk(
  EDIT_PROJECT,
  async (payload, thunkApi) => {
    console.log('edit');
    console.log(payload);
    try {
      //const response = await projectsAPI.editProject(project);
      //return response.data.projects;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
);

/* export const editProjectStatus = createAsyncThunk(
  EDIT_PROJECT_STATUS,
  async (payload, thunkApi) => {
    try {
      const response = await projectsAPI.editProjectStatus(payload);
      return response.status;
    } catch (err) {
      return thunkApi.rejectedWithValue(err.response.data);
    }
  }
); */

export const deleteProject = createAsyncThunk(
  DELETE_PROJECT,
  async (payload, {rejectWithValue, dispatch}) => {
    try {
      const response = await projectsAPI.deleteProjectById(payload.id);
      if (+response.status === 204) {
        dispatch(fetchProjects());
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const startProject = createAsyncThunk(
  START_PROJECT,
  async (payload, {rejectWithValue, dispatch}) => {
    try {
      const response = await projectsAPI.projectStart(payload.id);
      if (response.status === 200) {
        dispatch(fetchProjects());
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const finishProject = createAsyncThunk(
  FINISH_PROJECT,
  async (payload, {rejectWithValue, dispatch}) => {
    try {
      const response = await projectsAPI.projectFinish(payload.id);
      if (response.status === 200) {
        dispatch(fetchProjects());
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
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
    [createProject.pending]: (state) => {
      state.isLoading = true;
    },
    [createProject.fulfilled]: (state, action) => {
     // state.list = action.payload;
      state.isLoading = false;
    },
    [createProject.rejected]: (state) => {
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
      if (+action.payload === 200) {
        fetchProjects();
      }
      state.isLoading = false;
    },
    // finishProject
    [finishProject.pending]: (state) => {
      state.isLoading = true;
    },
    [finishProject.fulfilled]: (state, action) => {
      //state.list = action.payload;
      state.isLoading = false;
    },
    [finishProject.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { eraseCurrentProject } = projectsTableSlice.actions;

export default projectsTableSlice.reducer;
