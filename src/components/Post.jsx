import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";
import { FavoriteBorder, MoreVert, ShareOutlined } from "@mui/icons-material";

import Favorite from "@mui/icons-material/Favorite";

const Post = () => {
  return (
    <Card
      sx={{
        maxWidth: 800,
        marginBottom: 5,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "mediumseagreen" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Patrick Miller "
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="284"
        src="/CodeIMG.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Debugging is like being a detective in a crime movie where you're also
          the murderer 🔪🔪.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareOutlined />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
