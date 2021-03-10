import * as React from "react";
import { withTranslation } from "react-i18next";
import { Grid, Paper, colors } from "@material-ui/core";

export class ErrorBoundary extends React.Component<unknown, { error: Error }> {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export class ErrorBoundaryTranslation extends React.Component<
  any,
  { error: Error }
> {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <Grid container>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: "2em",
                textAlign: "center",
                height: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: colors.grey[200],
              }}
            >
              <span style={{ fontWeight: 500, color: colors.grey[500] }}>
                Something went wrong.
              </span>
            </Paper>
          </Grid>
        </Grid>
      );
    }

    return this.props.children;
  }
}

export const ErrorWithTranslation = withTranslation()(ErrorBoundaryTranslation);
