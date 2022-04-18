import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./componenets/CheckOut/CheckOut";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import LogIn from "./componenets/LogIn/LogIn";
import Navbar from "./componenets/Navber/Navbar";
import NotFound from "./componenets/NotFound/NotFound";
import RequireAuth from "./componenets/RequireAuth/RequireAuth";
import Services from "./componenets/Service/Services";
import SignUp from "./componenets/SignUp/SignUp";

 export const serviceContext = createContext()

function App() {
  const [service, setService] = useState([]);
  

  return (
    <>
    <serviceContext.Provider value={[service, setService]}>
      <Navbar />

     

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/service' element={<RequireAuth>
          <Services />
        </RequireAuth>} />
        <Route path='/checkout' element={ <CheckOut />} />
        <Route path='*' element={<NotFound />} />


      </Routes>

      
          <Footer/>
      </serviceContext.Provider>

    </>
  );
}

export default App;
