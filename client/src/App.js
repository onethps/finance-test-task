import React, { useState } from "react";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import useActions from "./hooks/useActions";
import TicketsTable from "./components/TicketsTable";
import Settings from "./components/Settings";

function App() {
  const { startConnecting, stopConnecting } = useActions();
  const tickets = useSelector((state) => state.tickets.tickets);

  React.useEffect(() => {
    startConnecting();

    return () => {
      stopConnecting();
    };
  }, []);

  return (
    <Container>
      <TicketsTable data={tickets} />
      <Settings />
    </Container>
  );
}

export default App;
