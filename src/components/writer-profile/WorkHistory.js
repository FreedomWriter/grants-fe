import React from "react";
import {
  Card,
  CardContent,
  Typography
}from "@material-ui/core";
import { useStyles } from "./writerProfile.styles.js";
import { useStyles as workStyles } from "../WriterOnboardingForms/WriterForm.styles.js";

const WorkHistory = ({writer}) => {
  const classes = useStyles();
  const workClasses = workStyles();

  return (
    <h3 className={classes.finalGrid}>
      Work History:
      {writer &&
        writer.workHistory &&
        writer.workHistory.map((writersWorkHistory) => (
          <Card
            className={workClasses.cardRoot}
            key={writersWorkHistory.id}
            variant="outlined"
          >
            <CardContent>
              <Typography
                className={workClasses.title}
                color="textSecondary"
                gutterBottom
                data-testid="company-header"
              >
                Company
              </Typography>
              <Typography variant="h5" component="h2">
                {writersWorkHistory.company}
              </Typography>
              <Typography
                className={workClasses.pos}
                color="textSecondary"
                data-testid="position-header"
              >
                Position: {writersWorkHistory.position}
              </Typography>
              <Typography variant="body2" component="p">
                Start Date: {writersWorkHistory.start_date}
                <br />
                {writersWorkHistory.current_position === "true"
                  ? `Current Position`
                  : `End Date: ${writersWorkHistory.end_date}`}
              </Typography>
              <Typography
                className={workClasses.pos}
                color="textSecondary"
              >
                responsibilities: {writersWorkHistory.responsibilities}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </h3>
  );
};

export default WorkHistory;