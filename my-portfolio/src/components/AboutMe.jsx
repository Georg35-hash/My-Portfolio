import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedText = ({ text, color }) => (
    <Box
        component={motion.span}
        initial="hidden"
        animate="visible"
        variants={{
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
            },
        }}
        sx={{ color, fontSize: { xs: "20px", sm: "24px", md: "26px" }, fontWeight: "bold", fontFamily: "monospace" }}
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
    </Box>
);

export default function AboutMe() {
    const firstPart = "Hi there. ";
    const secondPart = "I'm Heorhii Vasyliev";

    return (
        <Box
            component="section"
            sx={{   
                marginTop: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" }, 
                flexWrap: "wrap",
                gap: 4,
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                    <AnimatedText text={firstPart} color="#ED5F44" />
                    <AnimatedText text={secondPart} color="#E4C85A"/>
                </Box>

                <Typography component='p' sx={{ maxWidth: 360, marginTop: 2, fontSize: { xs: "14px", sm: "16px", md: "20px" }, textAlign:{xs:'center', sm:'center', md:'left'}}} >
                    I'm a Web Developer and IT Specialist focused on learning new
                    technologies and sharing knowledge with others.
                </Typography>
            </Box>

            <Box sx={{ width: { xs: 120, sm: 150, md: 200 } }}> 
                <img
                    src="../../src/assets/image/photo.jpg"
                    alt="photo-profile"
                    style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 8,
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                />
            </Box>
        </Box>
    );
}
