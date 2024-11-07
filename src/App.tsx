import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Homepage from "./features/pages/Homepage"
import About from "./features/pages/About"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


function App() {
  const queryClient = new QueryClient()
  return (
    
   <BrowserRouter>
   <QueryClientProvider client={queryClient}>

   <Navigate to='/homepage' replace={true}/>
   <Routes>
    <Route path="/homepage" element={<Homepage/>} />
    <Route path="/about" element={<About/>}/>
   </Routes>
   </QueryClientProvider>
   </BrowserRouter>
      
  )
}

export default App
