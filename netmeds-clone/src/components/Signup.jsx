import React from "react";
import './Signup.css';
import Image1 from '../image/login.png';

function Signup() {
  return (
    <div className="Signup">
        <div className="signupImg">
      <img src={Image1} alt="" />
      </div>
        <div id="details"><h2>Create Account</h2>
        <form action="" id="form">
            <label htmlFor="">EMAIL ID</label>
            <input type="text" id="email" placeholder="Enter Your Email Id"/>
            <label htmlFor="">FIRST NAME</label>
            <input type="text" id="firstName" placeholder="Your First Name"/>
            <label htmlFor="">LAST NAME</label>
            <input type="text" id="lastName" placeholder="Your Last Name"/>

            <button id="verify">VERIFY</button>
        </form>
        </div>
    </div>
  )
}

export default Signup