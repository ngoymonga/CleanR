export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
}
