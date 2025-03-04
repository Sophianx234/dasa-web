import {
  directMessageType,
  dmType,
  signupCredentialsExtended,
} from "@/services/apiServices";
import { createSlice } from "@reduxjs/toolkit";
export type anonymousMessagesType = {
  messageType: string;
  content: string;
  sender: signupCredentialsExtended;
  createdAt: string;
  anonymousName: string;
};
export type initialStateProp = {
  isLiked: boolean;
  isAnnex: string;
  anonymousMessages: anonymousMessagesType[];
  directMessages: unknown;
};
const initialState: initialStateProp = {
  isLiked: false,
  isAnnex: "",
  anonymousMessages: [],
  directMessages: [],
  /*    anonymousMessages: ["There’s this girl in DaSA I can’t stop thinking about. Anytime you smile, my heart skips a beat. Fati… one day, you’ll call me yours. 🥺",
    "To the most beautiful girl in DaSA, you’ve got me crushing hard. Zainab, I know I’m not your favorite person yet, but just wait—I’ll change that soon. 😉",
    "There’s a star in DaSA that shines brighter than the rest, and her name is Mariam. I hope one day I’ll be lucky enough to stand by her side.",
    "To the girl with the radiant smile in DaSA, you’ve been on my mind a lot lately. One day, I hope to find the courage to tell you who I am. Until then, just know you’re deeply admired. 🌸",
    "There’s a certain someone in DaSA who makes my day without even trying. Let’s just say, Amina, one day, you’ll realize who’s been crushing on you all along. 😏",
    "Dear pretty girl in DaSA, every time I see you, I forget my own name. Can you blame me, though? Khadija, you’ve got me wrapped around your little finger. 😅",
    "In the crowd at DaSA, there’s one face I can’t ignore. Her laughter is a melody, her presence a warm embrace. Nafisa, one day, I hope to be more than just the guy who admires you from afar. 🌹"]
    */
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLike(state) {
      state.isLiked = !state.isLiked;
    },
    setAnnex(state, action) {
      state.isAnnex = action.payload;
    },
    sendAnonymousMessage(state, action) {
      state.anonymousMessages.push(action.payload);
    },
    sendMessage(state, action) {
      state.anonymousMessages.push(action.payload);
    },
    loadAnonymousMessage(state, action) {
      state.anonymousMessages = action.payload;
    },
    loadMessages(state, action) {
      state.anonymousMessages = action.payload;
    },
  },
});

export const {
  toggleLike,
  setAnnex,
  sendMessage,
  loadMessages,
  sendAnonymousMessage,
  loadAnonymousMessage,
} = userSlice.actions;
export default userSlice.reducer;
