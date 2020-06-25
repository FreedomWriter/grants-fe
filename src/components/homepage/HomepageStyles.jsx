import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

//These can be imported via globals...
const color = {
  primary: "#33658A",
  accent: "#F6AE2D",
  add1: "#B2F7EF",
  add2: "#3A539B",
};
//..........

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
      background: color.accent,
    },
    container: {
      padding: "50px 0 0 0",
      width: "80%",
      margin: "auto",
    },
    appHeader: {},
  })
);
