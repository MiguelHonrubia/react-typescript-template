/* eslint-disable react/display-name */
import * as React from "react";
import { Route, useHistory } from "react-router-dom";
import { ErrorBoundary } from "../components/general/ErrorBoundary";
import { SkeletonTable } from "../components/general/SkeletonTable";
import { useAuthValue } from "../contexts/auth";

export const withErrorBoundaryAndSuspenseTable = (Component) => (props) => (
  <ErrorBoundary>
    <React.Suspense fallback={<SkeletonTable />}>
      <Component {...props} />
    </React.Suspense>
  </ErrorBoundary>
);

export const withErrorBoundaryAndSuspenseDiscussion = (Component) => (
  props
) => (
  <ErrorBoundary>
    <React.Suspense fallback={<SkeletonTable />}>
      <Component {...props} />
    </React.Suspense>
  </ErrorBoundary>
);

export const RouteWithAuth: React.FC<{
  component: React.FC;
  path?: string;
  exact: boolean;
}> = ({ component, path, exact }) => {
  const { isAuthenticated, user, signin } = useAuthValue();
  const history = useHistory();

  const authProcess = async () => {
    if (!user && !isAuthenticated()) {
      signin(history);
    }
  };

  React.useEffect(() => {
    authProcess();
  });

  return <Route component={component} path={path} exact={exact} />;
};
