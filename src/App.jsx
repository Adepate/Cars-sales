import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./pages/Home"
import Cars from "./pages/Cars"
import About from "./pages/About"
import Services from "./pages/Services"

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Cars />} />
    <Route path="/" element={<About />} />
    <Route path="/" element={<Services />} />
   </Routes>
   </BrowserRouter>
     </>
  )
}

export default App