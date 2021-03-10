import { colors } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.green[900],
      // dark: '#1b5e20',
    },
    secondary: {
      main: "#F0BA5A",
    },
    error: {
      main: colors.red[500],
    },
    warning: {
      main: colors.yellow[700],
    },
    success: {
      main: colors.green[500],
    },
    action: {
      active: "rgba(33, 33, 33, 0.6)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
