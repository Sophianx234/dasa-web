import axios from 'axios'

export type LoginCredentials ={
    email: string;
    password: string;
  }
  
  export type LoginResponse = {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
}
export type logoutResponse = {
  status:string
}


 export async function login(creds:LoginCredentials):Promise<LoginResponse>{
      
        const {data} = await axios.post("https://dasa-api.onrender.com/api/v1/users/login",creds)
        return data
        
        
    }

export async function logout():Promise<logoutResponse>{
  const {data} = await axios.post("https://dasa-api.onrender.com/api/v1/users/logout")
  return data

}
