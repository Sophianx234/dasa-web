import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./features/pages/Homepage"
import About from "./features/pages/About"
import PageNotFound from "./features/pages/PageNotFound"
import Login from "./features/pages/Login"
import SignUp from "./features/pages/SignUp"
import AppLayout from "./features/pages/AppLayout"
import DashboardOverview from "./features/dashboard/components/DashboardOverview"


function App() {
  return (

   <BrowserRouter>

   
   <Routes>
    <Route index path="homepage" element={<Homepage/>} />
    <Route path="about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/dashboard" element={<AppLayout/>}>

    <Route index element={<Navigate to='overview' replace={true}/>}/>
    <Route path="overview" element={<DashboardOverview/>}/>
    </Route>
    <Route path='*' element={<PageNotFound/>} />
   </Routes>
   </BrowserRouter>
      
  )
}

export default App
