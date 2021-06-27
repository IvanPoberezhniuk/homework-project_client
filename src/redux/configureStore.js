import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import { auth, projects, users, profile } from './modules';

const reducer = { auth, projects, users, profile };
const middleWare = [thunk];

export default configureStore({
  reducer,
  middleWare,
});
