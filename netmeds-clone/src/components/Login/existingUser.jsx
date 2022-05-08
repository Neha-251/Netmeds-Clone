import React from 'react'
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";
import { UserContext } from '../contexts/userContext';
function ExistingUser() {
  const [otp, setOtp] = useState("");
  const { singleperson } = useContext(UserContext)
  console.log("q", singleperson)
  const navigate = useNavigate()


  const verifyOtp = async (e) => {
    e.preventDefault();
    if (otp == "" || otp == null) {
      alert("Fill the OTP")
    }
    if (otp == 1234) {
      localStorage.setItem("users", JSON.stringify(singleperson))
      navigate("/")
    }
  }
  return (

    <>
      <Navbar />
      <Navbar1 />
      <Nav_Menu />


      <div>
        <form onSubmit={verifyOtp}>
          <input type="text" onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP"></input>
          <button type="submit">Submit</button>
        </form>
      </div>

    </>
  )
}

export default ExistingUser