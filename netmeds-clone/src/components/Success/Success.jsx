import "./Success.css";
import { Link } from "react-router-dom";
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";

export const Success= ()=>{
    var name = JSON.parse(localStorage.getItem("users"));
    
    return (

        <>
        <Navbar />
    <Navbar1 />
    <Nav_Menu />


        <div className="maindiv">
            <div className="name">Dear {name.firstName}</div>
            <div className="imgdiv">
                <img src="https://c.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif"></img>
            </div>
            <div className="placed">Your Order has been Placed Successfully</div>
            <div>
                <div className="thank">Thank You for Choosing Netmeds</div>
            </div>
            <div>
                <p>Click Below To Go To Home Page</p>
                <Link to="/">
                <button>Home</button></Link>
            </div>

        </div>
        </>
    )
}