import { Box, Typography } from '@mui/material';
import { usePosts } from '../../context/NewsContextProvider';
import PostCard from './PostCard';
import { translations } from '../../context/translation';

export default function AllNews() {
  const { allPosts, language } = usePosts();

  return (
    <Box sx={{ p: 2, margin: '0 auto', maxWidth: '750px' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme => theme.palette.secondary.main }}
      >
        {translations[language].allNews}
      </Typography>
      {allPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}
