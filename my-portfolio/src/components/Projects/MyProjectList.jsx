import Project from "./Project";
import { Box, Typography } from "@mui/material";
import bedLinenShop from "../../assets/myprojects/bed-linen-shop.png";
import petShop from "../../assets/myprojects/pet-shop.png";

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

export default function MyProjectList() {
  return (
    <Box component="section" sx={{ margin: "20px 0" }}>
      <Typography variant="h3" sx={{ textAlign: "center", marginBottom: 5 }}>
        My Projects
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
        }}
      >
        {projectsList.map(({ id, githubLink, liveDemoLink, ...project }) => (
          <Project
            key={id}
            project={{ ...project, githubLink, liveDemoLink }}
          />
        ))}
      </Box>
    </Box>
  );
}
