import React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        m: "50px 0 50px 0",
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: "6rem", fontWeight: "bold", color: "#ED5F44" }}
      >
        404
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          backgroundColor: "#ED5F44",
          color: "#fff",
          padding: "10px 20px",
          "&:hover": {
            backgroundColor: "#c44f3b",
          },
        }}
      >
        Go to Homepage
      </Button>
    </Container>
  );
}
