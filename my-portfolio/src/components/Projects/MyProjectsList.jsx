import Project from "./Project";
import { Box, Typography } from "@mui/material";
import bedLinenShop from "../../assets/myprojects/bed-linen-shop.png";
import petShop from "../../assets/myprojects/pet-shop.png";

export default function MyProjectsList() {
  const projectsList = [
    {
      id: 1,
      title: "Bed Linen Shop",
      image: bedLinenShop,
      desc: "Online store for bed linen products. This project includes HTML&&CSS, JS, vite as package manager",
      githubLink: "https://github.com/Georg35-hash/bed-linen-shop1",
      liveDemoLink: "https://bed-linen-shop1.vercel.app/",
    },
    {
      id: 2,
      title: "Pet Shop",
      image: petShop,
      desc: "Online store for pet products. This project includes working with Zustand, Axios, and React Router.",
      githubLink: "https://github.com/Georg35-hash/Pet-shop/tree/main/pet-shop",
      liveDemoLink: "https://pet-shop-react-ebon.vercel.app/",
    },
  ];

  return (
    <Box sx={{ display: "block", margin: "20px 0 20px 0" }} component="section">
      <Typography
        variant="h3"
        fontFamily="Roboto"
        sx={{ textAlign: "center", marginBottom: { xs: 3, sm: 4, md: 5 } }}
      >
        My Projects
      </Typography>

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
          <Project
            key={project.id}
            project={{
              ...project, // Spread operator to include all properties
              githubLink: project.githubLink,
              liveDemoLink: project.liveDemoLink,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
