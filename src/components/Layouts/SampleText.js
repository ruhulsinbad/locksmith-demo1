import { Box, Button, Card, Paper } from "@mui/material";
import React, { useEffect } from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./SampleText.css";
import Aos from "aos";
import "aos/dist/aos.css";

const SampleText = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const cardStyle = {
    my: { xs: 2, md: 2 },
    mx: 0.5,
    px: 2,
    py: 6,
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
    <Paper className="relative z-90 md:mx-28 xl:mx-48" elevation={0}>
      <Card
        elevation={1}
        data-aos="fade-right"
        className=" py-16 flex flex-col justify-center items-center backdrop-blur-sm text-[#3A3845] rounded-3xl "
      >
        <h1 className="font-roboto font-semibold text-4xl text-center">
          Beware of Scammer! - Use a licensed locksmith
        </h1>
        <p className="font-sans my-4 text-2xl border-l-4 border-[#05595B] duration-500 hover:translate-x-1 px-8 py-1 bg-slate-200 hover:border-l-8 hover:border-[#05595B] hover:bg-slate-100 hover:rounded-r-2xl mt-8 lg:mt-2">
          License No: <span className=""> #8209879 </span>
        </p>
        <p className="font-sans font-light text-xl text-center text-[#1A132F] mt-8 lg:mt-2">
          "Providing reputable, affordable services since 2005, you can trust us
          to put your needs first while delivering you honest, quality
          solutions."
        </p>
      </Card>

      {/* Practice Tailwind  */}

      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-24   ">
        <Card sx={cardStyle}>
          <ApartmentIcon className="icon-style" />

          <h1 className="box-heading"> Residential </h1>
          <p className="text-[#1B1A17]">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button> Learn More </Button>
        </Card>
        <Card sx={cardStyle}>
          <ApartmentIcon className="icon-style" />

          <h1 className="box-heading"> Residential </h1>
          <p className="text-[#1B1A17]">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button> Learn More </Button>
        </Card>
        <Card sx={cardStyle}>
          <ApartmentIcon className="icon-style" />
          <h1 className="box-heading"> Residential </h1>
          <p className="text-[#1B1A17]">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button> Learn More </Button>
        </Card>
        <Card sx={cardStyle}>
          <ApartmentIcon className="icon-style" />
          <h1 className="box-heading"> Residential </h1>
          <p className="text-[#1B1A17]">
            Your home should always feel safe. Know that your locks work, and
            who you can call when problems arise.
          </p>
          <Button> Learn More </Button>
        </Card>
      </Box>
    </Paper>
  );
};

export default SampleText;
