import React from "react";
import { useStyles } from "./WriterForm.styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function WriterEducationCard({ writersCollege, i }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.cardRoot}
      variant="outlined"
      key={writersCollege.college + writersCollege.startDate + Math.random()}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Attended
        </Typography>
        <Typography variant="h5" component="h2">
          {writersCollege.college}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Earned: {writersCollege.degree}
        </Typography>
        <Typography variant="body2" component="p">
          Start Date: {writersCollege.startDate}
          <br />
          Start Date: {writersCollege.endDate}
        </Typography>
      </CardContent>
    </Card>
  );
}
