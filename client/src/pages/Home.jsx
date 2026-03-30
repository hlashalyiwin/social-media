import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Post from "../components/Post";
import { useApp } from "../AppContext";

async function fetchPosts(api_url) {
  const res = await fetch(`${api_url}/posts`);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

export default function Home() {
  const { API_URL } = useApp();

  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts", API_URL],
    queryFn: () => fetchPosts(API_URL),
    enabled: !!API_URL,
  });

  if (isLoading)
    return (
      <Typography sx={{ textAlign: "center", mt: 4 }}>
        Loading posts...
      </Typography>
    );

  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Box sx={{ my: 2 }}>
      {posts && posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <Typography
          sx={{ textAlign: "center", color: "text.secondary", mt: 4 }}
        >
          No posts available. Be the first to post!
        </Typography>
      )}
    </Box>
  );
}
