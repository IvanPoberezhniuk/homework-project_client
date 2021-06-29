import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import { auth, projects, users } from './modules';

const reducer = { auth, projects, users };
const middleWare = [thunk];

export default configureStore({
  reducer,
  middleWare,
});
