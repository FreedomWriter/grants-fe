import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StylesProvider, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./writerProfile.styles.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const GlobalCSS = withStyles({
  "@global": {
    ".MuiPaper-elevation3": {
      width: "90%",
      height: "275px",
      marginTop: "40%",
      marginLeft: "5%",
      display: "grid",
      gridTemplateColumns: "1.3fr 2.8fr",
      gridTemplateRows: "0.6fr 0.8fr",
      gap: "5px 5px",
    },
    ".MuiSvgIcon-fontSizeLarge": {
      margin: "20%",
      width: "2em",
      height: "2em",
    },
  },
})(() => null);

export default function WriterProfile() {
  const classes = useStyles();
  return (
    <StylesProvider>
      <GlobalCSS />
      <Paper elevation={3} color="primary">
        {" "}
        <div>
          <AccountCircleIcon fontSize="large" />
        </div>
        <div className={classes.userEducation}>Bio:</div>
        <div className={classes.userName}>blah</div>
        <div className={classes.userBio}>blah</div>
      </Paper>
    </StylesProvider>
  );
}
