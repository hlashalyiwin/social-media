import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Avatar,
  Divider, // Add Divider import
  useTheme, // Add useTheme import
} from "@mui/material";
import { useApp } from "../AppProvider";
import { useNavigate } from "react-router";

export default function AppDrawer() {
  const { openDrawer, setOpenDrawer, user, setUser } = useApp();
  const theme = useTheme(); // Access theme for dark mode

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const navigate = useNavigate();

  return (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
      <Box
        sx={{
          width: 300,
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          height: "100%",
        }}
        onClick={toggleDrawer}
      >
        <Box
          sx={{
            height: 200,
            bgcolor:
              theme.palette.mode === "dark"
                ? theme.palette.grey[900]
                : theme.palette.grey[200],
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {user ? (
            <>
              <Avatar
                src={user.avatarUrl}
                alt={user.name}
                sx={{ width: 72, height: 72, mb: 1 }}
              />
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {user.username}
              </Typography>
            </>
          ) : (
            <Typography variant="h6" color="white">
              Welcome!
            </Typography>
          )}
        </Box>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate("/")}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {!user && (
            <ListItem>
              <ListItemButton onClick={() => navigate("/login")}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          )}
          {!user && (
            <ListItem>
              <ListItemButton onClick={() => navigate("/register")}>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
          )}
          {user && (
            <ListItem>
              <ListItemButton onClick={() => navigate("/profile")}>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          )}
          {user && (
            <ListItem>
              <ListItemButton
                onClick={() => {
                  setUser(null);
                  localStorage.removeItem("token");
                  navigate("/");
                }}
              >
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  );
}
