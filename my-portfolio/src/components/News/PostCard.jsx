import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => (
  <Card sx={{ mb: 2, boxShadow: 2, pl: 2 }}>
    <CardContent
      component={Link}
      to={`/posts/${post.id}`}
      sx={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Typography variant="h6">{post.title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {post.content.slice(0, 60)}...
      </Typography>
    </CardContent>
  </Card>
);

export default PostCard;
