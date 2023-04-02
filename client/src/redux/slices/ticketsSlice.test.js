import ticketsSlice from "./ticketsSlice";

describe("tickets reducer", () => {
  const previousState = {
    isEstablishingConnection: false,
    isConnected: false,
    tickets: [],
  };

  it("should change connection status", () => {
    expect(
      ticketsSlice.reducer(
        previousState,
        ticketsSlice.actions.startConnecting()
      )
    ).toEqual({
      isConnected: false,
      isEstablishingConnection: true,
      tickets: [],
    });
  });

  it("should change connection on stop connections", () => {
    expect(
      ticketsSlice.reducer(previousState, ticketsSlice.actions.stopConnecting())
    ).toEqual(previousState);
  });

  it("should change connection on stop", () => {
    const testData = [
      {
        ticket: "V",
        price: "222$",
      },
    ];

    const afterReducerOperation = ticketsSlice.reducer(
      previousState,
      ticketsSlice.actions.receiveAllTickets(testData)
    );

    expect(afterReducerOperation.tickets.length).toBe(1);
  });
});
