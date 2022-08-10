
import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./authReducer";
import photoReducer from "./photoReducer";
import { photoRTKAPI } from './rtkQuery';

const store = configureStore({
  reducer: {
    auth: authReducer,
    photos: photoReducer,
    [photoRTKAPI.reducerPath]: photoRTKAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photoRTKAPI.middleware),
});

export type AppDispatch = typeof store.dispatch
export { store };
export default store;
