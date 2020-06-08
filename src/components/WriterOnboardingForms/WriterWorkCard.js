import React from "react";
import { useStyles } from "./WriterForm.styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

export default function WriterEducationCard({ writersWork }) {
  const classes = useStyles();

  return (
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          data-testid="company-header"
        >
          Company
        </Typography>
        <Typography variant="h5" component="h2">
          {writersWork.company}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          data-testid="position-header"
        >
          Position: {writersWork.position}
        </Typography>
        <Typography variant="body2" component="p">
          Start Date: {writersWork.start_date}
          <br />
          {writersWork.current_position
            ? `Current Position`
            : `End Date: ${writersWork.end_date}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          responsibilities: {writersWork.responsibilities}
        </Typography>
        {/* /* These buttons currently do nothing */}
        <Grid container justify="space-between">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Edit
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
}
