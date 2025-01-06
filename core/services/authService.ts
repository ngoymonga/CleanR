import axios from "axios";
import { ILoginModel } from "core/models/LoginModel";
import { API_URL } from "environments/environment-stg";

export const loginService = (credentials: ILoginModel) => {
  return axios.post(`${API_URL}/login`, credentials);
};
