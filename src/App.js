import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./componenets/Blogs/Blogs";
import CheckOut from "./componenets/CheckOut/CheckOut";
import Footer from "./componenets/Footer/Footer";
import Home from "./componenets/Home/Home";
import LogIn from "./componenets/LogIn/LogIn";
import Navbar from "./componenets/Navber/Navbar";
import NotFound from "./componenets/NotFound/NotFound";
import RequireAuth from "./componenets/RequireAuth/RequireAuth";

import SignUp from "./componenets/SignUp/SignUp";
import About from "./componenets/About/About.jsx";

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
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />


          <Route path='/checkout' element={<RequireAuth>
            <CheckOut />
          </RequireAuth>} />
          <Route path='*' element={<NotFound />} />


        </Routes>


        <Footer />
      </serviceContext.Provider>

    </>
  );
}

export default App;
