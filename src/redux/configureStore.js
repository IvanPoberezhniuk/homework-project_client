import { configureStore } from '@reduxjs/toolkit';
import { auth, projectsTable, usersTable } from './modules';
import thunk from 'redux-thunk';

const reducer = { auth, projectsTable, usersTable };
const middleWare = [thunk];

export default configureStore({
  reducer,
  middleWare,
});
