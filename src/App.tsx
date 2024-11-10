import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./features/pages/Homepage"
import About from "./features/pages/About"
import PageNotFound from "./features/pages/PageNotFound"
import Login from "./features/pages/Login"


function App() {
  return (

   <BrowserRouter>

   
   <Routes>
    <Route index path="homepage" element={<Homepage/>} />
    <Route path="about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<About/>}/>
    <Route path='*' element={<PageNotFound/>} />
   </Routes>
   </BrowserRouter>
      
  )
}

export default App
