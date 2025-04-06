import { Box, Typography } from "@mui/material";
import PostCard from "./PostCard";
import { usePosts } from "../../context/NewsContextProvider";

const RecentNews = () => {
  const { recentPosts } = usePosts();

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: (theme) => theme.palette.secondary.main }}
      >
        Recent Posts
      </Typography>
      {recentPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default RecentNews;
