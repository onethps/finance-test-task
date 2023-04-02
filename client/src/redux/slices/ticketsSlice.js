import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEstablishingConnection: false,
  isConnected: false,
  tickets: [],
};

const ticketsSlice = createSlice({
  name: 'ticketsSlice',
  initialState,
  reducers: {
    startConnecting: (state) => {
      state.isEstablishingConnection = true;
    },
    stopConnecting: (state) => {
      state.isEstablishingConnection = false;
      state.isConnected = false;
    },
    receiveAllTickets: (state, action) => {
      state.tickets = action.payload;
    },
  },
});

export const ticketsActions = ticketsSlice.actions;

export default ticketsSlice;
