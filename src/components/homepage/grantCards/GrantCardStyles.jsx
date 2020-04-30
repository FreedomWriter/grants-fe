import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
      border: `1px solid ${theme.palette.secondary.main}`,
      height: "200px",
      boxShadow: "30px",
      [theme.breakpoints.up("md")]: {
        height: "auto",
      },
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
      backgroundColor: theme.palette.primary.main,
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
      display: "flex",
      justifyContent: "center",
      color: theme.palette.primary,
      width: "100px",
      margin: "5px",
      height: "auto",
      [theme.breakpoints.up("md")]: {
        height: "60px",
        alignItems: "center",
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
    buttons: {
      marginLeft: "8px",
    },
  })
);
