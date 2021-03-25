export type Account = {
  name: string;
  idToken: string;
  email: string;
};

export type UserSession = {
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
};

export type UserListTable = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};
