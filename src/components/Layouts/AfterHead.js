import { Box, Button, Paper } from "@mui/material";
import React from "react";
import firstPhoto from "../../../src/images/lockOne.png";

const AfterHead = () => {
  return (
    <>
      <Box className="fixed z-100 right-0 top-1/2 ">
        <Box
          className="w-12 h-12  md:mr-4 lg:mr-10 xl:mr-16 rounded-full hidden md:flex justify-center items-center shadow-md shadow-zinc-900 duration-300 hover:translate-y-2 "
          sx={{
            backgroundImage: " linear-gradient(90deg, #BA81FF 0%, #FF6A95 99%)",
          }}
        >
          <a href="tel:5551234567">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 duration-500 hover:fill-orange-600 hover:scale-110 "
              viewBox="0 0 20 20"
              fill="#ffffff"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </Box>
        <Box
          className=" mt-6 w-12 h-12  md:mr-4 lg:mr-10 xl:mr-16  rounded-full hidden md:flex justify-center items-center shadow-md shadow-zinc-900 duration-300 hover:-translate-y-2 "
          sx={{
            backgroundImage: " linear-gradient(90deg, #BA81FF 0%, #FF6A95 99%)",
          }}
        >
          <a href="mailto:ruhulsinbad@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 duration-500 hover:fill-orange-600 hover:scale-110"
              viewBox="0 0 20 20"
              fill="#ffffff"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </Box>
      </Box>
      <Paper
        elevation={1}
        className=" py-24 mb-24 grid grid-cols-1 lg:grid-cols-2 px-6  md:px-28 xl:px-48 justify-center items-center "
        sx={{
          bgcolor: "#FAFDD6",
        }}
      >
        <img
          className=" lg:pr-24 place-self-center drop-shadow-md"
          src={firstPhoto}
          alt="First"
        />

        <Box className="mt-10 lg:pl-8 flex flex-col justify-center items-center lg:border-l-2 lg:border-[#066163]  ">
          <p className="font-lato tracking-wide text-2xl md:text-3xl lg:text-2xl text-[#22577E] ">
            We're providing ...
          </p>
          <p className="font-roboto font-bold mt-3 -tracking-wide text-3xl md:text-5xl lg:text-3xl xl:text-4xl">
            24/7 EMERGENCY
          </p>
          <p className="font-sans font-bold mt-3 -tracking-wide text-3xl md:text-5xl lg:text-3xl xl:text-4xl">
            <span className="border-b-4 border-[#22577E]"> LOCKSMITH</span> {""}
            SERVICE
          </p>
          <p className="font-lato text-xl md:text-2xl lg:text-xl tracking-widest pt-12 my-3  lg:my-2">
            Our Services Starts from{" "}
            <span className="ring-2 rounded-full p-1 text-white bg-[#22577E] ring-[#22577E] ring-offset-2 ">
              $9
            </span>
          </p>
          <p className="font-sans text-[#22577E] text-lg md:text-xl lg:text-lg font-thin">
            <span className="border-b-2 border-[#066163]"> Note</span> : It may
            vary respect to service type.
          </p>
          <Button
            variant="contained"
            sx={{
              mt: 3,
            }}
          >
            Get Quotes
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default AfterHead;
