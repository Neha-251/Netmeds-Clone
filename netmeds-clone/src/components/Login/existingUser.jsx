import React from 'react'
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';
function ExistingUser() {
    const [otp,setOtp]=useState("");
    const {res}=useContext(UserContext);
    const {singleperson}=useContext(UserContext)
    const navigate=useNavigate()
    const verifyOtp=async(e)=>{
        e.preventDefault();
        if(otp=="" || otp==null){
        return
        }
        try{
            await res.confirm(otp);
            localStorage.setItem("user",JSON.stringify(singleperson));
            navigate("/")
        }
        catch(err){
        console.log(err)
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