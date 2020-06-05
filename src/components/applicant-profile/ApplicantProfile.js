import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import BioCard from "./BioCard";
import Grants from "./Grants";
import LeftPanel from "./LeftPanel";
import { useSelector, useDispatch } from "react-redux";
import { getProfileInfo } from "../../store/actions/profileActions";
import Loader from "../loader/Loader.js";

import { useStyles } from "./ApplicantProfile.styles";

export default function ApplicantProfile() {
  const dispatch = useDispatch();
  const applicant_id = useSelector((state) => state.login.userId);
  const applicantDetails = useSelector(
    (state) => state.profileInfo.profileDetails
  );
  const grants = useSelector((state) => state.grants);
  const classes = useStyles();

  console.log(applicantDetails);

  useEffect(() => {
    dispatch(getProfileInfo(applicant_id));
  }, [dispatch, applicant_id]);

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
