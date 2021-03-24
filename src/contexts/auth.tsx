import * as React from "react";
import { createReducer } from "../utils/createReducer";
import { Account } from "../types/user/User";
import { Merge } from "../utils/Merge";
import { storage, STORAGE_TOKEN_KEY, STORAGE_USER } from "../utils/constants";
import { login, getUser } from "../services/user";

type AuthState = {
  user: Merge<Account, { id: number }>;
  isLoading: boolean;
  error: string;
  dispatch: React.Dispatch<any>;
  isAuthenticated: () => boolean;
  signin: (history?: any) => void;
  logout: (history?: any) => void;
  saveUserPreferences: (user: Account) => void;
  saveSession: (token: string) => void;
  login: (body: any) => boolean;
};

const reducer = createReducer({ payload: "user" });
const initialState = {
  user: null,
  error: "",
  isLoading: false,
  dispatch: () => {},
  isAuthenticated: undefined,
  signin: undefined,
  logout: undefined,
  saveUserPreferences: undefined,
  saveSession: undefined,
  login: undefined,
};
export const AuthContext = React.createContext<AuthState>(initialState);
export const AuthProvider = ({ children }) => {
  const [successSignOut, setSuccessSignOut] = React.useState(false);
  const [loadingSignOut, setLoadingSignOut] = React.useState(false);
  const [{ user, isLoading, error }, dispatch]: [
    AuthState,
    React.Dispatch<any>
  ] = React.useReducer(reducer, initialState);

  const isAuthenticated = () => {
    const token = JSON.parse(localStorage.getItem(STORAGE_TOKEN_KEY));
    return !!token && !!token.access_token;
  };

  const signin = (history) => {
    dispatch({ type: "fetching" });
    setSuccessSignOut(false);
    if (
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/register" &&
      history
    ) {
      history.push("/login");
    }
  };

  const login = (body) => {
    const response = login(body);
    if (response) {
      saveSession(response);
      const user = getUser();
      if (user) {
        saveUserPreferences(user);
        return !!user;
      }
    }
  };

  const logout = (history) => {
    dispatch({ type: "reset" });
    setSuccessSignOut(true);
    setLoadingSignOut(false);
    storage.clear();
    history.push("/login");
  };

  const saveUserPreferences = (user: any | Account) => {
    const UserConnected = {
      email: user.email,
      fullName: user.name,
    };
    storage.setItem(STORAGE_USER, JSON.stringify(UserConnected));
  };

  const saveSession = (token: any) => {
    storage.setItem(STORAGE_TOKEN_KEY, token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        dispatch,
        isAuthenticated,
        signin,
        logout,
        saveUserPreferences,
        saveSession,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthValue = () => React.useContext<AuthState>(AuthContext);
