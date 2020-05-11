import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BioCard from "./BioCard";
import Grants from "./grants-list/Grants";
import LeftPanel from "./LeftPanel";

import { useStyles } from "./ApplicantProfile.styles";

export default function ApplicantProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.profile}>
        <div className={classes.leftpanel}>
          <LeftPanel />
        </div>
        <div>
          <BioCard />
        </div>
      </Grid>
      <Grid className={classes.grants}>
        <div>
          <Grants />
        </div>
      </Grid>
    </div>
  );
}
