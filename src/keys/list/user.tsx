import * as React from "react";
import { DataTableField } from "../../types/general/DataTable";
import { Link, Router } from "react-router-dom";
import history from "../../lib/history";
import { UserListTable } from "../../types/user/User";

const TemplateLink: React.FC<UserListTable> = (props) => (
  //   <Router history={history}>
  //     <Link to={`/user/edit/${props.id}`} className="link">
  //       {props.firstName}
  //     </Link>
  //   </Router>
  <p>hola</p>
);

export const LIST_KEYS: DataTableField[] = [
  {
    key: "id",
    visible: false,
  },
  {
    key: "firstname",
    template: TemplateLink,
    text: "user.list.firstname",
  },
  {
    key: "lastname",
    text: "user.list.lastname",
  },
  {
    key: "email",
    text: "user.list.email",
  },
];
