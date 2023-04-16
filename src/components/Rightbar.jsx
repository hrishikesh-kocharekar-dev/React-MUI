import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const Rightbar = () => {
  return (
    <Box
      // bgcolor="lightGreen"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar sx={{ backgroundColor: "mediumpurple" }}>S</Avatar>
          <Avatar sx={{ backgroundColor: "lightpink" }}>A</Avatar>
          <Avatar sx={{ backgroundColor: "slateblue" }}>O</Avatar>
          <Avatar sx={{ backgroundColor: "mediumseagreen" }}>S</Avatar>
          <Avatar sx={{ backgroundColor: "Cornflowerblue" }}>J</Avatar>
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Chats
        </Typography>

        {/* Chats  */}
        <List sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/front1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Stesy burns"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Jonna Connors
                  </Typography>
                  {
                    " — Im trying to decide between studying neuroscience or becoming a coder."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/front2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Alex costa"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex
                  </Typography>
                  {
                    " — Why did the programmer quit his job? He didn't get arrays."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/front4.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — don't know, don't care"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/front3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Sandra Adams"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Oui Oui
                  </Typography>
                  {" — Do you even know what ChatGPT is?🤨"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/front6.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary=" Jonna Connors"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Stesy burns
                  </Typography>
                  {" — Why not both? You could be a neurocoder."}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
