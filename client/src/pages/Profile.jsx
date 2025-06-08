import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";

export default function Profile() {
  const { user, setUser } = useApp();
  const navigate = useNavigate();
  if (!user) {
	navigate("/login");
	return null; // Prevent rendering if user is not logged in
  }
  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 6,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Avatar
          src={user.avatarUrl}
          alt={user.name}
          sx={{ width: 96, height: 96 }}
        />
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {user.username}
        </Typography>
        <Typography variant="body1" align="center">
          {user.bio}
        </Typography>
        <Button variant="contained" color="primary">
          Edit Profile
        </Button>
      </Stack>
    </Box>
  );
}
