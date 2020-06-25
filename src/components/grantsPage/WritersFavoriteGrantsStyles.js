import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "50px 0 0 0",
    width: "80%",
    margin: "auto",
  },
  h3: {
    color: theme.palette.common.darkBlue,
    marginTop: "5%",
    justifyContent: "center",
  },
}));
