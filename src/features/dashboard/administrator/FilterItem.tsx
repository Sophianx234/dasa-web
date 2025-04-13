import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { setSelectFilter } from "@/features/slices/navSlice"
import { useDispatch } from "react-redux"
type FilterItemProps = {
  type?: 'select'|'limit'
}
function FilterItem({type ='select'}:FilterItemProps) {
  const dispatch = useDispatch()

  if(type === 'select')
  return (
    <div className="">
      <Select onValueChange={(value)=>dispatch(setSelectFilter(value))}>
  <SelectTrigger className="w-72">
    <SelectValue placeholder="images" />
  </SelectTrigger>
  <SelectContent >
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
