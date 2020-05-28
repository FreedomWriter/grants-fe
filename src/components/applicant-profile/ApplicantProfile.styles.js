import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  leftpanel: {
    padding: "25px 0",
    textAlign: "center",
    "& div": {
      marginBottom: "5%"
    }
  },
  biosection: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gridTemplateRows: "1fr",
    gap: "1px 1px",
    "& h1": {
      fontSize: "2em",
      [theme.breakpoints.down("xs")]: {
        margin: "0"
      }
    },
    "& h2": {
      fontSize: "1.2em",
      fontWeight: "normal",
      marginBlockStart: "1.8em",
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "2fr",
        textAlign: "center",
        marginBlockStart: "0.3em",
        margin: "0.5em"
      }
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "2fr",
      textAlign: "center"
    }
  },
  bioheader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem"
    }
  },
  sector: {
    margin: "1em"
  },
  grants: {
    width: "65%",
    margin: "40px auto",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "2fr",
      gridTemplateRows: "1fr",
      width: "85%"
    }
  },
  profilegrantcard: {
    width: "90%",
    margin: "4% auto",
  },
  grantblock: {
    marginTop: "10px"
  },
  profilepaper: {
    backgroundColor: "lightGray",
    minHeight: "65%",
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      padding: "2%"
    },
    "& p": {
      lineHeight: "1.4rem",
      margin: "0",
      padding: "1%",
      [theme.breakpoints.down("xs")]: {
        margin: "0",
        padding: "3%",
      },
      [theme.breakpoints.up("xs")]: {
        textAlign: "justify",
      }
    },
    "& h4": {
      margin: "1% 2% 0",
      [theme.breakpoints.down("xs")]: {
        margin: "5% 0 0"
      }
    },
  },
  profile: {
    margin: "1rem auto",
    width: "65%",
    display: "grid",
    gridTemplateColumns: "0.5fr 0.9fr",
    gridTemplateRows: "1fr",
    gap: "1px 75px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "2fr",
      gridTemplateRows: "1fr",
      width: "85%"
    }
  }
}));
