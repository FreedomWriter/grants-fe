import React from "react";
import "./user.scss";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { useStyles } from "./HomePageUserCardStyles.jsx";

const UserCardWriter = (props) => {
  const user = props.details;
  const classes = useStyles();

  console.log("UserCardWriter...");
  return (
    <Card className={`${classes.userInfo} ${classes.writer}`}>
      <div className={classes.userDisplay}>
        <CardMedia className={classes.media} image={user.image} alt="userImg" />
        <h2>{user.fullname}</h2>
        <h4>username: {user.username}</h4>
      </div>
      <CardContent className={classes.userRight}>
        <h2>Name: {user.fullname}</h2>
        <h3>username: {user.username}</h3>
        <h3>roles: {user.role} </h3>
        <h3>Sector/Focus: {user.sector}</h3>
        <h4>type: {user.type}</h4>
        <p>{user.desc}</p>
      </CardContent>
    </Card>
  );
};

export default UserCardWriter;
