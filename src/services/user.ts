import Api from "./api";

const requestOptions = {
  baseUrl: process.env.API_URL,
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const login = (body: any) => api.post("/Auth/SignIn", { body });
export const singUp = (body: any) => api.post("/Auth/SignUp", { body });
export const getUser = () => api.get("/Auth/User/Info");
