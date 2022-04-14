import { Box } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <Box>
        <Box
          sx={{
            p: 4,
            display: { md: "flex", xl: "block" },
            justifyContent: "space-evenly",
            bgcolor: "#525E75",
            color: "#ffffff",
          }}
        >
          <Box>
            <h1> Locksmith </h1>
          </Box>
          <Box>
            <ul>
              <li className="footer-menu"> Residential </li>
              <li className="footer-menu"> Corporate </li>
              <li className="footer-menu"> Car Programming </li>
            </ul>
          </Box>

          <Box>
            <h1> Follow us </h1>
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Box>
        </Box>

        <Box
          sx={{
            pt: 5,
            pb: 15,
            display: "flex",
            justifyContent: "space-evenly",
            bgcolor: "#525E75",
            color: "#ffffff",
          }}
        >
          <Box> Copyright &copy; {year} </Box>
          <Box>
            This website is designed by <b>Ruhul Sinbad </b>{" "}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
