import axios from "axios";

export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};
export type signupCredentials = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  contact: string;
  hall?: string;
  course?: string;

  confirmPassword?: string | boolean | null;
};
export type logoutResponse = {
  status: string;
};

export async function login(creds: LoginCredentials): Promise<LoginResponse> {
  const { data } = await axios.post(
    "https://dasa-api.onrender.com/api/v1/users/login",
    creds
  );
  return data;
}

export async function logout(): Promise<logoutResponse> {
  const { data } = await axios.post(
    "https://dasa-api.onrender.com/api/v1/users/logout"
  );
  return data;
}

export async function signup(
  userInfo: signupCredentials
) {
  const { data } = await axios.post(
    "https://dasa-api.onrender.com/api/v1/users/signup",
    userInfo
  );
  return data;
}
