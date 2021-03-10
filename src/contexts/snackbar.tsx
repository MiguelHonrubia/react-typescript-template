import { Color } from "@material-ui/lab";
import * as React from "react";

interface SnackbarParams {
  open?: boolean;
  type: Color;
  text: string;
}

interface SnackbarState extends SnackbarParams {
  showSnackbar: (args: SnackbarParams) => void;
  closeSnackbar: () => void;
}

const initialState = {
  open: false,
  type: undefined,
  text: "",
  showSnackbar: undefined,
  closeSnackbar: undefined,
};
export const SnackbarContext = React.createContext<SnackbarState>(initialState);
export const SnackbarProvider = ({ children }) => {
  const [state, setState] = React.useState({
    open: false,
    type: undefined,
    text: "",
  });

  const showSnackbar = (params: SnackbarParams) => {
    if (!state.open) {
      setState((state) => ({
        ...state,
        open: true,
        type: params.type,
        text: params.text,
      }));
    }
  };

  const closeSnackbar = () => {
    if (state.open) {
      setState((state) => ({
        ...state,
        open: false,
        type: undefined,
        text: "",
      }));
    }
  };

  return (
    <SnackbarContext.Provider
      value={{
        closeSnackbar,
        showSnackbar,
        open: state.open,
        text: state.text,
        type: state.type,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
export const useSnackbarValue = () =>
  React.useContext<SnackbarState>(SnackbarContext);
