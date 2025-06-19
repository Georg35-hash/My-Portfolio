import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { usePosts } from '../context/NewsContextProvider';

export default function PostPage() {
  const { id } = useParams();
  const { allPosts } = usePosts();
  const post = allPosts.find(p => p.id === parseInt(id));

  if (!post) return <Typography variant="h6">Post not found</Typography>;

  return (
    <Box sx={{ m: '0 0 20px 0', maxWidth: '750px', margin: '0 auto' }}>
      <Paper sx={{ p: 3 }}>
        <Card
          sx={{ display: 'flex', flexDirection: 'column', marginBottom: 3 }}
        >
          <CardMedia
            component="img"
            width="50"
            height="100"
            image={post.image}
            alt={post.title}
            sx={{
              objectFit: 'contain',
            }}
          />
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: theme => theme.palette.secondary.main,
              }}
            >
              {post.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontStyle: 'italic', mb: 2 }}
            >
              {new Date(post.time).toLocaleString()}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ lineHeight: 1.6, fontSize: '1.1rem' }}
            >
              {post.content}
            </Typography>
          </CardContent>
        </Card>

        <Button
          component={Link}
          to="/recent"
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: theme => theme.palette.customColor.main,
          }}
        >
          Back to Recent News
        </Button>
      </Paper>
    </Box>
  );
}
