import { Box } from "@mui/material";
import React from "react";

const FooterAnnouncement = () => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "#FAFDD6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Box>Get free quotes and suggestion in any emergency case</Box>
      <Box sx={{ fontSize: 30 }}>Call : 729-888-667</Box>
    </Box>
  );
};

export default FooterAnnouncement;
