import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  
  editTitle: {
    marginTop: "5%",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem"
    }
  },

  location: {
   display: "flex",
   flexDirection: "column"
  },

  moreInfo: {
    display: "flex",
    flexDirection: "column"
  },
}));