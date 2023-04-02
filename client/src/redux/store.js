import { configureStore, combineReducers } from "@reduxjs/toolkit";

import ticketsSocketMiddleware from "./middleware/ticketsSocketMiddleware";
import ticketsSlice from "./slices/ticketsSlice";

const rootReducer = combineReducers({
  tickets: ticketsSlice.reducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ticketsSocketMiddleware),
  });
}

export const configuredStore = setupStore();
