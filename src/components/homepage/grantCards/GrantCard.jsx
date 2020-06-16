import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//contact icons...
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";

import { useStyles } from "./GrantCardStyles.jsx";

import {
  postFavorite,
  deleteFavorite,
  getFavorite,
} from "../../../store/actions/favoritesActions";

export default function GrantCard(props) {
  const dispatch = useDispatch();
  const grant = props.data;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [faved, setFaved] = React.useState(false);
  const userId = useSelector((state) => state.login.userId);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addFavClickHandler = async (grant) => {
    await dispatch(postFavorite(grant));
    // await dispatch(getFavorite(userId));
    return setFaved(true);
  };

  const removeFavClickHandler = async (grant) => {
    await dispatch(deleteFavorite(grant));
    return setFaved(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {grant.grant_name[0]}
          </Avatar>
        }
        action={
          <CardActions className={classes.actionTop}>
            {/* if user has favorited a grant, the icon renders as a filled in heart and the click handler is set to remove it, if the user has not faved the grant, the icon is a heart border and the click handler is set to add it  */}
            {!faved ? (
              <IconButton
                aria-label="add to favorites"
                className={classes.buttons}
                onClick={() => addFavClickHandler(grant)}
              >
                <FavoriteBorderIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="remove from favorites"
                className={classes.buttons}
                onClick={() => removeFavClickHandler(grant)}
              >
                <FavoriteIcon />
              </IconButton>
            )}
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
                {grant.grant_name}
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
          <Typography paragraph>{grant.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
