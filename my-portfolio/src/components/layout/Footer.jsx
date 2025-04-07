import {
  Box,
  Button,
  OutlinedInput,
  Typography,
  CardContent,
  Card,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Notification from "./Notifications";
import gitHub from "../../assets/footer/git-hub.svg";
import instagram from "../../assets/footer/instagram.svg";
import linkedIn from "../../assets/footer/linked-in.svg";
export default function Footer() {
  const [notificationOpen, setNotificationOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    setNotificationOpen(true);
    reset();
  };

  return (
    <Box component="footer">
      <Card variant="outlined" sx={{ mt: 4 }}>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
              gap={2}
            >
              <Box textAlign={{ xs: "center", sm: "left" }}>
                <Typography variant="h6" gutterBottom>
                  Subscribe to my updates
                </Typography>
                <Typography color="text.secondary" maxWidth={300}>
                  Get the latest news about my projects and updates.
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={1}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                <OutlinedInput
                  placeholder="Enter your email"
                  fullWidth
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                  error={!!errors.email}
                />
                {errors.email && (
                  <Typography variant="caption" color="error">
                    {errors.email.message}
                  </Typography>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<EmailIcon />}
                  sx={{
                    width: "100%",
                    backgroundColor: (theme) => theme.palette.customColor.main,
                    "&:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.customColor.dark,
                    },
                  }}
                >
                  Subscribe
                </Button>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign="center"
                >
                  We care about your security. <b>Read our privacy policy.</b>
                </Typography>
              </Box>
            </Box>
          </form>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex ", mt: 4, justifyContent: "space-between" }}>
        <Typography>© 2025 Heorhii Vasyliev All rights reserved.</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            "& a img": {
              width: 32,
              height: 32,
              transition: "transform 0.3s ease",
              "&:hover": {
                animation: "wiggleRotate 0.6s ease-in-out",
              },
            },
            "@keyframes wiggleRotate": {
              "0%": { transform: "rotate(0deg) translateY(0)" },
              "20%": { transform: "rotate(-10deg) translateY(-2px)" },
              "40%": { transform: "rotate(10deg) translateY(-2px)" },
              "60%": { transform: "rotate(-6deg) translateY(0)" },
              "80%": { transform: "rotate(6deg) translateY(1px)" },
              "100%": { transform: "rotate(0deg) translateY(0)" },
            },
          }}
        >
          <a
            href="https://www.instagram.com/_geraldus_?igsh=N21yNXZ4ZGM1ZTNr&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://github.com/Georg35-hash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHub} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/heorhii-vasyliev-6a4957300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedIn} alt="LinkedIn" />
          </a>
        </Box>
      </Box>
      <Notification
        open={notificationOpen}
        message="Subscription successful!"
        severity="success"
        onClose={() => setNotificationOpen(false)}
      />
    </Box>
  );
}
