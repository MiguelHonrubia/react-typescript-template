import * as React from "react";
import { FormComponentProps } from "../../types/general/FormComponent";
import { useTranslation } from "react-i18next";
import {
  TextField,
  MenuItem,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

// eslint-disable-next-line react/display-name
export const FormComponent: React.FC<FormComponentProps> = React.memo(
  ({
    input,
    register,
    setValue,
    errors,
    defaultValue,
    dropDownValues,
    getValues,
    refs,
    data,
    disabled,
    readOnly,
    defaultFiles,
    onChange,
    template,
    allDropDownValues,
    user,
  }) => {
    const {
      type,
      placeholder: placeholderKey,
      key,
      services,
      toolbar,
      headers,
      options,
      decimals,
      required,
      maxLength,
      fields,
      rows,
      rowsMax,
      clearable,
      helperText,
      label,
    } = input;
    const { t } = useTranslation();
    const placeholder = t(placeholderKey);
    const [render, setRender] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    React.useEffect(() => {
      setRender(true);
    }, []);

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };

    if (render) {
      switch (type) {
        case "string":
          return (
            <>
              <TextField
                placeholder={placeholder}
                autoComplete="off"
                id={key}
                key={key}
                name={key}
                ref={(ref) => {
                  register(ref, { required, maxLength });
                  refs[key] = ref;
                }}
                defaultValue={defaultValue}
                helperText={helperText}
                label={label}
                onInput={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                InputProps={{
                  readOnly: readOnly,
                }}
                disabled={disabled}
                required={required}
              />
            </>
          );
        case "textarea":
          return (
            <>
              <TextField
                placeholder={placeholder}
                autoComplete="off"
                multiline
                rowsMax={rowsMax}
                rows={rows}
                id={key}
                key={key}
                name={key}
                ref={(ref) => {
                  register(ref, { required, maxLength });
                  refs[key] = ref;
                }}
                defaultValue={defaultValue}
                helperText={helperText}
                label={label}
                onInput={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                InputProps={{
                  readOnly: readOnly,
                }}
                disabled={disabled}
                required={required}
              />
            </>
          );
        case "password":
          return (
            <>
              <Input
                placeholder={placeholder}
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                id={key}
                key={key}
                name={key}
                ref={(ref) => {
                  register(ref, { required, maxLength });
                  refs[key] = ref;
                }}
                defaultValue={defaultValue}
                onChange={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                disabled={disabled}
                required={required}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </>
          );
        case "number":
          return (
            <>
              <TextField
                placeholder={placeholder}
                type="number"
                autoComplete="off"
                id={key}
                key={key}
                name={key}
                ref={(ref) => {
                  register(ref, { required, maxLength });
                  refs[key] = ref;
                }}
                defaultValue={defaultValue}
                helperText={helperText}
                label={label}
                onInput={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                InputProps={{
                  readOnly: readOnly,
                }}
                disabled={disabled}
                required={required}
              />
            </>
          );
        case "date":
          return <></>;
        case "time":
          return (
            <>
              <TextField
                id={key}
                key={key}
                name={key}
                label={label}
                placeholder={placeholder}
                type="time"
                defaultValue={defaultValue}
                InputLabelProps={{
                  shrink: true,
                }}
                onInput={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                inputProps={{
                  step: 300,
                }}
              />
            </>
          );
        case "datetime":
          return (
            <>
              <TextField
                id={key}
                key={key}
                label={label}
                placeholder={placeholder}
                type="datetime-local"
                defaultValue={defaultValue}
                name={key}
                ref={(ref) => {
                  register(ref, { required, maxLength });
                  refs[key] = ref;
                }}
                onInput={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                disabled={disabled}
                required={required}
              />
            </>
          );
        case "list":
          return (
            <>
              <TextField
                placeholder={placeholder}
                select
                autoComplete="off"
                id={key}
                key={key}
                name={key}
                ref={(ref) => {
                  register(ref, { required, maxLength });
                  refs[key] = ref;
                }}
                defaultValue={defaultValue}
                helperText={helperText}
                label={label}
                onChange={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                InputProps={{
                  readOnly: readOnly,
                }}
                disabled={disabled}
                required={required}
              >
                {dropDownValues.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </>
          );
        case "multilist":
          return (
            <>
              <TextField
                placeholder={placeholder}
                select
                autoComplete="off"
                id={key}
                key={key}
                name={key}
                ref={(ref) => {
                  register(ref, { required, maxLength });
                  refs[key] = ref;
                }}
                defaultValue={defaultValue}
                helperText={helperText}
                label={label}
                onChange={(e: any) => {
                  setValue(key, e.value);
                  if (onChange) onChange(e, key);
                }}
                InputProps={{
                  readOnly: readOnly,
                }}
                SelectProps={{
                  multiple: true,
                }}
                disabled={disabled}
                required={required}
              >
                {dropDownValues.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </>
          );
        case "richtext":
          return <></>;
        case "rbGroup":
          return <></>;
        default:
          break;
      }
    }

    return <></>;
  }
);
