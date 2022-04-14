import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Homelocksmith from "./carousel-image/ls-one.jpg";
import Carlocksmith from "./carousel-image/ls-two.jpg";
import "./Carousel.css";

const HomeCarousel = () => {
  var items = [
    {
      name: "Car Key Locksmith",
      description: "Beware of Scammers! Get a Licensed locksmith for your Car",
      image: Homelocksmith,
    },
    {
      name: "Residential Locksmith",
      description: "Beware of Scammers! Get a Licensed locksmith for you Car",
      image: Carlocksmith,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 0.25,
        ml: { xs: 5, md: 20 },
        mr: { xs: 5, md: 20 },
      }}
      style={{
        backgroundImage: `url(${props.item.image})`,
        height: "600px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 className="item-name">{props.item.name}</h2>
      <p className="item-para">{props.item.description}</p>

      <Button variant="outlined"> CALL : 729-888-667</Button>
    </Paper>
  );
};

export default HomeCarousel;
