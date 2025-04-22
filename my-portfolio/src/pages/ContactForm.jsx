import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import Notification from "../components/layouts/Notifications";
import { useState } from "react";
export default function ContactForm() {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setNotificationOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        p: 2,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500, width: "100%" }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontFamily="Roboto"
        >
          Contact Me
        </Typography>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            fullWidth
            label="Name"
            {...register("name", { required: "Name is required" })}
            margin="normal"
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            margin="normal"
            error={!!errors.message}
            helperText={errors.message?.message}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#ED5F44" }}
          >
            Send
          </Button>
        </Box>
      </Paper>
      <Notification
        open={notificationOpen}
        message={"Message sent successfully!"}
        severity="success"
        onClose={() => setNotificationOpen(false)}
      />
    </Box>
  );
}
