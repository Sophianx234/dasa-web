import { videosResponse } from "@/features/ui/Activities";
import axios from "axios";

// const API_URL = "localhost:/api/v1"
// const API_URL = "127.0.0.1:8000/api/v1"
// const API_URL = "https://dasa-api.onrender.com/api/v1"
export const API_URL = "http://localhost:8000/api/v1";
export type messagesType = {
  content: string;
  userId: string;
};
export type anonymousType = {
  name: string;
  members: string[];
  messages: messagesType[];
};
export type anonymousResponse = {
  status: string;
  anonymous: anonymousType;
};
export type LoginCredentials = {
  email: string;
  password: string;
};

export type errorType = {
  status: string;
  error: {
    statusCode: number;
    status: "fail";
    operational: boolean;
  };
  message: string;
};

export type dmType = {
  sender: signupCredentialsExtended;
  recipient: signupCredentialsExtended;
  messageType: "text" | "file";
  content: string;
  _id: string;
  createdAt: string;
  fileURL: string;
};
export type directMessageType = {
  messages: dmType[];
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
export type signupCredentialsExtended = signupCredentials & {
  username: string;
  profileImage: string;
  _id: string;
  anonymousName: string;
  anonymousProfile: string;
};
export type logoutResponse = {
  status: string;
};
export type userType = {
  status: string;
  user: signupCredentialsExtended;
};

export type mediaType = {
  _id: string;
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: Date;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  asset_folder: string;
  display_name: string;
  original_filename: string;
  uploadedAt: Date;
};
export type getGalleryResponse = {
  status: string;
  numImages: number;
  images: mediaType[];
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

export async function getUser(): Promise<userType> {
  const { data } = await axios.get(`${API_URL}/users/getme`);
  console.log("Data:", data); // Process the data

  return data;
}

export async function getUsers(): Promise<unknown[]> {
  const { data } = await axios.get(`${API_URL}/users`);
  return data;
}
export async function getAnonymous(): Promise<anonymousResponse> {
  const { data } = await axios.get(
    `${API_URL}/messages/anonymous?field=messages`
  );
  return data;
}
export async function updateUser(update: unknown): Promise<unknown[]> {
  console.log(update);
  const { data } = await axios.patch(`${API_URL}/users/update-user`, update, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
}
export async function changeProfile(update: unknown): Promise<unknown[]> {
  console.log(update);
  const { data } = await axios.patch(`${API_URL}/users/upload`, update);
  return data;
}
export async function getGallery() {
  const { data } = await axios.get(
    `${API_URL}/media/images?field=_id,secure_url,public_id,format,created_at`
  );
  return data;
}

export async function getVideos(): Promise<videosResponse> {
  const { data } = await axios.get(
    `${API_URL}/media/videos?field=_id,secure_url,public_id,format`
  );
  return data;
}

export async function uploadImages(update: unknown): Promise<unknown[]> {
  console.log(update);
  const { data } = await axios.post(`${API_URL}/media/upload`, update);
  return data;
}
export async function removeImage(imageId: unknown): Promise<unknown[]> {
  const { data } = await axios.delete(`${API_URL}/media/${imageId}`);
  return data;
}
