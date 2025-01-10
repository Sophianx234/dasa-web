import axios from "axios";

// const API_URL = "localhost:/api/v1"
// const API_URL = "127.0.0.1:8000/api/v1"
const API_URL = "https://dasa-api.onrender.com/api/v1"
// const API_URL = "http://localhost:8000/api/v1"

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
export type signupCredentialsExtended =  signupCredentials&{
  username: string,
  profileImage: string

}
export type logoutResponse = {
  status: string;
};
export type userType ={
  status: string,
  user: signupCredentialsExtended
} 

export async function login(creds: LoginCredentials): Promise<LoginResponse> {
  axios.defaults.withCredentials = true;
  const { data } = await axios.post(`${API_URL}/users/login`, creds);
  return data;
}

export async function logout(): Promise<logoutResponse> {
  const { data } = await axios.post(`${API_URL}/users/logout`);
  return data;
}

export async function signup(userInfo: signupCredentials): Promise<unknown> {
  const { data } = await axios.post(`${API_URL}/users/signup`, userInfo,{
    withCredentials:true
  });
  return data;
}

export async function getUser(): Promise<userType> {
  axios.defaults.withCredentials = true;
  const { data } = await axios.get(`${API_URL}/users/getme`)
  return data;
}
export async function getUsers(): Promise<unknown[]> {
  const { data } = await axios.get(`${API_URL}/users`);
  return data;
}
export async function updateUser(update:unknown): Promise<unknown[]> {
  console.log(update)
  axios.defaults.withCredentials = true;
  const { data } = await axios.patch(`${API_URL}/users/update-user`,update,{
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return data;
}
export async function changeProfile(update:unknown): Promise<unknown[]> {
  console.log(update)
  const { data } = await axios.patch(`${API_URL}/users/upload`,update)
  return data;
}
