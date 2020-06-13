import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    width: "65%",
    margin: "5% auto",
  },
  textarea: {
    margin: "0 auto",
    width: "100%"
  },
  datecontainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  addbutton: {
    marginLeft: "75%"
  }
}));
