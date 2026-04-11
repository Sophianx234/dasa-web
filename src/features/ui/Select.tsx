import { FieldValues } from "react-hook-form";
import { useAppSelector } from "../utils/hooks";
import { formInputProps } from "./FormInput";

// 1. Move static data outside the component to prevent recreation on every render
const universityOfGhanaPrograms = [
  // College of Health Sciences
  "Medicine and Surgery", "Dental Surgery", "Pharmacy (PharmD)", "Dietetics", 
  "Medical Laboratory", "Occupational Therapy", "Physiotherapy", "Radiography", 
  "Nursing", "Midwifery",
  // College of Basic and Applied Sciences
  "Physics", "Chemistry", "Geophysics", "Mathematics", "Statistics", "Actuarial Science", 
  "Computer Science", "Biomathematics", "Geology", "Applied Geology", "Applied Geophysics", 
  "Animal Biology and Conservation Science", "Biochemistry, Cell, and Molecular Biology", 
  "Nutrition", "Food Science", "Plant and Environmental Biology", "Marine Science", 
  "Fisheries Science", "Psychology", "Microbiology", "Animal Science", "Crop Science", 
  "Soil Science", "Agricultural Economics", "Agribusiness", "Agricultural Extension", 
  "Post-Harvest Technology", "Family and Consumer Science (Food and Clothing Option)", 
  "Family and Consumer Science (Family and Child Studies Option)", "Material Science and Engineering", 
  "Computer Engineering", "Biomedical Engineering", "Food Process Engineering", 
  "Agricultural Engineering", "Veterinary Medicine",
  // College of Humanities
  "Business Administration", "Laws (LLB)", "Religions", "Philosophy and Classics", 
  "History", "Archaeology and Heritage Studies", "English", "French", "Modern Languages", 
  "Linguistics", "Economics", "Political Science", "Sociology", "Geography and Resource Development", 
  "Social Work", "Dance Studies", "Theatre Arts", "Music",
  // College of Education
  "Information Studies", "Education", "Sports and Physical Culture Studies",
  // Diploma Programs
  "Diploma in Accounting", "Diploma in Public Administration", "Diploma in Statistics", 
  "Diploma in Librarianship", "Diploma in Archives Administration", "Diploma in Adult Education", 
  "Diploma in Youth Development Work"
];

const UGEL = ["Pentagon Hostels", "Evandy Hostel", "Bani Hostel"];
const annexes = ['A', 'B', 'C', 'D'];
const halls = [
  "Legon Hall", "Akuafo Hall", "Commonwealth Hall", "Volta Hall", "Mensah Sarbah Hall", 
  "Jean Nelson Aka Hall", "Alex A. Kwapong Hall", "Hilla Limann Hall", "Elizabeth Frances Sey Hall",
  "Jubilee Hall", "International Students Hostel (ISH)", "Valco Trust Hostel", "UGEL Hostel", "Annex", "Other"
];

function Select<T extends FieldValues>({ 
  icon, 
  addClass = "", 
  placeholder, 
  style, 
  register, 
  inputName 
}: formInputProps<T>) {
  
  const isAnnex = useAppSelector(store => store.user.isAnnex);

  let options: { label: string; value: string }[] = [];

  switch (inputName) {
    case "course":
      options = universityOfGhanaPrograms.map(c => ({ label: c, value: c }));
      break;
    case "sex":
      options = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" }
      ];
      break;
    case "hall":
      options = halls.map(h => ({ label: h, value: h }));
      break;
    case "annex":
      if (isAnnex === 'Annex') {
        options = annexes.map(a => ({ label: `Annex ${a}`, value: a }));
      } else if (isAnnex === 'UGEL Hostel') {
        options = UGEL.map(u => ({ label: u, value: u }));
      }
      break;
    default:
      options = [];
  }

  return (
    <div className={`relative w-full ${addClass}`}>
      
      {/* PERFECTED LEFT ICON WRAPPER */}
      {/* inset-y-0 forces it to span top-to-bottom, centering the icon perfectly */}
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
          {icon}
        </div>
      )}
      
      <select 
        {...register(inputName)}
        defaultValue=""
        // Adjusted pl-11 (padding-left) to ensure text never touches the left icon
        // Adjusted pr-10 (padding-right) to ensure text never touches the right chevron
        className={`w-full appearance-none bg-white text-[#33312e] font-poppins cursor-pointer invalid:text-gray-400 pl-11 pr-10 py-3.5 ${style}`}
      >
        <option value="" disabled hidden>
          Select {placeholder}
        </option>
        
        {options.map((opt, index) => (
          <option key={`${opt.value}-${index}`} value={opt.value} className="text-[#33312e]">
            {opt.label}
          </option>
        ))}
      </select>

      {/* PERFECTED RIGHT CHEVRON WRAPPER */}
      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      
    </div>
  );
}

export default Select;