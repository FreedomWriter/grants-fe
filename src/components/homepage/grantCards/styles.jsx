import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const colors = {
  primary: "#33658A",
  accent: "#F6AE2D",
  add1: "#B2F7EF",
  add2: "#3A539B",
};

const color = {
  primary: "#33658A",
  accent: "#F6AE2D",
  add1: "#B2F7EF",
  add2: "#3A539B",
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
      background: color.accent,
      // padding: "0",
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
    boxes: {
      backgroundColor: color.add1,
      color: color.primary,
      width: "100px",
      margin: "5px",
      height: "auto",
    },
    info: {
      // display: "flex",
      flexDirection: "row",
      padding: "0 0 0 0",
      paddingBottom: "0px",
    },
    content: {
      width: "100%",
      textAlign: "left",
    },
  })
);
