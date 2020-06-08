import React from "react";
import "./user.scss";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { useStyles } from "./HomePageUserCardStyles.jsx";

const UserCardApplicant = (props) => {
  const user = props.details;
  //applicant_id, org_name, sector, bio, city, country, first_name, founding_date, id, last_name, org_name, sector, state, website, zip
  const classes = useStyles();

  return (
    <Card className={`${classes.userInfo} ${classes.applicant}`}>
      <div className={classes.userDisplay}>
        <CardMedia
          className={classes.media}
          image="https://image.shutterstock.com/image-photo/young-scientist-looking-through-microscope-600w-524351890.jpg"
          alt="userImg"
        />
        <h2>
          {user.first_name} {user.last_name}
        </h2>
      </div>
      <CardContent className={classes.userRight}>
        <h3>Organization: {user.org_name} </h3>
        <h3>Sector/Focus: {user.sector}</h3>
        <h4>Country: {user.country}</h4>
        <p className={classes.userP}>{user.bio}</p>
      </CardContent>
    </Card>
  );
};

export default UserCardApplicant;
