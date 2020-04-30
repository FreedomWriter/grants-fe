import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 1345,
      // background: theme.palette.common.aqua,
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
    avatar: {
      backgroundColor: red[500],
    },
    title: {
      justifyContent: "left",
    },
    subheader: {
      display: "inline-block",
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
      border: `1px solid ${theme.palette.primary.main}`,
      justifyContent: "center",
      lineHeight: "10px",
    },
    userRight: {
      width: "100%",
    },
  })
);
