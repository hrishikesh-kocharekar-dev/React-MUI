import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";

// import InstagramIcon from "@mui/icons-material/Instagram";
import Mail from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#292524",
});

const Icons = styled("Box")(({}) => ({
  // backgroundColor: "white",
  display: "flex",
  gap: "20px",
  alingItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "darkslategray",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  // color: "darkslategray",
}));

const bell = styled("Box")(({}) => ({
  color: "mediumseagreen",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block", color: "mediumseagreen" } }}
        >
          Sociopedia
        </Typography>
        <Typography
          variant="h8"
          sx={{ display: { xs: "block", sm: "none", color: "mediumseagreen" } }}
        >
          Sociopedia
        </Typography>
        {/* <InstagramIcon sx={{ display: { xs: "block", sm: "none" } }} /> */}
        <Search>
          <InputBase placeholder="search..."></InputBase>
        </Search>

        <Icons>
          <Badge badgeContent={4} color="success">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="success">
            <Notifications />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
