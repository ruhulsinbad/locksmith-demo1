import { Box, Button } from "@mui/material";
import React from "react";

const HeaderAnnouncement = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        pt: 5,
        pr: 20,
        pl: 20,
      }}
    >
      <Button variant="outlined" color="info">
        Call: <a href="tel: 729888667"> 729-888-667</a>
      </Button>
    </Box>
  );
};

export default HeaderAnnouncement;
