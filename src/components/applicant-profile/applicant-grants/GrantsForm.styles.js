import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    width: "50%",
    margin: "5% auto",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center"
    }
  },
  grantsform: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
      display: "flex",
      justifyContent: "center",
    }
  },
  textarea: {
    margin: "0 auto",
    width: "100%"
  },
  grantsbuttons: {
    width: "65%",
    justifyContent: "flex-end",
    display: "flex",
    flexDirection: "row",
    "& button": {
      marginLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignContent: "space-between",
      margin: "0 auto",
      height: "40%",
      width: "75%",
      "& button": {
        marginLeft: "0",
        marginBottom: "5px"
      }
    }
  }
}));
