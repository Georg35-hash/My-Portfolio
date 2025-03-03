import { Box, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import * as React from 'react';

const footer = (
    <React.Fragment>
        <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Word of the Day
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function Footer() {
    return (
        <Box component='section'>
            <Card variant='outlined'>{footer}</Card>
        </Box>
    );
}
