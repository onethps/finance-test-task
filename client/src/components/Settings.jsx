import React, { useState } from "react";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import { socket } from "../lib/socket";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Settings() {
  const [inteval, setInterval] = useState("");
  const [newTicker, setNewTicker] = useState("");

  const handleAddNewTicker = () => {
    socket.emit("addItem", newTicker);
    setNewTicker("");
  };

  const handleChangeInterval = () => {
    socket.emit("setInterval", inteval);
    setInterval("");
  };

  return (
    <Stack
      mt="30px"
      flexDirection="row"
      gap="20px"
      justifyContent="space-between"
    >
      <Box>
        <TextField
          variant="standard"
          label="Add Ticket"
          value={newTicker}
          onChange={(event) => {
            setNewTicker(event.target.value);
          }}
        />
        <IconButton size="large" onClick={handleAddNewTicker}>
          <AddCircleIcon />
        </IconButton>
      </Box>

      <Box>
        <TextField
          variant="standard"
          label="Set Interval"
          value={inteval}
          onChange={(event) => {
            setInterval(event.target.value);
          }}
          type="number"
        />
        <IconButton size="large" onClick={handleChangeInterval}>
          <AddCircleIcon />
        </IconButton>
      </Box>
    </Stack>
  );
}

export default Settings;
