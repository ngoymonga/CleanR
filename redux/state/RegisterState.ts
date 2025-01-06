import { IRegisterMode } from "core/models/RegisterModel";

export interface RegisterState {
    user: IRegisterMode | null;
    loading: boolean;
    error: string | null;
  }
  