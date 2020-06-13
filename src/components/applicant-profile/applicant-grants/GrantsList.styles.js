import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    width: "50%",
    margin: "5% auto",
    "& h4": {
      margin: "0.5em", 
    }
  },
  grantslistheader: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    "& div": {
      margin: "auto"
    }
  }
}));
