import { Box, Button, Grid2, OutlinedInput, Typography, CardContent, Card } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const footer = (
    <CardContent>
        <Grid2 container spacing={2} alignItems="center" justifyContent={'center'} textAlign={'center'}>
            <Grid2 item xs={12} sm={6}>
                <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 20, textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                    Subscribe to my updates
                </Typography>
                <Typography component="p" sx={{ color: 'text.secondary', maxWidth: 300, textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                    Get the latest news about my projects and updates.
                </Typography>
            </Grid2>

            <Grid2 item xs={12} sm={6} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <OutlinedInput placeholder="Enter your email" sx={{ flexGrow: 1 }} />
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: (theme) => theme.palette.customColor.main,
                        "&:hover": {
                            backgroundColor: (theme) => theme.palette.customColor.dark
                        }
                    }}
                    startIcon={<EmailIcon />}
                >
                    Subscribe
                </Button>

                <Typography component="p" sx={{ color: 'text.secondary', maxWidth: 200, fontSize: 12 }}>
                    We care about your security. <b>Read our privacy policy.</b>
                </Typography>
            </Grid2>
        </Grid2>
    </CardContent>
);


export default function Footer() {
    return (
        <Box component='footer'>
            <Card variant='outlined'>{footer}</Card>
        </Box>
    );
}
