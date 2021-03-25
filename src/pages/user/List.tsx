import * as React from "react";
import { useTranslation } from "react-i18next";
import { CoolContainer } from "../../styles/components/CoolContainer";
import { DataTable } from "../../components/general/DataTable";
import { LIST_KEYS } from "../../keys/list/user";

let cont = 0;
const createData = (firstName, lastName, email) => {
  cont += 1;
  return { id: cont, firstName, lastName, email };
};

const rows = [
  createData("miguel", "honrubia", "miguelhonrubia@lynxview.es"),
  createData("miguel", "honrubia", "miguelhonrubia@lynxview.es"),
  createData("miguel", "honrubia", "miguelhonrubia@lynxview.es"),
];

export const List: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();

  return (
    <CoolContainer>
      <DataTable headers={LIST_KEYS} dataSource={rows} />
    </CoolContainer>
  );
};

export default List;
