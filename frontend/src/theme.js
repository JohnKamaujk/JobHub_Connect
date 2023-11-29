import { createTheme } from "@mui/material/styles";
import { purple, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: purple[800],
      midNightPurple: "#280137",
    },
  },
});
