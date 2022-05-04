import "./navbar.css";
import { Link } from "react-router-dom";

import * as React from 'react';
// import ReactDOM from 'react-dom';
import Avatar from '@mui/material/Avatar';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbox">
                <div className="logoimage-div"><img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="" className="logoimage" /></div>
                <div className="input-div">
                    <div className="delivery-add">Delivery to</div>
                    <input type="text" className="navinput" />
                </div>
                <div className="blank">Upload</div>
                <Link to="/cart" >
                    <div className="cart">Cart</div>
                </Link>
                <div className="signin">Sign In/Sign up</div>
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
            <a href="/covid">Covid Essentials</a>
            <a href="/diabeties">Diabetes</a>
            <a href="/covid">Eyewear</a>
            <a href="/diabeties">Ayush</a>
            <a href="/diabeties">Ayurvedic</a>
            <a href="/covid">Homeopathy</a>
            <a href="/diabeties">Fitness</a>
            <a href="/covid">Mom & Baby</a>
            <a href="#">Devices</a>
            <a href="#">Surgicals</a>
            <a href="#">Sexual Wellness</a>
            <a href="#">Treatments</a>
        </div>
    )
}