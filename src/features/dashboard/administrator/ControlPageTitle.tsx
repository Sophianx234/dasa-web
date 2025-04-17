type controlPageProps = {
  title: string
}
function ControlPageTitle({title}:controlPageProps) {
  return (
    <div className=" uppercase font-bold pl-2 text-lg pb-2  ">{title}</div>
  )
}

export default ControlPageTitle
