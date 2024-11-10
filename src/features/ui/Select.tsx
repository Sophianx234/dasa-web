import { useAppSelector } from "../utils/hooks"
import { formInputProps } from "./FormInput"

function Select({icon,addClass,placeholder}:formInputProps) {
    const isAnnex = useAppSelector(store=>store.user.isAnnex)
    const UGEL = [
        {
          name: "Pentagon Hostels",
          description: "The largest UGEL-managed hostel, divided into Blocks A, B, C, D, and E with various room types.",
        },
        {
          name: "Evandy Hostel",
          description: "Located near Pentagon, offering study rooms, Wi-Fi, and shared kitchen facilities.",
        },
        {
          name: "Bani Hostel",
          description: "Provides single, double, and triple room options in a quieter environment compared to larger hostels.",
        }
      ]

    const annexes = isAnnex==='Annex' ?['A','B','C','D']: isAnnex === 'UGEL Hostel'? UGEL: null
      if(isAnnex === 'Annex')
    return (
        <div className={`flex items-center relative ${addClass}`}>
            {icon}
            <select   name="" id="" className="indent-6 font-poppins h-full w-full text-gray-400">
                <option >Select {placeholder}</option>
                {annexes.map(annex=><option value={annex}>{ annex}</option>)}
            </select> 
        </div>
    )
    if(isAnnex === 'UGEL Hostel')
        return (
            <div className={`flex items-center relative ${addClass}`}>
            {icon}
            <select   name="" id="" className="indent-6 font-poppins h-full w-full text-gray-400">
                <option >Select {placeholder}</option>
                {annexes.map(annex=><option value={annex?.name}>{ annex?.name}</option>)}
            </select> 
        </div>
    )
}

export default Select
