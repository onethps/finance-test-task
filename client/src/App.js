import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import useActions from "./hooks/useActions";
import TicketsTable from "./components/TicketsTable";
import { socket } from "./lib/socket";

function App() {
  const { startConnecting, stopConnecting } = useActions();
  const tickets = useSelector((state) => state.tickets.tickets);
  const [inteval, setInterval] = useState(0);
  const [newTicket, setNewTicket] = useState("");

  React.useEffect(() => {
    startConnecting();
  }, []);

  return (
    <Container>
      <TicketsTable data={tickets} />
      <Stack mt="30px" flexDirection="row" gap="20px">
        <Box>
          <Typography variant="h5">Add new ticket</Typography>
          <TextField
            label="Ticker"
            value={newTicket}
            onChange={(event) => {
              setNewTicket(event.target.value);
            }}
          />{" "}
          <Button
            variant="contained"
            onClick={() => socket.emit("addItem", newTicket)}
          >
            Set
          </Button>
        </Box>
        <Box>
          <Typography variant="h5">Set interval</Typography>
          <TextField
            value={inteval}
            onChange={(event) => {
              setInterval(event.target.value);
            }}
            label="Ticker"
            type="number"
          />
          <Button
            variant="contained"
            onClick={() => socket.emit("setInterval", inteval)}
          >
            Set
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
