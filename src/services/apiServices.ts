import axios from "axios";

const API_URL = "https://dasa-api.onrender.com/api/v1"
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
  const { data } = await axios.post(`${API_URL}/users/login`, creds);
  return data;
}

export async function logout(): Promise<logoutResponse> {
  const { data } = await axios.post(`${API_URL}/users/logout`);
  return data;
}

export async function signup(userInfo: signupCredentials): Promise<unknown> {
  const { data } = await axios.post(`${API_URL}/users/signup`, userInfo);
  return data;
}

export async function getUser(): Promise<signupCredentials> {
  

  const { data } = await axios.get(`${API_URL}/users/getme`,{
    
  }
    
  )
  return data;
}
export async function getUsers(): Promise<signupCredentials[]> {
  const { data } = await axios.get(`${API_URL}/users`);
  return data;
}
