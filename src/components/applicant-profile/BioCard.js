import React from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ApplicantProfile.styles";
import Grid from "@material-ui/core/Grid";

const BioCard = ({ applicantDetails }) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.biosection}>
        {applicantDetails.org_name === "" ? (
          <h1>
            {applicantDetails.first_name} {applicantDetails.last_name}{" "}
          </h1>
        ) : (
          <h1>{applicantDetails.org_name}</h1>
        )}
        <h2>Sector: {applicantDetails.sector}</h2>
      </Grid>
      <Paper className={classes.profilepaper}>
        <p>{applicantDetails.bio}</p>
      </Paper>
    </>
  );
};

export default BioCard;
