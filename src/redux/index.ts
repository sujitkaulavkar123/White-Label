
import { configureStore } from '@reduxjs/toolkit'
import devToolsEnhancer from 'remote-redux-devtools';
import authReducer from "./authReducer";
import loaderReducer from "./loaderReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer,
  },
  enhancers: [devToolsEnhancer({ realtime: true })],
});

export { store };
export default store;
