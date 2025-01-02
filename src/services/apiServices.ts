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


 export async function login(creds:LoginCredentials):Promise<LoginResponse>{
      
        const {data} = await axios.post("https://dasa-api.onrender.com/api/v1/users/login",creds)
        return data
        
        
    }
