localStorage.debug = "*";

import { sendMessage } from "@/features/slices/userSlice";
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
  console.log(userInfo);
  useEffect(() => {
    if (userInfo._id) {
      const socketInstance = io("http://localhost:8000", {
        query: { userId: userInfo._id },
        reconnection: true,
        withCredentials: true,
        reconnectionAttempts: 5,
        transports: ["websocket"],
      });
      setSocket(socketInstance);
      console.log("Socket initialized:", socket);

      // socket.current.on("receiveMessage", handleReceiveMessage);
      socketInstance.on("recieveAnonymous", (content) => {
        console.log(content);
        dispatch(sendMessage(content));
      });

      return () => {
        if (socketInstance) {
          socketInstance.disconnect();
        }
      };
    }
  }, [dispatch,userInfo._id]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export { SocketProvider, useSocket };
