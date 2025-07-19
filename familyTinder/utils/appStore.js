import {configureStore} from '@reduxjs/toolkit';
import connectionReducer from './connectionSlice';

const appStore = configureStore({
  reducer: {}
});

export default appStore;
