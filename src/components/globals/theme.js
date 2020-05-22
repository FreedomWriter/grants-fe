import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#3A539B";
const darkBlue = "#33658A";
const golden = "#F6AE2D";
const aqua = "#B2F7EF";
// original aqua 9adbd4
// replacement aqua B2F7EF ??
export default createMuiTheme({
  palette: {
    common: {
      aqua: aqua,
      darkBlue: darkBlue,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: golden,
    },
  },
});
