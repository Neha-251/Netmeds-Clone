import "./navbar.css";
import { Link } from "react-router-dom";

import * as React from 'react';
// import ReactDOM from 'react-dom';
import Avatar from '@mui/material/Avatar';

export const Navbar = () => {
    const userData=JSON.parse(localStorage.getItem("users"));
    console.log(userData);

    return (
        <div className="navbar">
            <div className="navbox">
                <Link to="/" className="logoimage-div"><img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="" className="logoimage" /></Link>
                <div className="input-div">
                    <div className="delivery-add">Delivery to</div>
                    <input type="text" className="navinput" />
                </div>
                <div className="blank">Upload</div>
                <Link to="/cart" >
                    <div className="cart">Cart</div>
                </Link>
                <Link to="/account/login" className="signin">{userData==null?"Sign In/Sign up":userData.firstName}</Link>
            </div>
        </div>
    )
}


export const Navbar1 = () => {
    return (
        <div className="navbar1">
            <div className="types">
                <div><Avatar alt="Remy Sharp" src="	https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/medicine.svg" /><p>Medicine</p> </div>
                <div><Avatar alt="Travis Howard" src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" /><p>Wellness</p></div>
                <div><Avatar alt="Travis Howard" src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" /><p>Lab Tests</p></div>
                <div><Avatar alt="Travis Howard" src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" /><p>Beauty</p></div>
                <div><Avatar alt="Travis Howard" src="	https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/health-library.svg" /><p>Health Corner</p></div>
            </div>

        </div>
    )
}

export const Nav_Menu = () => {
    return (
        <div className="navmenu">
            <Link to="/covid">Covid Essentials</Link>
            <Link to="/diabeties">Diabetes</Link>
            <Link to="/covid">Eyewear</Link>
            <Link to="/diabeties">Ayush</Link>
            <Link to="/diabeties">Ayurvedic</Link>
            <Link to="/covid">Homeopathy</Link>
            <Link to="/diabeties">Fitness</Link>
            <Link to="/covid">Mom & Baby</Link>
            <Link to="#">Devices</Link>
            <Link to="#">Surgicals</Link>
            <Link to="#">Sexual Wellness</Link>
            <Link to="#">Treatments</Link>
        </div>
    )
}