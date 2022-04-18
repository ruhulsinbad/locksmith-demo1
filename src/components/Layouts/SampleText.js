import { Box, Button, Card, Paper } from "@mui/material";
import React, { useEffect } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import KeyIcon from "@mui/icons-material/Key";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import "./SampleText.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SampleText = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const cardStyle = {
    my: 2,
    mx: { xs: 4, sm: 2, lg: 0.5 },
    px: 2,
    py: { xs: 12, lg: 8 },
    bgcolor: "#066163",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    transition: "all .35s ease-in-out",
    "&:hover": {
      transform: " translate3d(0, -20px, 0)",
      borderBottom: 10,
      borderColor: "#22577E",
    },
  };
  return (
    <Paper
      className="relative z-90 md:mx-28 xl:mx-48 bg-transparent"
      elevation={0}
      sx={{ bgcolor: "transparent" }}
    >
      <Card
        elevation={1}
        data-aos="fade-right"
        className=" py-16 px-4 mx-4  flex flex-col justify-center items-center backdrop-blur-sm text-[#3A3845] rounded-3xl "
        sx={{
          backgroundImage: " linear-gradient(90deg, #BA81FF 0%, #FF6A95 99%)",
        }}
      >
        <h1 className="font-rail font-semibold text-4xl text-center text-white">
          Beware of Scammer! - Use a licensed locksmith
        </h1>
        <p className="font-rail my-4 text-2xl border-l-4 border-[#22577E] duration-500 hover:translate-x-1 px-8 py-1 bg-slate-200 hover:border-l-8 hover:border-[#066163] hover:bg-slate-100 hover:rounded-r-2xl mt-8 lg:mt-2">
          License No: <span className="font-jose"> #8209879 </span>
        </p>
        <p className="font-jose font-light text-2xl text-center text-[#1A132F] mt-8 lg:mt-2">
          "Providing reputable, affordable services since 2005, you can trust us
          to put your needs first while delivering you honest, quality
          solutions."
        </p>
      </Card>

      {/* Practice Tailwind  */}

      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-24   ">
        <Card sx={cardStyle}>
          <div className="w-12 h-12 mb-4 bg-white grid place-items-center rounded-full drop-shadow-xl">
            <ApartmentIcon />
          </div>

          <h1 className="box-heading font-jose text-white  mb-4">
            {" "}
            Residential{" "}
          </h1>
          <p className=" font-jose text-white">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Learn More
          </Button>
        </Card>
        <Card sx={cardStyle}>
          <div className="w-12 h-12 mb-4 bg-white grid place-items-center rounded-full drop-shadow-xl">
            <KeyIcon />
          </div>

          <h1 className="box-heading font-jose text-white mb-4 ">Car Key</h1>
          <p className=" font-jose text-white">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Learn More
          </Button>
        </Card>
        <Card sx={cardStyle}>
          <div className="w-12 h-12 mb-4 bg-white grid place-items-center rounded-full drop-shadow-xl">
            <CorporateFareIcon />
          </div>

          <h1 className="box-heading font-jose text-white  mb-4">
            {" "}
            Corporate{" "}
          </h1>
          <p className=" font-jose text-white">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Learn More
          </Button>
        </Card>
        <Card sx={cardStyle}>
          <div className="w-12 h-12 mb-4 bg-white grid place-items-center rounded-full drop-shadow-xl">
            <AirportShuttleIcon />
          </div>

          <h1 className="box-heading font-jose text-white  mb-4"> Mobile </h1>
          <p className=" font-jose text-white">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button variant="contained" color="primary" sx={{ marginTop: 4 }}>
            Learn More
          </Button>
        </Card>
      </Box>
    </Paper>
  );
};

export default SampleText;
