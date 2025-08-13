import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import feedReducer from './feedSlice'; // Import the feed slice if needed

const appStore = configureStore({
  reducer: {
    user  : userReducer,
    feed : feedReducer, // Add the feed slice to the store
  }
});

export default appStore;
