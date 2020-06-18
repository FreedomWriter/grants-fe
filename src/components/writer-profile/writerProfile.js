import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./writerProfile.styles.js";
import Loader from "../loader/Loader.js";
import { EditProfile } from "../EditProfileForms/EditProfileForms.js";
import { Grid } from "@material-ui/core";
import {
  getWriterInfo,
  updateWriterProfile,
} from "../../store/actions/profileActions.js";
import WriterEducation from "./WriterEducation.js";
import WriterServices from "./WriterServices.js";
import WorkHistory from "./WorkHistory.js";

//shared imports currently located in applicant-profile folder
import BioCard from "../applicant-profile/BioCard.js";
import LeftPanel from "../applicant-profile/LeftPanel.js";

const WriterProfile = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  //Redux
  const writer = useSelector((state) => state.profileInfo.profileDetails);
  const userId = useSelector((state) => state.login.userId);
  const userType = useSelector((state) => state.login.usertype);
  const isEditing = useSelector((state) => state.profileInfo.isEditing);
  const isLoading = useSelector((state) => state.profileInfo.isLoading);

  const [profile, setProfile] = useState({
    first_name: writer.first_name,
    last_name: writer.last_name,
    bio: writer.bio,
    city: writer.city,
    state: writer.state,
    zip: writer.zip,
    country: writer.country,
    sector: writer.sector,
    website: writer.website,
  });

  useEffect(() => {
    dispatch(getWriterInfo(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  //
  const editHandleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateWriterProfile(userId, profile));
    dispatch(getWriterInfo(userId));
  };

  return (
    <div className={classes.root}>
      {writer && !isLoading ? (
        <div>          
          <Grid className={classes.profile}>
            
            <div className={classes.leftpanel}>
              <LeftPanel 
                profileDetails={writer}
              />
            </div>
            
            <div>
              {isEditing === true ? (
                <EditProfile
                  profile={profile}
                  editHandleChange={editHandleChange}
                  handleSubmit={handleSubmit}
                  userType={userType}
                />
              ) : (
                  <BioCard 
                    profileDetails={writer}
                  />
              )}
            </div>
          </Grid>
          <Grid className={classes.bottomGrid}>

            {/* <div>
            <WriterEducation />
            </div> */}
          
            {/* <div>  
            <WriterServices />
            </div> */}
            
            {/*These are currently inactive until the connection to backend is put in place.*/}
            <div>            
            <WorkHistory 
              writer={writer}
            />
            </div>
            
          </Grid> 
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default WriterProfile;
