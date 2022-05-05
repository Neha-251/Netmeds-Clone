import React, { useContext, useEffect, useState } from "react";
import './Login.css';
import Image1 from '../../images/login.png';
import Image2 from '../../images/google-icon.png';
import Image3 from '../../images/facebook-icon.png';
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
function Login() {
  const {handleNumber}=useContext(UserContext)
  const navigate=useNavigate()
  const [number,setNumber]=useState("");
  const {valid}=useContext(UserContext)
  useEffect(()=>{
    
  },[])
 
  if(valid=="valid"){
    // navigate("/signup");
    return <Navigate to="/signup" replace={false}/>
  }
  return (
    <div className="loginBox">
      <div className="loginImg">
      <img src={require("../../images/login.png")} alt="" />
      </div>
      <div className="inputBox">
        <div id="signup">
          <h2>Sign In/ Sign UP</h2>
        <p id="signupP">
          Sign up or Sign in to access your orders, special offers, health tips
          and more!
        </p>
        </div>

       <div id="form">
       <div action="" id="inputForm" >
            <label id="label" htmlFor="">PHONE NUMBER</label>
            <div className="number">+ 91 |<input onChange={(e)=>setNumber(e.target.value)} id='numInput' type="number" placeholder="Enter mobile no" /></div>
            <p>{valid=="empty"?"Please enter your Mobile Number!":valid=="invalid"?"Please enter valid Mobile Number!":""}</p>
            <button onClick={()=>handleNumber(number)} id="otp" type="submit" >USE OTP</button>
        </div>
       </div>

        <div id="btn">
        <button id="google"><img src={Image2} alt="" /> Google</button>
        <button id="facebook"><img src={Image3} alt="" />Facebook</button>
        </div>

      </div>
    </div>
  );
}

export default Login;
