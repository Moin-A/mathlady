import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { loadInitialState } from "./Slices/dataReducer";
import { apiMiddleware } from "./middleware/setAttemptsMiddleware"

const store = configureStore({
  reducer: RootReducer,
  middleware: [...getDefaultMiddleware(), apiMiddleware],
});
store.dispatch(loadInitialState());

export default store;
