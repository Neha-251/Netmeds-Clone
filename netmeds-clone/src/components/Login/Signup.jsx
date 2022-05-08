import React, { useContext, useState } from "react";
import './Signup.css';
import Image1 from '../../images/login.png';
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";

function Signup() {
  const {gotoHome}=useContext(UserContext)
  const {handleDetails}=useContext(UserContext);
  const [otp,setOtp]=useState("");
  const navigate=useNavigate()
  const [details,setDetails]=useState({
    email:"",
    firstName:"",
    lastName:""
  })
  const handleForm=(e)=>{
    setDetails({
      ...details,
      [e.target.id]:e.target.value
    })
  }
  const fetchUserData=async()=>{
    const userdata=await fetch("https://netmedback.herokuapp.com/users");
    const res= await userdata.json();
    console.log('res', res)

    localStorage.setItem("users",JSON.stringify(res.users[res.users.length-1]));
    navigate("/covid");
  }
  const verifyOtp=(e)=>{
    console.log(details)
    e.preventDefault();
      handleDetails(details)
  }
  if(gotoHome=="yes"){
    fetchUserData();
  }
  
  return (

    <>

    <Navbar />
    <Navbar1 />
    <Nav_Menu />



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
              <label htmlFor="">ENTER OTP</label>
              <input type="password" onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" className="otpClass"></input>
              <button type="submit" id="verify">VERIFY</button>
            </form>

        </div>
        </div>
    </div>

    </>
  )
}

export default Signup