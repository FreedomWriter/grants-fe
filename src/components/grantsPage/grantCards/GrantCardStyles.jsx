import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: "30px",
      [theme.breakpoints.up("md")]: {
        height: "auto",
      },
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
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
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        backgroundColor: theme.palette.primary.main,
      },
    },
    title: {
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
      },
      [theme.breakpoints.between("sm", "md")]: {
        textAlign: "left",
        maxWidth: "200px",
      },
    },
    boxInfo: {
      display: "flex",
      flexDirection: "row",
      padding: "0 0 0 0",
      paddingBottom: "0px",
      [theme.breakpoints.between("sm", "md")]: {
        display: "flex",
        flexDirection: "column",
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
        alignItems: "center",
      },
    },
    content: {
      width: "100%",
      textAlign: "left",
      padding: "0px",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    desc: {
      width: "100%",
      textAlign: "left",
      paddingLeft: "0px",
    },
    actionTop: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      margin: "auto",
      [theme.breakpoints.between("sm", "md")]: {
        // display: "block",
        flexDirection: "column",
      },
    },
    buttons: {
      marginLeft: "8px",
    },
  })
);
