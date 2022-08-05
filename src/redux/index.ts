
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export type AppDispatch = typeof store.dispatch
export { store };
export default store;
