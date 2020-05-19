import { makeStyles, createStyles } from "@material-ui/core/styles";

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
    userInfo: {
      display: "flex",
      justifyContent: "center",
      lineHeight: "10px",
      padding: "0 50px",
    },
    applicant: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    writer: {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    userRight: {
      width: "100%",
    },
    userDisplay: {
      margin: "10px auto",
    },
    userP: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  })
);
