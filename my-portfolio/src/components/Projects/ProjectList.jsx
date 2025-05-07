import Project from "./Project";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import bedLinenShop from "../../assets/myprojects/bed-linen-shop.png";
import petShop from "../../assets/myprojects/pet-shop.png";
import {
  containerVariants,
  itemVariants,
} from "../../shared/animations/motionVariants";

const projectsList = [
  {
    id: 1,
    title: "Bed Linen Shop",
    image: bedLinenShop,
    desc: "Online store for bed linen products. This project includes HTML&&SCSS and JS, vite as package manager",
    githubLink: "https://github.com/Georg35-hash/bed-linen-shop1",
    liveDemoLink: "https://bed-linen-shop1.vercel.app/",
  },
  {
    id: 2,
    title: "Pet Shop",
    image: petShop,
    desc: "Online store for pet products. This project includes working with Zustand, Axios, and React Router, Express and Node JS",
    githubLink: "https://github.com/Georg35-hash/Pet-shop/tree/main/pet-shop",
    liveDemoLink: "https://pet-shop-react-ebon.vercel.app/",
  },
];

export default function ProjectList() {
  return (
    <Box
      sx={{ display: "block", margin: "20px 0 20px 0" }}
      component={motion.section}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Typography
          variant="h3"
          fontFamily="Roboto"
          sx={{ textAlign: "center", marginBottom: { xs: 3, sm: 4, md: 5 } }}
        >
          My Projects
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {projectsList.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Project
              project={{
                ...project,
                githubLink: project.githubLink,
                liveDemoLink: project.liveDemoLink,
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
