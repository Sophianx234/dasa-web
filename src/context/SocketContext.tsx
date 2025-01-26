
import { useAppSelector } from '@/features/utils/hooks';
import { signupCredentialsExtended } from '@/services/apiServices';
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

type SocketContextType = Socket | null;
export const SocketContext = createContext<SocketContextType>(null) 
type socketProviderProps = {
  children: ReactNode
}


function SocketProvider({children}:socketProviderProps) {
  const socket = useRef<Socket | null>(null);
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  console.log(userInfo)
  useEffect(() => {
    if (userInfo ) {
      socket.current = io("ws://localhost:8000/api/v1", {
        withCredentials: true,
        query: { userId: userInfo._id},
        transports:["websocket"]
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

export { SocketProvider, useSocket };

