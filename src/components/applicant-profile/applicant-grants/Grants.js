import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader.js";

import Paper from "@material-ui/core/Paper";
import { useStyles } from "../ApplicantProfile.styles";
import Button from "@material-ui/core/Button";

const Grants = ({ applicantDetails }) => {
  const { applicant_id } = applicantDetails;
  const classes = useStyles();
  const userProfile = useSelector((state) => state.profileInfo.profileDetails);
  const viewerId = useSelector((state) => state.login.userId);
  
  const grants = useSelector(
    (state) => state.profileInfo.profileDetails.grants);
  const isLoading = useSelector((state) => state.grants.isLoading);

  return (
    <>
      {userProfile.org_name === "" ? (
        <h3>Grants I'd Like to Apply For:</h3>
      ): (  
        <h3>Grants We'd Like to Apply For:</h3>
      )}
      <Paper className={classes.profilepaper}>
        {Number(viewerId) === Number(applicant_id) ? (
          <div>
            <Button
              component={Link}
              to="/GrantsList"
              variant="contained"
              color="primary"
            >
              Edit Grants
            </Button>
            <Button
              component={Link}
              to="/GrantsForm"
              variant="contained"
              color="primary"
            >
              Add New Grant
            </Button>
          </div>
        ) : (
          <div> </div>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          grants.map(grant => {
            return (
              <div className={classes.profilegrantcard} key={grant.id}>
                <h4>{grant.grant_name}</h4>
                <p>{grant.description}</p>
              </div>
            );
          })
        )}
      </Paper>
    </>
  );
};

export default Grants;
