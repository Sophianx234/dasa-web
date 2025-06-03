import { sendMessageFormValues } from "@/features/dashboard/chat/ChatSendInput";
import { setUser } from "@/features/slices/navSlice";
import {
  loadAnonymousMessage,
  loadDirectMessage,
} from "@/features/slices/userSlice";
import { isEmpty } from "@/features/utils/helpers";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import {
  anonymousResponse,
  API_URL,
  directMessageType,
  signupCredentialsExtended,
  userType,
} from "@/services/apiServices";
import axios from "axios";
import { useEffect, useRef } from "react";
import { UseFormReturn } from "react-hook-form";
import { useParams } from "react-router-dom";

export type useChatType = {
  type: "direct" | "channel";
  hookForm?: UseFormReturn<sendMessageFormValues>;
};

export function useChat({ type }: useChatType) {
  const dispatch = useAppDispatch();
  const { id: recipientId } = useParams();

  const { anonymousMessages: messages, directMessages } = useAppSelector(
    (store) => store.user
  );
  const { user } = useAppSelector((store) => store.nav);
  const userInfo = user as signupCredentialsExtended;
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, directMessages]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUser = async () => {
      const { data } = await axios.get(`${API_URL}/users/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Data:", data);
      if (data) {
        const { user } = data as userType;
        dispatch(setUser(user)); // Process the data
      }
    };
    const fetchAnonymousMessages = async () => {
      const { data } = await axios.get(
        `${API_URL}/messages/${type === "channel" ? "anonymous" : recipientId}`
      );
      if (data && type === "channel") {
        const {
          anonymous: { messages },
        } = data as anonymousResponse;
        // const textModified = messages.map(msg=>msg.content)
        if (messages) {
          console.log("msg", messages);
          dispatch(loadAnonymousMessage(messages));
        }
      }
      if (data && type == "direct") {
        const { messages: directMsg } = data as directMessageType;
        console.log("messages X", directMsg);
        if (directMessages) {
          dispatch(loadDirectMessage(directMsg));
        }
      }
    };

    if (isEmpty(userInfo)) {
      getUser();
    }
    fetchAnonymousMessages();
  }, []);

  return { userInfo, messages, lastMessageRef, directMessages };
}
