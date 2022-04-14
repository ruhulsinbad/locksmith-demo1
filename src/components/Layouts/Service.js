import { Paper, Box, ListItem, List } from "@mui/material";
import React, { useEffect } from "react";
import "./Service.css";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Aos from "aos";
import "aos/dist/aos.css";
import secondPhoto from "../../../src/images/lockTwo.png";

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Paper
        elevation={1}
        data-aos="fade-right"
        className="relative z-50 mx-4 sm:mx-8 md:mx-28 xl:mx-48 my-12 py-6 grid grid-cols-1 lg:grid-cols-2 px-2 "
        sx={{
          color: "#22577E",
          bgcolor: "#FAFDD6",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Box
          className=" border-b-2 lg:border-b-0 py-8 lg:border-r-2 lg:border-sky-800"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className=" md:max-w-[50%] duration-500 md:hover:max-w-[52%] "
            src={secondPhoto}
            alt="Locksmith Services"
          />
          <h1> Our Services</h1>
          <h2> Call: 729-888-667</h2>
        </Box>
        <Box className="pl-10 py-8">
          <List className="mr-10">
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} />
              Car Key / Duplicate Car Keys{" "}
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} /> Lost Keys{" "}
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} /> Key Duplication & Made{" "}
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} />
              Lock Repair / Change Lock{" "}
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} /> Broken Key Extraction{" "}
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} /> ReKey{" "}
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} /> High Security Locks{" "}
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} /> Ignitions Repair
            </ListItem>
            <ListItem className="service-list">
              <LoyaltyIcon sx={{ mr: 3 }} /> Key Extraction
            </ListItem>
          </List>
        </Box>
      </Paper>
    </>
  );
};

export default Service;
