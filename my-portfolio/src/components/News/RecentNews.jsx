import { Box, Typography } from '@mui/material';
import PostCard from './PostCard';
import { usePosts } from '../../context/NewsContextProvider';
import { translations } from '../../context/translation';

export default function RecentNews() {
  const { recentPosts, language } = usePosts();

  return (
    <Box sx={{ p: 2, margin: '0 auto', maxWidth: '750px' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: theme => theme.palette.secondary.main }}
      >
        {translations[language].recentPosts}
      </Typography>
      {recentPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}
