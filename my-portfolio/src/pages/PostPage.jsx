import { useParams } from "react-router-dom";
import { usePosts } from "../context/NewsProdiver";
import { Box, Typography } from "@mui/material";
import PostCard from "../components/News/PostCard";

const PostPage = () => {
  const { id } = useParams();
  const { allPosts } = usePosts();
  const post = allPosts.find((p) => p.id === parseInt(id));

  if (!post) return <Typography variant="h6">Post not found</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <PostCard key={post.id} post={post} />
    </Box>
  );
};

export default PostPage;
