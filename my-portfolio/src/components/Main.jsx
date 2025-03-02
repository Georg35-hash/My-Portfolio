import { motion } from "framer-motion";
import { Box } from '@mui/material';
const text = "Hi there ," + "i'm Heorhii" + "Vasyliev...";

const TypingEffect = () => {
    return (
        <Box>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 1 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1, // Delay
                        },
                    },
                }}
                style={{ fontSize: "24px", fontWeight: "bold", fontFamily: "monospace", display: 'flex', justifyContent: 'center' }}
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
            </motion.div>
        </Box>
    );
};

export default TypingEffect;
