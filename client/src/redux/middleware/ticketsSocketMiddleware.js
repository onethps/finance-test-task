import { socket } from "../../lib/socket";

import { ticketsActions } from "../slices/ticketsSlice";

const ticketsSocketMiddleware = (store) => {
  return (next) => (action) => {
    if (ticketsActions.startConnecting.match(action)) {
      socket.on("connect", () => {
        socket.emit("start");
      });

      socket.on("ticker", (tickets) => {
        store.dispatch(ticketsActions.receiveAllTickets(tickets));
      });

      socket.on("disconnect", () => {
        store.dispatch(ticketsActions.stopConnecting());
      });
    }

    if (ticketsActions.stopConnecting.match(action)) {
      socket.on("disconnect", () => {
        store.dispatch(ticketsActions.stopConnecting());
      });

      socket.off();
    }

    next(action);
  };
};

export default ticketsSocketMiddleware;
