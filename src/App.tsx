import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/App.css";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">{t("pages.home")}</header>
    </div>
  );
};

export default App;
