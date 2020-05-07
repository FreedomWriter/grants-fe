import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: '0 auto'
    }
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AccountCircleIcon className={classes.large} />
      </div>
      <Button
            variant="contained"
            color="primary"
            href="#"
          >
            Direct Message
      </Button>
      <Typography variant='subtitle1'>
        <div>Visit Our Website:</div>
        <div>www.writemygrants.net</div>
      </Typography>
    </>
  );
}