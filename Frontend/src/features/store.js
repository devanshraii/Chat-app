import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./auth/authSlice";
import conversationsReducers from "./conversations/conversationsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducers,
    conversations: conversationsReducers,
  },
});
