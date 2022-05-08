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

import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";


function Login() {
  const {singleUser}=useContext(UserContext)
  const [num,setNum]=useState("");
  const [valid,setValid]=useState("");
  const navigate=useNavigate()
  console.log(num)
  const getOtp=async(e)=>{
    
    e.preventDefault();
    if(num.length==0){
      setValid("empty")
    }
    else if(num.length>0 && num.length<10){
      setValid("invalid")
    }
    else{ 
      const data=await fetch("https://netmedback.herokuapp.com/users");
      const respondData=await data.json();
      const resData=respondData.users
      console.log(resData);
      var count=0
      for(var i=0;i<resData.length;i++){
        if(resData[i].number==num){
          console.log("yes")
          singleUser(resData[i])
          navigate("/existing");
          break;
        }
        else{
          count++;
          console.log(count);
        }
      }
      if(count===resData.length){
          singleUser(num);
          navigate("/signup");
      }
    }
    
  }
if(valid=="valid"){
  return <Navigate to="/signup"/>
}

  return (
    <>

    <Navbar />
    <Navbar1 />
    <Nav_Menu />

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

       <div className="form">
        <form onSubmit={getOtp} id='inputForm'>
        <label id="label" htmlFor="">PHONE NUMBER</label>
          {/* <div id="sign-in-button"></div> */}
          <input id='numInput' type="text"  placeholder="Enter Your Mobile no" onChange={(e)=>setNum(e.target.value)}></input>
          <p className="validity">{valid=="empty"?"Please enter your Mobile Number!":valid=="invalid"?"Please enter valid Mobile Number!":""}</p>
          <button type="submit" id="otp">USE OTP</button>
      </form>
       </div>

        <div id="btn">
        <button id="google"><img src={Image2} alt="" /> Google</button>
        <button id="facebook"><img src={Image3} alt="" />Facebook</button>
        </div>

      </div>
    </div>
    </>
  );

}

export default Login;
