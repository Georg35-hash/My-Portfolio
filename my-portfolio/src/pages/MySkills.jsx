import { Box, Typography, Button, Grid2 } from "@mui/material";
import { motion } from "framer-motion";

import htmlIcon from "../assets/myskills/html.svg";
import cssIcon from "../assets/myskills/css.svg";
import jsIcon from "../assets/myskills/js.svg";
import reactIcon from "../assets/myskills/react.svg";
import gitIcon from "../assets/myskills/git.svg";
import nodeIcon from "../assets/myskills/node.svg";
import dockerIcon from "../assets/myskills/docker.svg";
import awsIcon from "../assets/myskills/aws.svg";

import {
  containerVariants,
  itemVariants,
} from "../shared/animations/motionVariants";

const imgStyle = { minWidth: "60px", height: "60px" };

const skills = [
  { id: 1, src: htmlIcon, label: "HTML" },
  { id: 2, src: cssIcon, label: "CSS" },
  { id: 3, src: jsIcon, label: "JS" },
  { id: 4, src: reactIcon, label: "REACT" },
  { id: 5, src: gitIcon, label: "GIT" },
  { id: 6, src: nodeIcon, label: "NODE" },
  { id: 7, src: dockerIcon, label: "DOCKER" },
  { id: 8, src: awsIcon, label: "AWS" },
];

export default function MySkills() {
  return (
    <Box sx={{ marginTop: "50px" }} component="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h3"
            fontFamily={"Roboto"}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            My Skills
          </Typography>
        </motion.div>

        <Grid2
          container
          spacing={2}
          sx={{ justifyContent: "center", maxWidth: "450px", margin: "auto" }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.id} variants={itemVariants}>
              <Grid2
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button>
                  <img src={skill.src} alt={skill.label} style={imgStyle} />
                </Button>
                <Typography component="p" sx={{ marginTop: "5px" }}>
                  {skill.label}
                </Typography>
              </Grid2>
            </motion.div>
          ))}
        </Grid2>
      </motion.div>
    </Box>
  );
}
