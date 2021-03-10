import { FormKeys } from "../../types/general/FormKeys";

export const loginFormKeys: FormKeys[] = [
  {
    key: "email",
    placeholder: "pages.login.form.email",
    type: "string",
    position: 0,
  },
  {
    key: "password",
    placeholder: "pages.login.form.password",
    type: "string",
    position: 1,
  },
];

export const registerFormKeys: FormKeys[] = [
  {
    key: "email",
    placeholder: "pages.login.form.email",
    type: "string",
    position: 0,
  },
  {
    key: "username",
    placeholder: "pages.login.form.username",
    type: "string",
    position: 0,
  },
  {
    key: "password",
    placeholder: "pages.login.form.password",
    type: "string",
    position: 1,
  },
  {
    key: "confirmPassword",
    placeholder: "pages.login.form.confirm-password",
    type: "string",
    position: 1,
  },
];
