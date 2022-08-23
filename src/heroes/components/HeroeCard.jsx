import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";

export const HeroeCard = ({ heroe }) => {
  const { id, superhero, alter_ego, first_appearance, characters } =
    heroe;

  const heroImageUrl = "/assets/heroes/" + id + ".jpg";
  console.log(heroImageUrl);


  return (
    <Card className="col" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        alt="green iguana"
        image={heroImageUrl}
      ></CardMedia>
      <CardContent>
        <h5 className="card-title"> {superhero} </h5>
        <p className="card-text"> {alter_ego}</p>

        {alter_ego !== characters && <p>{characters}</p>}

        <p className="card-text">
          <small className="text-muted">{first_appearance}</small>
        </p>

        <Link to={"/hero/" + id} >Más...</Link>
      </CardContent> 
    </Card>
  );
};
