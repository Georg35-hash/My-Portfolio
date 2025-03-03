import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedText = ({ text, color }) => (
    <motion.span
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
            },
        }}
        style={{
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "monospace",
            color,
            display: "inline-block",
        }}
    >
        {text.split("").map((char, index) => (
            <motion.span
                key={index}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
            >
                {char}
            </motion.span>
        ))}
    </motion.span>
);

function AboutMe() {
    const firstPart = "Hi there. ";
    const secondPart = "I'm Heorhii Vasyliev";

    return (
        <Box component="section"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                flexDirection: "column",
                textAlign: "inherit",
                gap: 2
            }}
        >
            <Box sx={{ display: "flex", gap: 1 }}>
                <AnimatedText text={firstPart} color="orange" />
                <AnimatedText text={secondPart} />
            </Box>

            <Typography sx={{ maxWidth: 440, textAlign: "center" }}>
                I'm a Web Developer and IT Specialist focused on learning new
                technologies and sharing knowledge with others.
            </Typography>

            
            <img
                src="../../src/assets/image/photo.jpg"
                alt="photo-profile"
                style={{
                    width: 200,
                    height: "auto",
                    borderRadius: 8,
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                }}
            />
        </Box>
    );
}

export default AboutMe;
