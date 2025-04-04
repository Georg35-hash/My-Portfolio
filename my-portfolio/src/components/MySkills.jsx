import { Box, Grid2, Typography, Button } from "@mui/material";

const imgStyle = { minWidth: "60px", height: "60px" };

const skills = [
  { id: 1, src: "../../src/assets/myskills/html.svg", label: "HTML" },
  { id: 2, src: "../../src/assets/myskills/css.svg", label: "CSS" },
  { id: 3, src: "../../src/assets/myskills/js.svg", label: "JS" },
  { id: 4, src: "../../src/assets/myskills/react.svg", label: "REACT" },
  { id: 5, src: "../../src/assets/myskills/git.svg", label: "GIT" },
  { id: 6, src: "../../src/assets/myskills/node.svg", label: "NODE" },
  { id: 7, src: "../../src/assets/myskills/docker.svg", label: "DOCKER" },
  { id: 8, src: "../../src/assets/myskills/aws.svg", label: "AWS" },
];

export default function MySkills() {
  return (
    <Box sx={{ marginTop: "50px" }} component="section">
      <Typography
        variant="h3"
        fontFamily={"Roboto"}
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        My Skills
      </Typography>
      <Grid2
        container
        spacing={2}
        sx={{ justifyContent: "center", maxWidth: "450px", margin: "auto" }}
      >
        {skills.map((skill) => (
          <Grid2
            key={skill.id}
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
        ))}
      </Grid2>
    </Box>
  );
}
