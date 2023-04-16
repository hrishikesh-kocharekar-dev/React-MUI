import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    // bgcolor="#292524"
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      {/* 2nd post */}
    </Box>
  );
};
export default Feed;
