import * as React from "react";
import { DataTableField } from "../../types/general/DataTable";
import { Link, Router } from "react-router-dom";
import history from "../../lib/history";
import { UserListTable } from "../../types/user/User";

const TemplateLink: React.FC<UserListTable> = (user) => {
  return (
    <Router history={history}>
      <Link to={`/user/edit/${user.id}`} className="link">
        {user.firstName}
      </Link>
    </Router>
  );
};

export const LIST_KEYS: DataTableField[] = [
  {
    key: "id",
    visible: false,
  },
  {
    key: "firstName",
    template: TemplateLink,
    text: "user.list.firstname",
  },
  {
    key: "lastName",
    text: "user.list.lastname",
  },
  {
    key: "email",
    text: "user.list.email",
  },
];
