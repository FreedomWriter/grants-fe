import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "./LandingPage.styles.js";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import Grid from "@material-ui/core/Grid";
import User1 from "../../images/user-story-1.jpg";
import User2 from "../../images/user-story-2.jpg";
import User3 from "../../images/user-story-3.jpg";

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className="full-container">
      <div className={classes.topContainer}>
        <div className={classes.topContainerInfo}>
          <h1 className={classes.title}>Get help with your grant today!</h1>
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
                  <img
                    src={User1}
                    alt="user-story-one"
                    className={classes.users}
                  />
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
                  <img
                    src={User2}
                    alt="user-story-two"
                    className={classes.users}
                  />
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
                  <img
                    src={User3}
                    alt="user-story-three"
                    className={classes.users}
                  />
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
