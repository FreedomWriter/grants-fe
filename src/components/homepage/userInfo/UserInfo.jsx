import React from "react";
import "./user.scss";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { useStyles } from "./HomePageUserInfoStyles.jsx";

const UserInfo = (props) => {
  const user = props.details;
  const classes = useStyles();

  return (
    <Card className={classes.userInfo}>
      <CardMedia className={classes.media} image={user.image} alt="userImg" />
      <CardContent className={classes.userRight}>
        <h2>Name: {user.fullname}</h2>
        <h3>username: {user.username}</h3>
        <h3>Sector/Focus: {user.sector}</h3>
        <p>{user.desc}</p>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
