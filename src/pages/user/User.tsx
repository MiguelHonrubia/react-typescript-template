import * as React from "react";
import { Paper, Tabs, Tab, Grid, AppBar } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Login } from "./Login";
import { Register } from "./Register";

const USER_TABS = [
  {
    label: "pages.tab.login",
  },
  {
    label: "pages.tab.register",
  },
];

const User: React.FC = () => {
  const [tab, setTab] = React.useState(0);
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Paper style={{ maxWidth: "20%" }}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <AppBar position="static">
            <Tabs
              value={tab}
              onChange={(event, newValue) => setTab(newValue)}
              aria-label="Login-Register"
            >
              {USER_TABS.map(({ label }, index) => (
                <Tab label={t(label)} key={index} />
              ))}
            </Tabs>
          </AppBar>
          {tab === 0 ? <Login /> : tab === 1 ? <Register /> : <></>}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default User;
