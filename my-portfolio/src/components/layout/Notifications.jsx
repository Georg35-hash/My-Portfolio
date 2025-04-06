import React from "react";
import { Snackbar, Alert } from "@mui/material";

export default function Notification({ open, onClose, message, severity }) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{
        position: "fixed",
        right: 20,
        top: 20,
        zIndex: 10000,
      }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
