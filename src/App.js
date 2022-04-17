


import { Route, Routes } from "react-router-dom";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import LogIn from "./componenets/LogIn/LogIn";
import Navbar from "./componenets/Navber/Navbar";
import SignUp from "./componenets/Navber/SignUp";


function App() {
  return (
    <>
   <Navbar/>
  
  

   <Routes>
     <Route path='/home' element={<Home/>} />
<Route path='/sign-up' element={<SignUp/>} />
<Route path='/login' element={<LogIn/>} />

   </Routes>
  
   
   
    </>
  );
}

export default App;
