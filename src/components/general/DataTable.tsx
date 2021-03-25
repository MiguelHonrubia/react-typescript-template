import * as React from "react";
import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { DataTableField } from "../../types/general/DataTable";
import { Link, Router } from "react-router-dom";
import history from "../../lib/history";

export const DataTable: React.FC<{
  headers: DataTableField[];
  dataSource: any[];
}> = ({ headers, dataSource }) => {
  const { t } = useTranslation();

  return (
    <Grid container>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers.map(({ key, text, visible, template }, index) => (
              <TableCell key={key}>{t(text)}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((row, index) => {
            return (
              <TableRow key={index}>
                {headers.map(({ key, visible, template }, index) => {
                  const Temp = template;
                  if (!visible) {
                    return (
                      <TableCell key={index}>
                        {Temp ? <Temp {...row} /> : row[key]}
                      </TableCell>
                    );
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Grid>
  );
};
