import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReduce from "./feedSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReduce,
  },
});

export default appStore;
