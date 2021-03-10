import * as React from "react";
import { IconButton, Theme, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { SvgIconComponent } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    padding: 0,
  },
  toolbarButton: {
    borderRadius: 0,
    height: "100%",
    minWidth: "4em",
  },
  toolbarButtonLabel: {
    flexDirection: "column",
  },
  toolbarButtonText: {
    fontSize: "10px",
    letterSpacing: "1.25px",
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
}));

export type ToolbarProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  Icon: SvgIconComponent;
  text: string;
  disabled?: boolean;
};

const ToolbarButton: React.FC<ToolbarProps> = ({
  Icon,
  text,
  handleClick,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <IconButton
      disabled={disabled}
      onClick={handleClick}
      color="primary"
      classes={{
        label: classes.toolbarButtonLabel,
        root: classes.toolbarButton,
      }}
    >
      <Icon />
      <span className={classes.toolbarButtonText}>{text.toUpperCase()}</span>
    </IconButton>
  );
};

export const ToolbarWithActions: React.FC<{
  toolbarButtons: ToolbarProps[];
  className?: string;
}> = ({ toolbarButtons, className }) => {
  const classes = useStyles();
  return (
    <Toolbar className={`${classes.toolbar} ${className ? className : ""}`}>
      {toolbarButtons.map((el, index) => (
        <ToolbarButton
          disabled={el.disabled}
          key={index}
          Icon={el.Icon}
          text={el.text}
          handleClick={el.handleClick}
        />
      ))}
    </Toolbar>
  );
};
