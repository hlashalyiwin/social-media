import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  ListItemButton,
} from "@mui/material";

import {
  ChatBubble as CommentIcon,
  Favorite as LikeIcon,
} from "@mui/icons-material";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "react-router";

export default function Notis() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: notis } = useQuery({
    queryKey: ["notis"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/notis", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.json();
    },
  });

  const { mutate: readNoti } = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`http://localhost:8080"/notis/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["notis"]);
    },
  });
  return (
    <List>
      {notis?.map((noti) => (
        <ListItem key={noti.id} sx={{ opacity: noti.read ? 0.5 : 1 }}>
          <ListItemButton
            onClick={() => {
              navigate(`/show/${noti.post.id}`);
              readNoti(noti.id);
            }}
          >
            <ListItemAvatar>
              {noti.type === "post_like" && <LikeIcon color="error" />} :
              {noti.type === "post_comment" && <CommentIcon color="error" />}
            </ListItemAvatar>
            <ListItemText />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
