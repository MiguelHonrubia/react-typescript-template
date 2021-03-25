import * as React from "react";
import { useHistory } from "react-router-dom";
import { useSnackbarValue } from "../../contexts/snackbar";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../../components/user/LoginForm";

export const Login: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const { showSnackbar } = useSnackbarValue();
  const { t } = useTranslation();

  const handleOnSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await Login(values);
      if (response) {
        history.push(`/`);
      }
    } catch (error) {
      showSnackbar({ text: t("general.snackbar.login.error"), type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={handleOnSubmit} />
    </>
  );
};
