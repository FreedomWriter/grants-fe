import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    width: "50%",
    margin: "5% auto",
    "& h4": {
      margin: "0.5em"
    }
  },

  grantslistheader: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    "& div": {
      margin: "auto"
    },
    maxHeight: "4em"
  },

  grantslistbody: {
    padding: "2%"
  },

  grantscard: {
    paddingBottom: "3%",
    marginBottom: "3%",
    borderBottom: "1px solid gray",
    "&:last-child": {
      paddingBottom: "0",
      borderBottom: "none"
    }
  },
  grantscardheader: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    "& h3": {
      margin: "0.05em"
    }
  }
}));
