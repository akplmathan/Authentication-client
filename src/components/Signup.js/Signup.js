import React, { useState } from "react";
import axios from "axios";
import {useNavigate,Link} from 'react-router-dom'
import './style.css'


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
 const navigate = useNavigate()

  const HandleSignup = async () => {
    console.log(name, email, password);
   try {
    let response = await axios.post("https://authentication-e2m2.onrender.com/api/signup", {
      name,
      email,
      password,
    });
    console.log(response);
    setMsg(response.data.msg);
    if(response.request.status===201){
        navigate('/')
    }
        
   } catch (error) {
    console.log(error)
   }
  };
  return (
    <div className="signup">
      <div className="container">
      <h2>SignUp</h2>
      <div >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button onClick={HandleSignup}>SignUp</button>
      <br />
      <p>Already Have an account ? <Link to={'/'}>Login</Link></p>

      </div>
          </div>
  );
};

export default Signup;
