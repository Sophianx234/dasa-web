import { eventI } from "@/features/dashboard/components/Events";
import { resetPassFormValues } from "@/features/pages/ResetPasswordPage";
import axios from "axios";

// const API_URL = "localhost:/api/v1"
// const API_URL = "127.0.0.1:8000/api/v1"
// const API_URL = "https://dasa-api.onrender.com/api/v1"
// export const API_URL = "http://localhost:8000/api/v1";
export const API_URL = "https://dasa-api.onrender.com/api/v1";
const token = localStorage.getItem('token')

// const token = localStorage.getItem("token");
//         const { data, status } = await axios.get("/api/get_contacts_list", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
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
  sex: "male" | "female";
  role: string;
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

export async function signup(userInfo: signupCredentials){

    const { data } = await axios.post(`${API_URL}/users/signup`, userInfo);
    return data;
  
}

export async function getUser(): Promise<userType> {
  const { data } = await axios.get(`${API_URL}/users/getme`,{headers: { Authorization: `Bearer ${token}` }});
  console.log("Data:", data); // Process the data

  return data;
}
export async function forgotPassword(email:string): Promise<userType> {
  const { data } = await axios.post(`${API_URL}/users/forgot-password`,{email});
  console.log("Data:", data); // Process the data

  return data;
}

type resetPasswordType = {
  token:string;
  body: resetPassFormValues
}
export async function resetPassword({token,body}:resetPasswordType): Promise<userType> {
  const { data } = await axios.patch(`${API_URL}/users/reset-password/:${token}`,{password:body.pass,confirmPassword:body.confirmPass});
  console.log("Data:", data); // Process the data

  return data;
}

export async function getUsers() {
  const { data } = await axios.get(`${API_URL}/users`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function getAnonymous(lim:number|null = null): Promise<anonymousResponse> {
  const { data } = await axios.get(
    `${API_URL}/messages/anonymous?field=messages&${lim?`limit=${lim}`:''}`,{headers: { Authorization: `Bearer ${token}` }}
  );
  return data;
}
export async function updateUser(update: unknown): Promise<unknown[]> {
  console.log(update);
  const { data } = await axios.patch(`${API_URL}/users/update-user`, update,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function changeProfile(update: unknown): Promise<unknown[]> {
  console.log(update);
  const { data } = await axios.patch(`${API_URL}/users/upload`, update,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function getGallery() {
  const { data } = await axios.get(
    `${API_URL}/media/images?field=_id,secure_url,public_id,format,created_at`,{headers: { Authorization: `Bearer ${token}` }}
  );
  return data;
}

export async function getVideos() {
  const { data } = await axios.get(
    `${API_URL}/media/videos?field=_id,secure_url,public_id,format`,{headers: { Authorization: `Bearer ${token}` }}
  );
  return data;
}
export async function getAnnouncements() {
  const { data } = await axios.get(`${API_URL}/announcements`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export interface announcementI {
  _id:string
  announcer: string;
  announcerProfile: string;
  portfolio: string;
  date: Date|string;
  messageType: string;
  title: string;
  content: string;
  reactions: number;
  comments: string[];
}
export type newAnnouncementI = Omit<announcementI,'_id'|'reactions'|'comments'>
export interface announcementResponse {
  announcements: announcementI[]

}
export type updateAnnouncementI = {
  id: string;
  body: announcementI;
};
export async function updateAnnouncement({ id, body }: updateAnnouncementI) {
  const { data } = await axios.patch(`${API_URL}/announcements/${id}`, body,{headers: { Authorization: `Bearer ${token}` }} );
  return data;
}
export async function deleteAnnouncement(id:string) {
  const { data } = await axios.delete(`${API_URL}/announcements/${id}`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function createAnnouncement(body:newAnnouncementI) {
  const { data } = await axios.post(`${API_URL}/announcements`, body,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}

export async function uploadImages(update: unknown): Promise<unknown[]> {
  console.log(update);
  const { data } = await axios.post(`${API_URL}/media/upload`, update,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function removeImage(imageId: unknown): Promise<unknown[]> {
  const { data } = await axios.delete(`${API_URL}/media/${imageId}`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function removeUser(id: string) {
  const { data } = await axios.delete(`${API_URL}/users/${id}`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
type changeRoleI = {
  id: string;
  role: string;
};
export async function changeUserRole({ id, role }: changeRoleI) {
  console.log("role:", role);
  const { data } = await axios.patch(`${API_URL}/users/${id}`, { role },{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function getEvents() {
  const { data } = await axios.get(`${API_URL}/events`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function getNotifications() {
  const { data } = await axios.get(`${API_URL}/notifications`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function removeEvent(id: string) {
  const { data } = await axios.delete(`${API_URL}/events/${id}`,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}

export type updateEventI = {
  id: string;
  body: eventI;
};
export async function updateEvent({ id, body }: updateEventI) {
  const { data } = await axios.patch(`${API_URL}/events/${id}`, body,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
export async function createEvent(body: FormData) {
  const { data } = await axios.post(`${API_URL}/events`, body,{headers: { Authorization: `Bearer ${token}` }});
  return data;
}
