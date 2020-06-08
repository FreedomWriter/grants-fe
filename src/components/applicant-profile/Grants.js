import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGrantsInfo } from "../../store/actions/grantsActions";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.js";

import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ApplicantProfile.styles";
import Button from "@material-ui/core/Button";

const Grants = (/*grants*/) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const profileId = useSelector(
    state => state.profileInfo.profileDetails.applicant_id
  );
  // const testProfileId = useSelector(state => state.profileInfo.profileDetails.id)
  const viewerId = useSelector(state => state.login.userId);
  console.log("profileId: ", profileId);
  console.log("viewerId: ", viewerId);

  useEffect(() => {
    dispatch(getGrantsInfo());
  }, [dispatch]);

  const grants = useSelector(state => state.grants.grantsInfo);

  return (
    <>
      <h3>Grants We'd Like to Apply For:</h3>
      <Paper className={classes.profilepaper}>
        {Number(viewerId) === Number(profileId) ? (
          <Button component={
    } to="/GrantsList">
            Edit Grants
          </Button>
        ) : (
          <div> </div>
        )}
        {!grants || grants.length < 1 ? (
          <Loader />
        ) : (
          grants.map(grant => {
            console.log(grant);
            return (
              <div className={classes.profilegrantcard} key={grant.grant_id}>
                <h4>{grant.title}</h4>
                <p>{grant.detailMain}</p>
              </div>
            );
          })
        )}
      </Paper>
    </>
  );
};

export default Grants;
