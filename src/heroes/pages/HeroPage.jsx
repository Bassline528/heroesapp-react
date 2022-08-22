import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const HeroPage = () => {
  const { id, ...rest } = useParams();

  const heroe = getHeroById(id);

  const navigate = useNavigate();

  if (!heroe) {
    return <Navigate to="/marvel" />;
  }

  const onNavigateBack = () => {
    navigate(-1)
  }

  console.log(heroe);
  return (
    <Grid container className="mt-2" spacing={4}>
      <Grid xs={4}>
        <img
          src={"/assets/heroes/" + heroe.id + ".jpg"}
          alt={heroe.superhero}
          className="img-thumbnail"
        />
      </Grid>
      <Grid xs={8}>
        <Box >
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
        </Box>
      </Grid>
    </Grid>
  );
};
