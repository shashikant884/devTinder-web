import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReduce from "./feedSlice";
import connectionReducer from "./connectionSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReduce,
    connections: connectionReducer,
  },
});

export default appStore;
