import { useAppSelector } from "../utils/hooks"
import { formInputProps } from "./FormInput"

function Select({icon,addClass,placeholder,form}:formInputProps) {
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
      const universityOfGhanaPrograms = [
        // College of Health Sciences
        "Medicine and Surgery",
        "Dental Surgery",
        "Pharmacy (PharmD)",
        "Dietetics",
        "Medical Laboratory",
        "Occupational Therapy",
        "Physiotherapy",
        "Radiography",
        "Nursing",
        "Midwifery",
        
        // College of Basic and Applied Sciences
        "Physics",
        "Chemistry",
        "Geophysics",
        "Mathematics",
        "Statistics",
        "Actuarial Science",
        "Computer Science",
        "Biomathematics",
        "Geology",
        "Applied Geology",
        "Applied Geophysics",
        "Animal Biology and Conservation Science",
        "Biochemistry, Cell, and Molecular Biology",
        "Nutrition",
        "Food Science",
        "Plant and Environmental Biology",
        "Marine Science",
        "Fisheries Science",
        "Psychology",
        "Microbiology",
        "Animal Science",
        "Crop Science",
        "Soil Science",
        "Agricultural Economics",
        "Agribusiness",
        "Agricultural Extension",
        "Post-Harvest Technology",
        "Family and Consumer Science (Food and Clothing Option)",
        "Family and Consumer Science (Family and Child Studies Option)",
        "Material Science and Engineering",
        "Computer Engineering",
        "Biomedical Engineering",
        "Food Process Engineering",
        "Agricultural Engineering",
        "Veterinary Medicine",
        
        // College of Humanities
        "Business Administration",
        "Laws (LLB)",
        "Religions",
        "Philosophy and Classics",
        "History",
        "Archaeology and Heritage Studies",
        "English",
        "French",
        "Modern Languages",
        "Linguistics",
        "Economics",
        "Political Science",
        "Sociology",
        "Geography and Resource Development",
        "Social Work",
        "Dance Studies",
        "Theatre Arts",
        "Music",
        
        // College of Education
        "Information Studies",
        "Education",
        "Sports and Physical Culture Studies",
        
        // Diploma Programs
        "Diploma in Accounting",
        "Diploma in Public Administration",
        "Diploma in Statistics",
        "Diploma in Librarianship",
        "Diploma in Archives Administration",
        "Diploma in Adult Education",
        "Diploma in Youth Development Work"
      ];
      

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
    if(form==='course')
        return (
            <div className={`flex items-center relative ${addClass}`}>
            {icon}
            <select   name="" id="" className="indent-6 font-poppins h-full w-full text-gray-400">
                <option >Select {placeholder}</option>
                {universityOfGhanaPrograms.map(course=><option value={course}>{course}</option>)}
            </select> 
        </div>
    )
}

export default Select
