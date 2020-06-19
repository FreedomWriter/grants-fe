import React from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ApplicantProfile.styles";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";

const BioCard = ({ profileDetails }) => {
  const classes = useStyles();
  const userType = useSelector((state) => state.login.usertype);

  return (
    <>  
      <Grid className={classes.biosection}>
        {!profileDetails.org_name || profileDetails.org_name === "" ? (
          <h1>
            {profileDetails.first_name} {profileDetails.last_name}{" "}
          </h1>
        ) : (
          <h1>{profileDetails.org_name}</h1>
        )}
        {userType === "applicant" && (
          <h2>Sector: {profileDetails.sector}</h2>
        )}
      </Grid>
      <Paper className={classes.profilepaper}>
        <p>{profileDetails.bio}</p>
      </Paper>
    </>
  );
};

export default BioCard;
