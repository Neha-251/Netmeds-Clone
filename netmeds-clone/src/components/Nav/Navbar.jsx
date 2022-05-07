import "./navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

import * as React from 'react';
// import ReactDOM from 'react-dom';
import Avatar from '@mui/material/Avatar';

export const Navbar = () => {

    const [navcartData, setnavCartData] = useState([]);
    const [reload, setreload] = useState(false);
    const [navreRender, setnavReRender] = useReducer(x => x + 1, 0)
    const [cartItem, setcartItem] = useState(0);


    const userData=JSON.parse(localStorage.getItem("users"));
    console.log(userData);


    const navgetCartData = async () => {

        try {
            // axios.get("https://netmedback.herokuapp.com/carts").then(response => {
            //     setCartData(response.data.cart);
            // }).then((response)=> {calculateTotal(response.data.cart)})
    
            let res = await fetch("https://netmedback.herokuapp.com/carts");
    
            let data = await res.json();
            console.log('data_get_cart', data)
    
            let userdata = JSON.parse(localStorage.getItem("users"))
    
            let userId = userdata._id;
            let user_based_data = [];
            
            for(let i = 0; i < data.cart.length; i++){
                if(data.cart[i].user_id === userId){
                    user_based_data.push(data.cart[i]);
                }
            }
    
            console.log("data", data)
            console.log("user_based_data", user_based_data);


            setnavReRender();
            setnavCartData(user_based_data);
            setcartItem(user_based_data.length)
            // calculateTotal(user_based_data);
    
    
    
        }
        catch (err) {
            console.log('err', err);
    
        }
    
    }
    
    useEffect(() => {
        navgetCartData();
    
    }, [navreRender])
    

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
                    <div className={cartItem===0? "notShowCart" : "showCartItem"} >{cartItem}</div>
                </Link>
                <Link to={userData==null?"/account/login":"/account/user-details"}  className="signin">
                    <div>
                       {userData==null?"Sign In/Sign up": userData.firstName } 
                    </div>
                    
                </Link>
                
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