import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//contact icons...
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";

import { useStyles } from "./GrantCardStyles.jsx";

export default function GrantCard(props) {
  const grant = props.data;
  // console.log("GrantCard: ", grant);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("GrantCard(props): ", props);

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {grant.title[0]}
          </Avatar>
        }
        action={
          <CardActions className={classes.actionTop}>
            <IconButton
              aria-label="add to favorites"
              className={classes.buttons}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="direct message" className={classes.buttons}>
              <ChatRoundedIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        }
        title={
          <div className={classes.content}>
            <div className={classes.desc}>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.title}
              >
                {grant.title}
              </Typography>
            </div>
            <div className={classes.boxInfo}>
              <Typography className={classes.boxes}>Timeframe</Typography>
              <Typography className={classes.boxes}>{grant.sector}</Typography>
              <Typography className={classes.boxes}>Roles</Typography>
            </div>
          </div>
        }
        subheader={
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Grant Details:</Typography>
          {grant.detailContent.map((detail) => {
            return <Typography key={grant.title}>{detail}</Typography>;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
