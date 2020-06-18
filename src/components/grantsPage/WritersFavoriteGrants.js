import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import GrantCard from "./grantCards/GrantCard.jsx";
import { useStyles } from "./WritersFavoriteGrantsStyles";

export default function WritersFavoriteGrants() {
  const faveArr = useSelector((state) => state.favorites.favorites);
  const classes = useStyles();

  if (faveArr.length === 0) {
    return <Redirect to="/Grants" />;
  }
  return (
    <div>
      {faveArr.map((grant) => {
        return (
          <div className={classes.container}>
            <GrantCard key={grant.id} data={grant} />
          </div>
        );
      })}
    </div>
  );
}
