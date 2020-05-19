import React from "react";
import { Link, Route } from "react-router-dom";
import "../../index.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import { useStyles } from './LandingPage.styles.js';
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import User1 from "../../images/user-story-1.jpg";
import User2 from "../../images/user-story-2.jpg";
import User3 from "../../images/user-story-3.jpg";

const useStyles = makeStyles((theme) => ({
  buttons: {
    margin: theme.spacing(3, 3, 2),
    color: "#000000",
    "&:hover": {
      color: "#FFFFFF",
    },
  },

  icons: {
    fontSize: "9.3em",
    color: "#3A539B",
  },

  info: {
    marginTop: "3%",
    justifyItems: "space-between",
  },

  applicants: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0 5% 5% 5%",
  },

  writers: {
    display: "flex",
    flexDirection: "row-reverse",
    margin: "0 5% 8% 5%",
    alignItems: "center",
  },

  p: {
    fontSize: "1.4em",
    margin: "0 2% 0 5%",
  },

  userStories: {
    backgroundColor: "rgba(58, 83, 155, 0.9)",
    display: "inline-block",
  },

  paper: {
    height: 350,
    width: 250,
    margin: theme.spacing(2),
    paddingTop: "10%",
    textAlign: "center",
  },

  userStoriesTitle: {
    textAlign: "center",
    fontSize: "2em",
  },

  users: {
    borderRadius: "50%",
    height: 90,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  userReview: {
    margin: "5% 10% 0 10%",
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className="full-container">
      <div className="top-container">
        <div className="top-container-info">
          <h1>Get help with your grant today!</h1>
          <h3>
            An online platform that connects applicants and organizations with
            skilled writers eager to help with your grant proposals.
          </h3>
          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              className={classes.buttons}
              size="large"
              component={Link}
              to="/RegisterForm"
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttons}
              size="large"
              component={Link}
              to="/LoginForm"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <Grid container direction="column" className={classes.info}>
        <Grid item xs={12} className={classes.applicants}>
          <SupervisedUserCircleRoundedIcon className={classes.icons} />
          <p className={classes.p}>
            Grant applicants can create a profile letting writers know about
            their organization and what grants they are trying to apply for.
            Applicant can also view a list of available grants if still
            searching for support.
          </p>
        </Grid>
        <Grid item xs={12} className={classes.writers}>
          <MenuBookRoundedIcon className={classes.icons} />
          <p className={classes.p}>
            Grant writers can create a profile showcasing their skills in order
            to easily connect with applicants in their field. They can browse
            through applicants/organizations profiles and message them if
            interested in assisting with their grant proposal.
          </p>
        </Grid>
      </Grid>
      <div>
        <Grid container className={classes.userStories}>
          <h2 className={classes.userStoriesTitle}>Granted Users</h2>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item>
                <Paper className={classes.paper}>
                  <img src={User1} alt="user-story-one" className={classes.users} />
                  <span>
                    <i>
                      Debra White
                      <br /> Dallas, TX
                    </i>
                  </span>
                  <p className={classes.userReview}>
                    Easiest, fastest way to connect with grant proposal writers.
                    Within a day I had already come across multiple writers that
                    would be perfect in assisting in my grant application
                    process.{" "}
                  </p>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <img src={User2} alt="user-story-two" className={classes.users} />
                  <span>
                    <i>
                      Michael Gillam
                      <br />
                      Sacramento, CA
                    </i>
                  </span>
                  <p className={classes.userReview}>
                    I love having a space to show my writing experience. I feel
                    it makes it easier to connect with people in search of grant
                    proposal writers to see what I specialize in.
                  </p>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.paper}>
                  <img src={User3} alt="user-story-three" className={classes.users} />
                  <span>
                    <i>
                      Kathleen Garcia
                      <br />
                      Hartford, CA
                    </i>
                  </span>
                  <p className={classes.userReview}>
                    Thanks to Granted I've finished one of the last steps of my
                    application process. Having a user-friendly site to search
                    for writers helped a lot.
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
