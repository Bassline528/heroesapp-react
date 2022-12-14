import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import 'animate.css';
import { getHeroById } from "../helpers";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const HeroPage = () => {
  const { id, ...rest } = useParams();

  const heroe = useMemo(() => getHeroById(id), [id]) 

  const navigate = useNavigate();

  if (!heroe) {
    return <Navigate to="/marvel" />;
  }

  const onNavigateBack = () => {
    navigate(-1)
  }

  console.log(heroe);
  return (
    <Grid container className="mt-2 animate__animated animate__fadeInUp" spacing={4}>
      <Grid xs={4}>
        <img
          src={"/assets/heroes/" + heroe.id + ".jpg"}
          alt={heroe.superhero}
          className="img-thumbnail"
        />
      </Grid>
      <Grid item xs={8}>
          <Typography variant="h3">{heroe.superhero}</Typography>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b> {heroe.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b> {heroe.publisher}
            </li>
            <li className="list-group-item">
              <b>First Appearance: </b> {heroe.first_appearance}
            </li>
          </ul>
          <Typography variant="h5">Characters</Typography>
          <p>{heroe.characters}</p>
          <Button variant="contained" onClick={onNavigateBack}>
            Regresar
          </Button>
      </Grid>
    </Grid>
  );
};
