/*
 * Freelancer components which keeps Freelancer data
 */
"use strict";

import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  // Styles of elements
  root: {
    maxWidth: 345,
    width: 230,
    zIndex: 1,
    position: "relative",
  },
  badge: {
    zIndex: 10,
    position: "absolute",
    backgroundColor: "red",
    color: "white",
    padding: 5,
    borderRadius: "5px!important",
  },
  name: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  lightText: {
    color: "gray",
  },
  numbers: {
    color: "#3f51b5",
    fontWeight: "bold",
    fontSize: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const CarBox = (props) => {
  const classes = useStyles();
  // Get rating of the inspector by rendering components in a loop
  const [carData, setFreelanceData] = useState({
    image: props.car.image,
    model: props.car.model,
    make: props.car.make,
    year: props.car.year,
    mileage: props.car.mileage,
    price: props.car.price,
  });
  var rating = [];
  for (var i = 0; i < Number(carData.rating); i++) {
    rating.push(<StarIcon key={i} color="primary" />);
  }
  return (
    // Overall card of freelancer component
    <Card className={classes.root}>
      {/* Creating the bedge */}
      <div className={classes.badge}>{carData.make}</div>
      {/* Image of the card */}
      <CardMedia className={classes.media} image={carData.image} />
      {/* Freelancer details */}
      <CardContent>
        <center>
          <div className={classes.lightText}>{carData.mileage}</div>
          <div className={classes.name}>
            {carData.model} {carData.make}
          </div>
          <div className={classes.numbers}>{carData.year}</div>
          <div className={classes.lightText}>INSPECTIONS</div>
          <div>{rating}</div>
        </center>
      </CardContent>
    </Card>
  );
};

export default CarBox;
