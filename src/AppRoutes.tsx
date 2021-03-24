import { Snackbar as MuiSnackbar } from "@material-ui/core";
import * as React from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { Loader } from "./components/general/Loader";
import { useSnackbarValue } from "./contexts/snackbar";
import { routes } from "./utils/routes";
import { Alert } from "./components/general/Alert";
import { RouteWithAuth } from "./utils/hocs";

const Snackbar = () => {
  const { open, type, text, closeSnackbar } = useSnackbarValue();
  return (
    <MuiSnackbar open={open} autoHideDuration={4000} onClose={closeSnackbar}>
      <Alert type={type} text={text} onClose={closeSnackbar} />
    </MuiSnackbar>
  );
};

export const AppRoutes: React.FC = () => {
  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <Switch>
          {routes.map(({ path, Component, authRequired, exact }, index) =>
            authRequired ? (
              <RouteWithAuth
                component={Component}
                path={path}
                key={index}
                exact={exact}
              />
            ) : (
              <Route
                component={Component}
                path={path}
                key={index}
                exact={exact}
              />
            )
          )}
        </Switch>
        <Snackbar />
      </React.Suspense>
    </>
  );
};
