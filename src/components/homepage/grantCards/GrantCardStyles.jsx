import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
      background: theme.palette.secondary.main,
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
      width: "10%",
      justifyContent: "left",
    },
    subheader: {
      display: "inline-block",
    },

    boxInfo: {
      padding: "0 0 0 0",
      paddingBottom: "0px",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    boxes: {
      backgroundColor: theme.palette.common.aqua,
      color: theme.palette.primary,
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
