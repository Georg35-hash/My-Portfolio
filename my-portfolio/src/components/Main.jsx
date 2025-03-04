import { Box } from "@mui/material";
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyProjects from './Projects/MyProjects';
import News from './News/News';

export default function Main() {

    return (
        <Box component='main' >
            <AboutMe components='section' />
            <MySkills component='section' />
            <MyProjects component='section' />
            <News component='section'/>
        </Box>
    );
}

