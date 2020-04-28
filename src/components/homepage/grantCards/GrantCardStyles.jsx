import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

//These can be imported via globals...
const color = {
  primary: "#33658A",
  accent: "#F6AE2D",
  add1: "#B2F7EF",
  add2: "#3A539B",
};
//..........

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
      background: color.accent,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    title: {
      // width: "100%",
      justifyContent: "left",
    },
    subheader: {
      display: "inline-block",
    },

    info: {
      // flexDirection: "row",
      padding: "0 0 0 0",
      paddingBottom: "0px",
      // height: "60px",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    boxes: {
      backgroundColor: color.add1,
      color: color.primary,
      width: "100px",
      margin: "5px",
      height: "auto",
      [theme.breakpoints.up("md")]: {
        height: "60px",
        marginTop: "auto",
      },
    },
    content: {
      width: "100%",
      textAlign: "left",
      padding: "0px",
      display: "flex",
    },
    desc: {
      width: "100%",
      textAlign: "left",
      paddingLeft: "0px",
    },
    actionTop: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        display: "block",
        flexDirection: "column",
      },
    },
  })
);
