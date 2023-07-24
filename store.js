import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/userSlice";
// import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
