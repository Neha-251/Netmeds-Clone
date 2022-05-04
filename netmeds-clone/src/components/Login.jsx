import React from "react";
import './Login.css';
import Image1 from '../image/login.png';
import Image2 from '../image/google-icon.png';
import Image3 from '../image/facebook-icon.png';


function Login() {
  return (
    <div className="loginBox">
      <div className="loginImg">
      <img src={Image1} alt="" />
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
       <form action="" id="inputForm">
            <label id="label" htmlFor="">PHONE NUMBER</label>
            <input id='numInput' type="number" placeholder="Enter mobile no" />
            <button id="otp" onClick={''}>USE OTP</button> 
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
