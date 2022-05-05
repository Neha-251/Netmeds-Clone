import React, { useContext, useState } from "react";
import './Signup.css';
import Image1 from '../../images/login.png';


import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";


function Signup() {
  const {gotoHome}=useContext(UserContext)
  const {handleDetails}=useContext(UserContext);
  const [otp,setOtp]=useState("");
  const [confirmObj,setConfirmObj]=useState("")
  const navigate=useNavigate()
  const {res}=useContext(UserContext)
  console.log(res)
  const [details,setDetails]=useState({
    email:"",
    firstName:"",
    lastName:""
  });
  const handleForm=(e)=>{
    setDetails({
      ...details,
      [e.target.id]:e.target.value
    })
  }
  const verifyOtp=async(e)=>{
    e.preventDefault();
    
    if(otp=="" || otp==null){
      return
    }
    try{
      await res.confirm(otp);
      handleDetails(details)
    }
    catch(err){
      console.log(err)
    }
  }
  if(gotoHome=="yes"){
    navigate("/covid");
  }
  return (
    <div className="Signup">
        <div className="signupImg">
      <img src={Image1} alt="" />
      </div>
        <div id="details"><h2>Create Account</h2>
        <div action="" id="form">
            <label htmlFor="">EMAIL ID</label>
              <form onSubmit={verifyOtp}>
              <input onChange={handleForm} type="text" id="email" placeholder="Enter Your Email Id"/>
              <label htmlFor="">FIRST NAME</label>
              <input onChange={handleForm} type="text" id="firstName" placeholder="Your First Name"/>
              <label htmlFor="">LAST NAME</label>
              <input onChange={handleForm} type="text" id="lastName" placeholder="Your Last Name"/>
              <input type="text" onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP"></input>
              <button type="submit" id="verify">VERIFY</button>
            </form>
            
        </div>
        </div>
    </div>
  )
}

export default Signup