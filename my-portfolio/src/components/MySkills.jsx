import { Box, Grid, Typography, Button } from "@mui/material";
const imgStyle = { minWidth: "50px", height: "50px" };
export default function MySkills() {
    return (
        <Box sx={{ marginTop:'50px'}} component='section'>
            <Typography sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>MySkills</Typography>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Grid sx={{ display: 'flex', justifyContent: 'center', maxWidth: '350px' }} container spacing={2}>
                    <Grid item xs={'50px'}>
                       <Button><img src='../../src/assets/myskills/html.svg' style={imgStyle} /></Button> 
                    </Grid>
                    <Grid item xs={'50px'}>
                    <Button> <img src='../../src/assets/myskills/css.svg' style={imgStyle} /></Button> 
                    </Grid>
                    <Grid item xs={'50px'}>
                    <Button>  <img src='../../src/assets/myskills/js.svg' style={imgStyle} /></Button> 
                    </Grid>
                    <Grid item xs={'50px'}>
                    <Button>  <img src='../../src/assets/myskills/react.svg' style={imgStyle} /></Button> 
                    </Grid>
                    <Grid item xs={'50px'}>
                    <Button>  <img src='../../src/assets/myskills/git.svg' style={imgStyle} /></Button> 
                    </Grid>
                    <Grid item xs={'50px'}>
                    <Button>  <img src='../../src/assets/myskills/node.svg' style={imgStyle} /></Button> 
                    </Grid>
                    <Grid item xs={'50px'}>
                    <Button>   <img src='../../src/assets/myskills/docker.svg' style={imgStyle} /></Button> 
                    </Grid>
                    <Grid item xs={'50px'}>
                    <Button>  <img src='../../src/assets/myskills/aws.svg' style={imgStyle} /></Button> 
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}