import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import GrantCard from "./grantCards/GrantCard.jsx";
import { useStyles } from "./WritersFavoriteGrantsStyles";
import { Typography, Grid } from "@material-ui/core";

export default function WritersFavoriteGrants() {
  const faveArr = useSelector((state) => state.favorites.favorites);
  const user = useSelector((state) => state.profileInfo.profileDetails);
  const classes = useStyles();

  if (faveArr.length === 0) {
    return <Redirect to="/Grants" />;
  }
  return (
    <div>
      <Typography variant="h3" className={classes.h3}>
        <Grid container justify="center">
          <Grid item>
            {user.org_name !== "" ? user.org_name : user.first_name}'s Favorite
            Grants
          </Grid>
        </Grid>
      </Typography>
      {faveArr.map((grant) => {
        return (
          <div key={grant.id} className={classes.container}>
            <GrantCard data={grant} />
          </div>
        );
      })}
    </div>
  );
}
