import { createSlice } from '@reduxjs/toolkit';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    list: [{ name: 'first' }],
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
    setIsLoading: (state, action) => {},
  },
});

export const {
  addProject,
  editProject,
  deleteProject,
  startProject,
  finishProject,
} = auth.actions;

export default auth.reducer;
