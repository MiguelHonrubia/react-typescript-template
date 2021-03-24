import * as React from "react";
import { UserFormContainer } from "../../styles/components/CoolContainer";
import { useHistory } from "react-router-dom";
import { useSnackbarValue } from "../../contexts/snackbar";
import { useTranslation } from "react-i18next";
import { singUp } from "../../services/user";
import { RegisterForm } from "../../components/user/RegisterForm";

export const Register: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const { showSnackbar } = useSnackbarValue();
  const { t } = useTranslation();

  const handleOnSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await singUp(values);
      if (response) {
        history.push(`/`);
      }
    } catch (error) {
      showSnackbar({
        text: t("general.snackbar.register.error"),
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleOnSubmit} />
    </>
  );
};
