import React from "react";
import { LinearProgress } from "@material-ui/core";
import { useStyles } from "./Loader.styles.js";

const Loader = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h4 className={classes.h4}>Loading...</h4>
      <LinearProgress />
    </div>
  )
}

export default Loader;