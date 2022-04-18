import { Box } from "@mui/material";
import React from "react";

const FooterAnnouncement = () => {
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: "#066163",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <div className=" font-lato text-xl text-white text-center">
        Get free quotes and suggestion in any emergency case
      </div>
      <div className=" font-sans font-bold text-white text-4xl">
        Call : 729-888-667
      </div>
    </Box>
  );
};

export default FooterAnnouncement;
