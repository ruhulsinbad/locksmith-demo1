import { Box, Paper } from "@mui/material";
import React from "react";
import GoogleMap from "./GoogleMap";

const Adress = () => {
  return (
    <Paper
      elevation={0}
      className="flex flex-col justify-center items-center md:mx-28 xl:mx-48"
      sx={{ bgcolor: "transparent" }}
    >
      <h1 className="font-sans pb-4 font-bold text-4xl border-b-2 border-gray-800 my-8">
        Our Address
      </h1>
      <Box>
        <GoogleMap />
      </Box>

      <div className="my-24 grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="px-12 mb-12 md:mb-0 text-center md:text-right sm:text-xl sm:tracking-widest md:tracking-normal md:text-3xl lg:text-4xl xl:text-5xl pb-4 md:pb-0 border-b-2 md:border-b-0 ">
            To get free quotes kindly contact us
          </p>
        </div>

        <div className=" md:border-l-2 px-12 border-[#AEBD54]">
          <p className="font-sans text-xl font-bold tracking-widest">
            {" "}
            ABC Locksmith
          </p>
          <p className="tracking-widest mt-1">
            {" "}
            1 Hacker Way Menlo Park, Mountain View{" "}
          </p>
          <p className="tacking-widest mt-1"> 90000 </p>
          <p className="tracking-widest mt-2"> LOS ANGELES, CA</p>
          <p className="tracking-widest mt-3">
            729-888-667 , info@locksmith.com{" "}
          </p>
        </div>
      </div>
    </Paper>
  );
};

export default Adress;
