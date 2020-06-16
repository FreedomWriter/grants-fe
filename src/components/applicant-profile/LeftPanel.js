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
}));

export default function LeftPanel({ applicantDetails }) {
  const classes = useStyles();
  const profileId = applicantDetails.applicant_id;
  const viewerId = useSelector((state) => state.login.userId);
  return (
    <>
      <div className={classes.leftpanel}>
        <div>
          <AccountCircleIcon className={classes.large} />
        </div>
        <div>
          <Button variant="contained" color="primary" href="#">
            Direct Message
          </Button>
        </div>
        <div>Visit Our website:</div>
        <a href={applicantDetails.website}>{applicantDetails.website}</a>
      </div>
      <EditButton viewerId={viewerId} profileId={profileId} />
    </>
  );
}
