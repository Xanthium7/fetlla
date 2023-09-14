import { useEffect } from "react";

import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Addblog from "./pages/Addblog";
import Showblog from "./pages/Showblog";
import Protected from "./components/Protected";
import Services from "./pages/Services";
import Allblogs from "./pages/Allblogs";
import Addreviews from "./pages/Addreviews";
import Displayservices from "./pages/displayservices";
function App() {
  let Logedin = useSelector((state) => state.auth.Adminisloggedin);
  return (
    <>
      <div className=" min-h-screen bg-white">
        <BrowserRouter>
          <Routes>
            <Route element={<Protected />}>
              <Route path="/admindash" element={<Admin />}></Route>
              <Route path="/admindash/addblog" element={<Addblog />}></Route>
              <Route path="/admindash/addservices" element={<Services />}></Route>
              <Route path="/admindash/addreviews" element={<Addreviews />}></Route>
            </Route>
            <Route
              path="/login"
              element={
                !Logedin ? (
                  <Login />
                ) : (
                  <Navigate replace to="/admindash"></Navigate>
                )
              }
            ></Route>

            <Route path="/blog/:id" element={<Showblog />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/allblogs" element={<Allblogs />}></Route>
            <Route path="/allservices" element={<Displayservices/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
