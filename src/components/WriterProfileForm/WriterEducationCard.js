import React from "react";
import { useStyles } from "./WriterForm.styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function WriterEducationCard({ writersCollege, i }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.cardRoot}
      variant="outlined"
      key={writersCollege.id + (i + 1)}
    >
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          You attended
        </Typography>
        <Typography variant="h5" component="h2">
          {writersCollege.college}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Another School</Button>
      </CardActions>
    </Card>
  );
}
