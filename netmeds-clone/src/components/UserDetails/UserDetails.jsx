import React from 'react'
import { useNavigate } from 'react-router-dom';

function UserDetails() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.setItem("users",null);
    navigate("/");
  }
  return (
    <div>
      <button onClick={()=>{
        logout();
      }}>Logout</button>
    </div>
  )
}
export default UserDetails
