import * as React from "react";
import { Skeleton } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const SkeletonTable: React.FC<{
  //fields: Field[];
  textButton?: string;
  numRows?: number;
}> = ({ textButton, numRows = 10 }) => {
  const { t } = useTranslation();

  // const fakeData = new Array(numRows).fill("").map(() => {
  //   const fakeObj = fields.reduce((prev, { key }) => {
  //     prev[key] = "";
  //     return prev;
  //   }, {});
  //   return fakeObj;
  // });

  return (
    <div>
      {textButton && (
        <Skeleton animation="wave">
          <Button style={{ marginBottom: "1em" }}>{textButton}</Button>
        </Skeleton>
      )}
      <>{/* todo: datatable */}</>
    </div>
  );
};
