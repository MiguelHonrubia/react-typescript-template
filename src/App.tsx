import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import "./styles/App.css";
import { Router } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { AuthProvider } from "./contexts/auth";
import { SnackbarProvider } from "./contexts/snackbar";
import history from "./lib/history";
import { AppRoutes } from "./AppRoutes";
import { theme } from "./lib/theme";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Footer } from "./components/general/Footer";
import favicon from "../public/favicon.ico";

const App: React.FC = () => {
  const { t } = useTranslation();

  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    main: {
      padding: "2em",
      //backgroundImage: `url(${bgLogo})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% auto",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <link
          rel="icon"
          type="image/vnd.microsoft.icon"
          href={favicon}
          sizes="16x16"
        />
      </Helmet>
      <DndProvider backend={HTML5Backend}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <Router history={history}>
                {/* <Header /> */}
                <main className={classes.main}>
                  <AppRoutes />
                </main>
                <Footer />
              </Router>
            </SnackbarProvider>
          </ThemeProvider>
        </AuthProvider>
      </DndProvider>
    </div>
  );
};

export default App;
