import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import Notification from "../components/layout/Notifications";
import { useState } from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ width: "100%", maxWidth: 500 }}
      >
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontFamily="Roboto"
          >
            Contact Me
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <motion.div variants={itemVariants}>
              <TextField
                fullWidth
                label="Name"
                {...register("name", { required: "Name is required" })}
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
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
            </motion.div>

            <motion.div variants={itemVariants}>
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
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, backgroundColor: "#ED5F44" }}
              >
                Send
              </Button>
            </motion.div>
          </Box>
        </Paper>
      </motion.div>

      <Notification
        open={notificationOpen}
        message={"Message sent successfully!"}
        severity="success"
        onClose={() => setNotificationOpen(false)}
      />
    </Box>
  );
}
