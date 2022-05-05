import React, { useContext, useEffect, useState } from "react";
import './Login.css';
import Image1 from '../../images/login.png';
import Image2 from '../../images/google-icon.png';
import Image3 from '../../images/facebook-icon.png';
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { OtpContext } from "../contexts/otpContext";
import { Nav_Menu } from "../Nav/Navbar";
function Login() {
  const {handleNumber}=useContext(UserContext)
  const setUpRecaptcha=useContext(OtpContext)
  const [num,setNum]=useState("");
  const [otp,setOtp]=useState("");
  const [confirmObj,setConfirmObj]=useState("");
  const [valid,setValid]=useState("");
  const getOtp=async(e)=>{
    e.preventDefault();
    if(num.length==0){
      setValid("empty")
    }
    else if(num.length>0 && num.length<13){
      setValid("invalid")
    }
    else{
      const response=await setUpRecaptcha(num)
      console.log("response",response);
      handleNumber({num,response});
      setValid("valid");
      setConfirmObj(response)
      console.log(num)
    }
    
  }
if(valid=="valid"){
  return <Navigate to="/signup"/>
}
//   const {handleNumber}=useContext(UserContext)
//   const setUpRecaptcha=useContext(OtpContext)
//   const navigate=useNavigate()
//   const [number,setNumber]=useState("");
//   const {valid}=useContext(UserContext)
//   useEffect(()=>{
    
//   },[])
//  const getOtp=async(e)=>{
//    e.preventDefault();

//     // handleNumber(number);
//     const response=await setUpRecaptcha(number)
//  }
//   // if(valid=="valid"){
//   //   // navigate("/signup");
//   //   return <Navigate to="/signup" replace={false}/>
//}
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
       {/* <form onSubmit={getOtp} action="" id="inputForm" >
            <label id="label" htmlFor="">PHONE NUMBER</label>
            <PhoneInput defaultCountry="IN" value={num} onChange={setNum} id='numInput' placeholder="Enter mobile no" />
            <p className="validity">{valid=="empty"?"Please enter your Mobile Number!":valid=="invalid"?"Please enter valid Mobile Number!":""}</p>
            <button id="otp" type="submit" >USE OTP</button>
        </form> */}
        <form onSubmit={getOtp}>
          <div id="sign-in-button"></div>
          <PhoneInput defaultCountry="IN" placeholder="mobile number" value={num} onChange={setNum}></PhoneInput>
          <div id="recaptcha-container"/>
          <p className="validity">{valid=="empty"?"Please enter your Mobile Number!":valid=="invalid"?"Please enter valid Mobile Number!":""}</p>
          <button type="submit">Submit</button>
      </form>
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
