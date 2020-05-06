import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftpanel: {
    padding: '45px 0',
    textAlign: 'center',
    },
  bioname: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gridTemplateRows: '1fr',
    gap: '1px 1px',
    [theme.breakpoints.down("xs")]: {
    gridTemplateColumns: '2fr',
    textAlign: 'center'
    }
  },
  bioheader: {
    [theme.breakpoints.down("xs")]: {
    fontSize: '2rem',
    margin: '0'
    }
  },
  grants: {
    width: "90%",
    margin: '40px auto',
    [theme.breakpoints.down("xs")]: {
    gridTemplateColumns: '2fr',
    gridTemplateRows: '1fr',
    width: '70%'
    }
  },
  profilepaper: {
    padding: theme.spacing(1),
    backgroundColor: 'lightGray'
  },
  profile: {
    margin: '1rem auto',
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '0.5fr 1.5fr',
    gridTemplateRows: '1fr',
    gap: '1px 75px',
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: '2fr',
      gridTemplateRows: '1fr',
      width: '70%'
    }
  }

}));