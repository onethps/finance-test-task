import { configureStore } from '@reduxjs/toolkit';

import ticketsSocketMiddleware from './middleware/ticketsSocketMiddleware';
import ticketsSlice from './slices/ticketsSlice';

const store = configureStore({
  reducer: {
    tickets: ticketsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ticketsSocketMiddleware),
});

export default store;
