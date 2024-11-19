export type chatItemProps = {
    chat: string,
    orient?:'reverse'
}
function ChatItem({chat,orient}:chatItemProps) {
    return (
        <div className={`  flex  items-center  ${orient === 'reverse'? 'flex-row-reverse ':'flex-row'} mx-2` }>
<div className="rounded-full mt-16 gap-2 bg-[#fffaf6] border-2 border-[#66615c] mr-2">

<img src='https://i.ibb.co/2SJsCBB/ano-2.jpg' className=" self-end fill-black rounded-full w-20"/>
</div>
                <div className={`border px-4 mr-4 py-4  font-mulish rounded-3xl font-semibold  ${orient==='reverse'?'bg-orange-100 text-[#191815] rounded-br-none':'bg-[#fffaf6] text-[#191919] rounded-bl-none '}  border-[#66615c] text-sm`}>{chat} </div>
                </div> 
    )
}

export default ChatItem
