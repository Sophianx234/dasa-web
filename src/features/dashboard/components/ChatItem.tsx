export type chatItemProps = {
    chat: string,
    orient?:string |boolean
}
function ChatItem({chat,orient}:chatItemProps) {
    return (
        <div className="flex items-start">
        <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs shadow-md">
          {chat}
        </div>
      </div>
    )
}

export default ChatItem
