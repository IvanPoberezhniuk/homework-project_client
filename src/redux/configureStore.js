import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import { auth, profile, projects, users } from './modules';

const reducer = { auth, projects, users, profile };
const middleWare = [thunk];

export default configureStore({
  reducer,
  middleWare,
});
