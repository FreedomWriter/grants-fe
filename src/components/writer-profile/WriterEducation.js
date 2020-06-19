import React from "react";
import { useStyles } from "./writerProfile.styles.js";
import { Paper } from "@material-ui/core";

const WriterEducation = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.profilePaper}>
      <h3 className={classes.userEducation}>
        Background:
        <div className={classes.educationText}>
          Education:<div className={classes.bodyText}>USC 2010-2014</div>
        </div>
      </h3>
    </Paper>
  )
};

export default WriterEducation;