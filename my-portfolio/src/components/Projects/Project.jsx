import { Card, CardMedia, CardContent, CardActions, Button, Typography, Box } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

export default function Project({ project }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            sx={{
                cursor: "pointer",
                width: { xs: '250px', sm: '250px', md: '250px' },
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: "16px",
                boxShadow: 3,
                overflow: "hidden",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                },
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Box sx={{ position: "relative", overflow: "hidden" }}>
                <CardMedia
                    sx={{
                        height: 200,
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        transition: "filter 0.3s ease",
                        filter: hovered ? "brightness(0.7)" : "brightness(1)",
                    }}
                    image={project.image}
                    title={project.name}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        flexDirection: { xs: 'column', sm: 'column' },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: hovered ? 1 : 0,
                        transition: "opacity 0.3s ease",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#fff",
                        padding: 2,
                        textAlign: "center",
                    }}
                >
                    <Typography variant="body2">{project.desc}</Typography>
                </Box>
            </Box>
            <CardContent>
                <Typography
                    gutterBottom
                    component="div"
                    sx={{
                        background: "linear-gradient(45deg,#ED5F44,#587C78)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                        fontSize: 15
                    }}
                >
                    {project.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    startIcon={<ShareIcon />}
                    sx={{
                        fontSize: 15,
                        color: (theme) => theme.palette.customColor.main
                    }}
                >
                    Share
                </Button>

                <Button
                    size="small"
                    startIcon={<InfoIcon />}
                    sx={{
                        fontSize: 15,
                        color: (theme) => theme.palette.customColor.main
                    }}
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
