import Project from "./Project";
import { Box, Typography } from "@mui/material";
import bedLinenShop from "../../assets/myprojects/bed-linen-shop.png";
import petShop from "../../assets/myprojects/pet-shop.png";

export default function MyProjects() {
  const projectsList = [
    {
      id: 1,
      title: "Bed Linen Shop",
      image: bedLinenShop,
      desc: "Online store for bed linen products",
    },
    {
      id: 2,
      title: "Pet Shop",
      image: petShop,
      desc: "Online store for pet products. This project includes working with Redux, Axios, and React Router.",
    },
  ];

  return (
    <Box sx={{ display: "block", marginTop: "20px" }} component="section">
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
          <Project key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
}
