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
      // padding: "0",
    },
    media: {
      width: "200px",
      height: "auto",
      borderRadius: "20%",
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
      border: "1px solid white",
      width: "100%",
    },
  })
);
