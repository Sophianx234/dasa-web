
import { useGetUser } from '@/features/utils/hooks';
import { userType } from '@/services/apiServices';
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

type SocketContextType = Socket | null;
export const SocketContext = createContext<SocketContextType>(null) 
type socketProviderProps = {
  children: ReactNode
}

const socketInstance = io('http://localhost:8000/api/v1');

function SocketProvider({children}:socketProviderProps) {
  const socket = useRef<Socket | null>(null);
  const {data} = useGetUser()
  const {user:userInfo} = data as userType
  useEffect(() => {
    if (userInfo) {
      socket.current = io("http://localhost:8000/api/v1", {
        withCredentials: true,
        query: { userId: userInfo._id },
      });

      

      // socket.current.on("receiveMessage", handleReceiveMessage);
      
      return () => {
        socket?.current?.disconnect();
      };
    }
  }, [userInfo]);
    return (
        <SocketContext.Provider value={socket.current}>
  {children}           
        </SocketContext.Provider>
    )
}

function useSocket(){
  const context = useContext(SocketContext)
  if(context === undefined) throw new Error ('context was called outside of provider')
    return context;
}

export {useSocket,SocketProvider}

export default SocketProvider
