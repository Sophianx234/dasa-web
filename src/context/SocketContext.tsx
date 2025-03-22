localStorage.debug = "*";

import { sendAnonymousMessage, sendMessage } from "@/features/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { signupCredentialsExtended } from "@/services/apiServices";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

type SocketContextType = Socket | null;
const SocketContext = createContext<SocketContextType>(null);
type socketProviderProps = {
  children: ReactNode;
};

function useSocket() {
  const context = useContext(SocketContext);
  if (context === undefined)
    throw new Error("context was called outside of provider");
  return context;
}

function SocketProvider({ children }: socketProviderProps) {
  const dispatch = useAppDispatch();
  const [socket, setSocket] = useState<Socket | null>(null);
  const { user } = useAppSelector((store) => store.nav);
  const userInfo = user as signupCredentialsExtended;
  const serverURL = "http://localhost:8000"
  // const serverURL = "https://dasa-api.onrender.com"
  useEffect(() => {
    if (userInfo) {
      const socketInstance = io(serverURL, {
        query: { userId: userInfo._id },
        reconnection: true,
        withCredentials: true,
        reconnectionAttempts: 5,
        transports: ["websocket"],
      });
      setSocket(socketInstance);

      // socket.current.on("receiveMessage", handleReceiveMessage);
      socketInstance.on("recieveAnonymous", (content) => {
        dispatch(sendAnonymousMessage(content));
      });
      socketInstance.on("recieveMessage", (message) => {
        console.log('xxxy',message)
        dispatch(sendMessage(message));
      });
      socketInstance.on("recieveFile", (message) => {
        console.log('xxxy',message)
        if(message.recipient){

          dispatch(sendMessage(message));
        }else{
          dispatch(sendAnonymousMessage(message))

        }
      });

      return () => {
        if (socketInstance) {
          socketInstance.disconnect();
        }
      };
    }
  }, [userInfo,dispatch]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export { SocketProvider, useSocket };
