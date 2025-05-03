type termsListProps = {
  listItems?: string[],
  title?: string,
  sub?:string
}
function TermsList({listItems,title,sub}:termsListProps) {
  return (
    <>
    <h1 className="text-lg font-bold text-center  text-[#33312e] py-1 pt-3">{title}</h1>
<em>{sub}</em>
<ol className="pl-4  space-y-1 pt-2">
  { listItems?.map(item=><li className="track-wide leading-6 font-medium  list-item list-disc">
{item}</li>)}
  
</ol>
    </>
  )
}

export default TermsList
