import { Box, Typography } from "@mui/material";
import { usePosts } from "../../context/NewsProdiver";
import PostCard from "./PostCard";

const RecentNews = () => {
  const { recentPosts } = usePosts();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>
      {recentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default RecentNews;
