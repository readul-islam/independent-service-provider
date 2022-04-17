


import { Route, Routes } from "react-router-dom";
import CheckOut from "./componenets/CheckOut/CheckOut";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import LogIn from "./componenets/LogIn/LogIn";
import Navbar from "./componenets/Navber/Navbar";
import NotFound from "./componenets/NotFound/NotFound";

import RequireAuth from "./componenets/RequireAuth/RequireAuth";
import Service from "./componenets/Service/Service";
import SignUp from "./componenets/SignUp/SignUp";


function App() {
  return (
    <>
   <Navbar/>
  
  

   <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/home' element={<Home/>} />
<Route path='/sign-up' element={<SignUp/>} />
<Route path='/login' element={<LogIn/>} />
<Route path='/service' element={<RequireAuth>
  <Service/>
</RequireAuth>} />
<Route path='/checkout' element={<RequireAuth>
  <CheckOut/>
</RequireAuth>} />
<Route path='*' element={<NotFound/>} />


   </Routes>
  
   
   
    </>
  );
}

export default App;
