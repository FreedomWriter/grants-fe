import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import BioCard from "./BioCard";
import Grants from "./applicant-grants/Grants";
import LeftPanel from "./LeftPanel";
import { useSelector, useDispatch } from "react-redux";
import { getApplicantInfo } from "../../store/actions/profileActions";
import Loader from "../loader/Loader.js";

import { useStyles } from "./ApplicantProfile.styles";

export default function ApplicantProfile() {
  const dispatch = useDispatch();
  const applicant_id = useSelector(state => state.login.userId);
  const applicantDetails = useSelector(
    state => state.profileInfo.profileDetails
  );
  const grants = useSelector(state => state.grants);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getApplicantInfo(applicant_id));
  }, [dispatch]);

  return (
    <div className={classes.root}>
      {applicantDetails ? (
        <div>
          <Grid className={classes.profile}>
            <div className={classes.leftpanel}>
              <LeftPanel applicantDetails={applicantDetails} />
            </div>
            <div>
              <BioCard applicantDetails={applicantDetails} />
            </div>
          </Grid>
          <Grid className={classes.grants}>
            <div>
              <Grants grants={grants} />
            </div>
          </Grid>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
//This is a test