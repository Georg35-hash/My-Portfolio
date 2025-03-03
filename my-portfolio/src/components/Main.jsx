import { Box } from "@mui/material";
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyProjects from './MyProjects';

export default function Main() {

    return (
        <Box  component='main' >
            <AboutMe components='section'/>
            <MySkills component='section'/>
            <MyProjects/>
        </Box>
    );
}

