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
      margin: "auto",
      width: "200px",
      height: "100px",
      borderRadius: "5px",
      overflow: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    title: {
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
      flexDirection: "row",
      padding: "0 0 0 0",
      paddingBottom: "0px",
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
    userInfo: {
      display: "flex",
      width: "100%",
      backgroundColor: color.primary,
      justifyContent: "center",
      lineHeight: "10px",
    },
    userRight: {
      width: "100%",
    },
  })
);
