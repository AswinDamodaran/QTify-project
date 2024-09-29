import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#121212",
      dark: "#34C94B",
      contrastText: "#fff",
    },
  },
});

export default theme;