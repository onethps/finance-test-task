import React, { useState } from "react";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import { socket } from "../lib/socket";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Settings() {
  const [inteval, setInterval] = useState("");
  const [currentInterval, setCurrentInterval] = useState(5000);
  const [newTicker, setNewTicker] = useState("");

  const handleAddNewTicker = () => {
    socket.emit("addItem", newTicker);
    setNewTicker("");
  };

  const handleChangeInterval = () => {
    socket.emit("setInterval", inteval);
    setCurrentInterval(inteval);
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
        <Stack mb="20px" flexDirection="row" alignItems="center">
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
        </Stack>

        <Typography variant="body2" color="grey">
          Current Interval {currentInterval}
        </Typography>
      </Box>
    </Stack>
  );
}

export default Settings;
