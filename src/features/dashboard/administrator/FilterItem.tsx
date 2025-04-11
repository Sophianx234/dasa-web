import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
type FilterItemProps = {
  type?: 'select'|'limit'
}
function FilterItem({type ='select'}:FilterItemProps) {
  if(type === 'select')
  return (
    <div className="">
      <Select>
  <SelectTrigger className="w-40">
    <SelectValue placeholder="images" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="images">Images</SelectItem>
    <SelectItem value="videos">Videos</SelectItem>
  </SelectContent>
</Select>

    </div>
  )
  if(type==='limit')
    return (
      <div>
        <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="limit" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="100">100</SelectItem>
      <SelectItem value="200">200</SelectItem>
      <SelectItem value="300">300</SelectItem>
      <SelectItem value="none">none</SelectItem>
    </SelectContent>
  </Select>
  
      </div>
    )
}

export default FilterItem
