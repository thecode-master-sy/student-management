export interface LoginData {
  email: string;
  password: string;
}

export interface SignUpData extends LoginData {
  name: string;
}
