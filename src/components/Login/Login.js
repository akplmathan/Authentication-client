import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../../slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userInfo.user);
  const HandleLogin = async () => {
    if (user) {
      navigate("/user");
    } else {
      let response = await axios.post("https://authentication-e2m2.onrender.com/api/login", {
        email,
        password,
      });
      console.log(response);
      setMsg(response.data.msg);
      if (response.data.success == false) {
        alert("please verify email");
      } else {
        dispatch(verifyToken(response.data.token));
        localStorage.setItem("token", response.data.token);
        if(response.data.login){
            navigate('/user')
        }
      }
    }
  };
  return (
    <div className="signup">
      <div className="container">
        <h2>Login</h2>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="msg">{msg ? `* ${msg}` : null}</p>
        <button onClick={HandleLogin}>Login</button>
        <br />
        <p>
          Don't you have account? <Link to={"/signup"}>Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
