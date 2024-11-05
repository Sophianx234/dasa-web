import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./features/pages/Homepage"
import About from "./features/pages/About"


function App() {

  return (
    
   <BrowserRouter>
   <Routes>
    
    <Route path="/homepage" element={<Homepage/>} />
    <Route path="/about" element={<About/>}/>
   </Routes>
   </BrowserRouter>
      
  )
}

export default App
