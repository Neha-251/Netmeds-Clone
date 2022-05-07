import React from 'react'
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
function ExistingUser() {
    const [otp,setOtp]=useState("");
    const {singleperson}=useContext(UserContext)
    console.log("q",singleperson)
    const navigate=useNavigate()
    const verifyOtp=async(e)=>{
        e.preventDefault();
        if(otp=="" || otp==null){
        alert("Fill the OTP")
        }
        if(otp==1234){
          localStorage.setItem("users",JSON.stringify(singleperson))
          navigate("/")
        }
    }
  return (
    <div>
        <form onSubmit={verifyOtp}>
        <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ExistingUser