import React, { useState, useEffect } from 'react';
import { Grid2, CircularProgress, Typography, Box } from '@mui/material';
import NewsItem from './NewsItem';

const newsData = [
    { id: 1, title: 'News 1', content: 'Content of News 1' },
    { id: 2, title: 'News 2', content: 'Content of News 2' },
    { id: 3, title: 'News 3', content: 'Content of News 3' },
];

export default function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setNews(newsData); // Simulating data fetch
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <Box  component='section' sx={{ margin: '40px 0' }}>
            <Typography gutterBottom sx={{ textAlign: 'center' }}>
                Latest News
            </Typography>
            {loading ? (
                <CircularProgress sx={{ display: 'block', margin: '0 auto' }} />
            ) : (
                <Grid2 container spacing={2} justifyContent="center">
                    {news.map((item) => (
                        <Grid2 item xs={12} sm={6} md={4} key={item.id}>
                            <NewsItem title={item.title} content={item.content} />
                        </Grid2>
                    ))}
                </Grid2>
            )}
        </Box>
    );
}
