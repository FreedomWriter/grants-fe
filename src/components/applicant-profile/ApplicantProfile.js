import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import BioCard from "./BioCard";
import Grants from "./applicant-grants/Grants";
import LeftPanel from "./LeftPanel";
import { useSelector, useDispatch } from "react-redux";
import {
  getApplicantInfo,
  updateApplicantProfile
} from "../../store/actions/profileActions";
import { getGrantsByApplicantId } from "../../store/actions/grantsActions";
import Loader from "../loader/Loader.js";
import { EditProfile } from "../EditProfileForms/EditProfileForms.js";

import { useStyles } from "./ApplicantProfile.styles";

export default function ApplicantProfile() {
  const userType = useSelector(state => state.login.usertype);
  const isEditing = useSelector(state => state.profileInfo.isEditing);
  const applicantProfileId = useSelector(
    state => state.profileInfo.profileDetails.applicant_id
  );
  const applicantDetails = useSelector(
    state => state.profileInfo.profileDetails
  );
  const grants = useSelector(state => state.grants);

  const dispatch = useDispatch();

  const classes = useStyles();

  const [profile, setProfile] = useState({
    first_name: applicantDetails.first_name,
    last_name: applicantDetails.last_name,
    bio: applicantDetails.bio,
    org_name: applicantDetails.org_name,
    city: applicantDetails.city,
    state: applicantDetails.state,
    zip: applicantDetails.zip,
    country: applicantDetails.country,
    sector: applicantDetails.sector,
    founding_date: applicantDetails.founding_date,
    website: applicantDetails.website
  });

  const handleChange = event => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateApplicantProfile(applicantProfileId, profile));
    dispatch(getApplicantInfo(applicantProfileId));
  };

  useEffect(() => {
    dispatch(getApplicantInfo(applicantProfileId));
    dispatch(getGrantsByApplicantId(applicantProfileId));
  }, [dispatch, applicantProfileId]);

  return (
    <div className={classes.root}>
      {applicantDetails ? (
        <div>
          <Grid className={classes.profile}>
            <div className={classes.leftpanel}>
              <LeftPanel applicantDetails={applicantDetails} />
            </div>
            <div>
              {isEditing === true ? (
                <EditProfile
                  profile={profile}
                  editHandleChange={handleChange}
                  handleSubmit={handleSubmit}
                  userType={userType}
                />
              ) : (
                <BioCard applicantDetails={applicantDetails} />
              )}
            </div>
          </Grid>
          <Grid className={classes.grants}>
            <div>
              <Grants applicantDetails={applicantDetails} />
            </div>
          </Grid>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
