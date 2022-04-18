import { Box, Paper } from "@mui/material";
import React, { useEffect } from "react";
import GoogleMap from "./GoogleMap";
import Aos from "aos";
import "aos/dist/aos.css";

const Adress = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Paper
      elevation={0}
      className="flex flex-col justify-center items-center md:mx-28 xl:mx-48"
      sx={{ bgcolor: "transparent" }}
    >
      <h1 className="font-jose pb-4 font-bold text-4xl border-b-2 border-gray-800 my-8">
        Our Address
      </h1>
      <Box>
        <GoogleMap />
      </Box>

      <div
        data-aos="fade-in"
        className="my-24 grid grid-cols-1 md:grid-cols-2 bg-[#383838] rounded-lg py-12 items-center"
      >
        <div>
          <p
            className="font-jose text-white px-12 mb-12 md:mb-0 
          text-center md:text-right sm:text-xl sm:tracking-widest 
          md:tracking-normal md:text-3xl lg:text-4xl xl:text-5xl 
          pb-4 md:pb-0 border-b-2 md:border-b-0 "
          >
            To get free quotes kindly contact us
          </p>
        </div>

        <div className=" md:border-l-2 px-12 border-[#ffffff]">
          <p className="font-jose text-white text-xl font-bold tracking-widest">
            ABC Locksmith
          </p>
          <p className=" font-jose text-white tracking-wide mt-1">
            1 Hacker Way Menlo Park, Mountain View
          </p>
          <p className=" font-jose text-white tacking-widest mt-1"> 90000 </p>
          <p className=" font-jose text-white tracking-widest mt-2">
            LOS ANGELES, CA
          </p>
          <p className=" font-jose text-white tracking-widest mt-3">
            729-888-667 , info@locksmith.com{" "}
          </p>
        </div>
      </div>
    </Paper>
  );
};

export default Adress;
