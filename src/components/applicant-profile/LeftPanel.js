import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import { EditButton } from "../EditProfileForms/EditProfileForms.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: "0 auto",
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  userName: {
    width: "100%",
    textAlign: "center",
    fontSize: "0.850rem",
    fontFamily: "Roboto, Helvetica, Arial, sansSerif",
    fontWeight: "500",
    lineHeight: "1.57",
    letterSpacing: "0.00714em",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem",
    },
  }
}));

export default function LeftPanel({ profileDetails }) {
  const classes = useStyles();
  const applicantProfileId = profileDetails.applicant_id;
  const writerProfileId = profileDetails.writer_id;
  const viewerId = useSelector((state) => state.login.userId);
  const userType = useSelector((state => state.login.usertype));
  
  return (
    <>
      <div className={classes.leftpanel}>
        <div>
          <AccountCircleIcon className={classes.large} />
        </div>
        {userType === "applicant" ? (
          profileDetails.org_name === "" ? (
            <div className={classes.userName}>
              {profileDetails.first_name}{" "}{profileDetails.last_name}
            </div>
          ): (
            <div className={classes.userName}>
              {profileDetails.org_name}
            </div>
          ) 
        ): (
          <div clasName={classes.userName}>
            {profileDetails.first_name}
            {" "}
            {profileDetails.last_name}
          </div>
        )}
        <div>
        <a href={`http://${profileDetails.website}`}>{profileDetails.website}</a>
        </div>
        <div>
          <Button 
            variant="contained" color="primary" href="#">
            Direct Message
          </Button>
        </div>
        <div>
          <EditButton 
            viewerId={viewerId} 
            profileId={applicantProfileId} 
          />     
          <EditButton
            viewerId={viewerId}
            profileId={writerProfileId}
          />
        </div>
      </div>
    </>
  );
}
