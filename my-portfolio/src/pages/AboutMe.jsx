import { Box, Typography, Button, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import myPhoto from "../assets/image/photo.jpg";
import { useEffect, useState } from "react";

const TypingEffect = ({
  staticText,
  animatedText,
  staticColor,
  animatedColor,
  pipeColor,
}) => {
  const [visibleLength, setVisibleLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(
      () => {
        setVisibleLength((prev) => {
          if (!isDeleting) {
            if (prev < animatedText.length) return prev + 1;

            setPause(true);
            setTimeout(() => {
              setIsDeleting(true);
              setPause(false);
            }, 4000);

            clearInterval(interval);
            return prev;
          } else {
            if (prev > 0) return prev - 1;
            setIsDeleting(false);
            return prev;
          }
        });
      },
      isDeleting ? 50 : 100
    );

    return () => clearInterval(interval);
  }, [animatedText, isDeleting, pause]);

  return (
    <Box
      sx={{
        display: "inline-flex",
        fontSize: { xs: "20px", sm: "24px", md: "26px" },
        fontWeight: "bold",
        fontFamily: "monospace",
        minWidth: `${staticText.length + animatedText.length}ch`,
      }}
    >
      <span style={{ color: staticColor }}>{staticText}</span>
      <span style={{ color: animatedColor }}>
        {animatedText.slice(0, visibleLength)}
      </span>
      <motion.span
        key={visibleLength}
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ color: pipeColor }}
      >
        |
      </motion.span>
    </Box>
  );
};

export default function AboutMe() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        flexWrap: "wrap",
        gap: 4,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <TypingEffect
            staticText="Hi there. "
            animatedText="I'm Heorhii Vasyliev"
            staticColor="#ED5F44"
            animatedColor="#E4C85A"
            pipeColor="black"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            component="p"
            sx={{
              maxWidth: { xs: 300, sm: 360, md: 480 },
              marginTop: 2,
              fontSize: { xs: "14px", sm: "16px", md: "20px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            I'm a Web Developer and IT Specialist focused on learning new
            technologies and sharing knowledge with others.
          </Typography>
        </Box>
        <Box
          sx={{ marginTop: "20px", textAlign: { xs: "center", md: "left" } }}
        >
          <a
            href="https://app.cal.com/heorhii"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              startIcon={<CalendarMonthIcon />}
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                borderRadius: "24px",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 20px",
                color: "#ff7300",
                borderColor: "#ff7300",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#ff7300",
                  color: "#fff",
                  borderColor: "#ff7300",
                  boxShadow: "0px 4px 15px rgba(255, 115, 0, 0.4)",
                },
              }}
            >
              Schedule a call
            </Button>
          </a>
        </Box>
      </Box>

      <Box>
        <Avatar
          alt="Heorhii Vasyliev"
          src={myPhoto}
          sx={{ width: 160, height: 160 }}
        />
      </Box>
    </Box>
  );
}
