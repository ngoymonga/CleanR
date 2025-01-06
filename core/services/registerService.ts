import axios from "axios";
import { IRegisterMode } from "../models/RegisterModel";
import { API_URL } from "environments/environment-stg";

export const registerService = (userData: IRegisterMode) => {
  return axios.post(`${API_URL}/register`, userData);
};
