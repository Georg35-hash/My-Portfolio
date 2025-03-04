import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';

const NewsItem = ({ title, content }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Card
                sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                    backgroundColor: '#E4C85A',
                }}
            >
                <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                    <Button
                        sx={{ marginTop: 2 }}
                        variant="outlined"
                        color="secondary"
                        onClick={handleOpen}
                    >
                        Learn More
                    </Button>
                </CardContent>
            </Card>

            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #FFA500', // Orange border
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                    <Button sx={{ marginTop: 2 }} variant="outlined" color="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default NewsItem;
