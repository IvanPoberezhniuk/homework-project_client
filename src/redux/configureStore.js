import { configureStore } from '@reduxjs/toolkit';
import { auth, projects, users } from './modules';
import thunk from 'redux-thunk';

const reducer = { auth, projects, users };
const middleWare = [thunk];

export default configureStore({
  reducer,
  middleWare,
});
