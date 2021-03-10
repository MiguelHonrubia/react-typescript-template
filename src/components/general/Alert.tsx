import { Alert as MuiAlert, Color } from "@material-ui/lab";
import * as React from "react";

export const Alert: React.FC<{
  type: Color;
  text: string;
  onClose: (e) => void;
}> = ({ type, text, onClose }) => {
  return (
    <MuiAlert onClose={onClose} severity={type} elevation={6} variant="filled">
      {text}
    </MuiAlert>
  );
};
