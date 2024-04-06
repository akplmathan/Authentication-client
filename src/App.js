import React, { useEffect } from "react";
import Signup from "./components/Signup.js/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Verify from "./components/verify/verify";
import Navbar from "./components/navbar/Navbar";
import PrivateRoute from "./private route/PrivateRoute";
import User from "./components/user/User";
import './App.css'
import { verifyToken } from "./slices/userSlice";
import { useDispatch } from "react-redux";
import Logout from "./components/logout/Logout";
const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    let token = localStorage.getItem('token');
    if(token){
        dispatch(verifyToken(token));
    }
},[])
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route element={<PrivateRoute />}>
            <Route path="/user" element={<User />} />
          </Route>
          <Route path="/api/verify/:token" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
