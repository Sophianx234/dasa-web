import { sendMessageFormValues } from "@/features/dashboard/chat/ChatSendInput";
import { UseFormWatch,UseFormSetValue } from "react-hook-form";
export type emojiType = {
  id: string;
  name: string;
  native: string; // The actual emoji character (e.g., "😀")
  shortcodes: string;
  unified: string;
  keywords?: string[];
  skins?: { unified: string; native: string }[];
};

export function addEmoji(emoji:emojiType,watch:UseFormWatch<sendMessageFormValues>,setValue:UseFormSetValue<sendMessageFormValues>){
    const currentText = watch('message') || ""
    setValue('message',currentText.trim()+emoji.native)
    console.log(currentText)
  }