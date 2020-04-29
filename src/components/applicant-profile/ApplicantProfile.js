import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BioCard from './BioCard'
import GrantsList from './grants-list/Grants'
import LeftPanel from './LeftPanel'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftpanel: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: '1rem',
    height: '20rem'
    },
  bio: {
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: '1rem',
    height: '20rem'
    },
  grants: {
    padding: theme.spacing(1),
    textAlign: 'center'    
  },

}));

export default function ApplicantProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid justify="center" container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.leftpanel}>
            <LeftPanel />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.bio}>
            <BioCard />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.grants}>
            <GrantsList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
