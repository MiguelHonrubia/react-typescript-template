import * as React from "react";
import { Grid, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { FormComponent } from "../general/FormComponent";
import { FormProps } from "../../types/general/FormProps";
import { useTranslation } from "react-i18next";
import { REGISTER_FORM_KEYS } from "../../keys/form/user";
import { Form, ContainerForm } from "../../styles/components/Forms";

export const RegisterForm: React.FC<FormProps<any>> = ({ onSubmit }) => {
  const { handleSubmit, register, errors, setValue, getValues } = useForm();
  const refs = {};
  const { t } = useTranslation();

  return (
    <Form
      onSubmit={handleSubmit((values) => {
        onSubmit(values);
      })}
    >
      <ContainerForm>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={3}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              {REGISTER_FORM_KEYS.map((input, index) => {
                let defaultValue;

                return (
                  <Grid item xs={12} sm={input.sizeGrid} key={index}>
                    <FormComponent
                      refs={refs}
                      input={input}
                      register={register}
                      setValue={setValue}
                      errors={errors}
                      defaultValue={defaultValue}
                      getValues={getValues}
                      data={null}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-end"
            >
              <Button type="submit" color="primary">
                {t("general.register")}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </ContainerForm>
    </Form>
  );
};
