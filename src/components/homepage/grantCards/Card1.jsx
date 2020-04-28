import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
//contact icons...
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LocalPostOfficeRoundedIcon from "@material-ui/icons/LocalPostOfficeRounded";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function Card1(props) {
  const grant = props.data;
  // console.log("CARD1: ", grant);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={grant.title}
        subheader={grant.closedDate}
      />
      {/* <CardMedia
        className={classes.media}
        image={grant.image}
        title={grant.title}
      /> */}
      <CardContent>
        {/*Collapsed content*/}
        <Typography variant="body2" color="textSecondary" component="p">
          {grant.detailMain}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* Quick Access Buttons */}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="direct message">
          <ChatRoundedIcon />
          <EmailRoundedIcon />
          <LocalPostOfficeRoundedIcon />
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardMedia
            className={classes.media}
            image={grant.image}
            title={grant.title}
          />
          <Typography paragraph>Grant Details:</Typography>
          {grant.detailContent.map((detail) => {
            return <Typography>{detail}</Typography>;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
