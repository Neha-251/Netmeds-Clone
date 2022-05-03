import "./navbar.css"

import * as React from 'react';
// import ReactDOM from 'react-dom';
import Avatar from '@mui/material/Avatar';

export const Navbar =()=>{
    return (
        <div className="navbar">
            <div className="navbox">
            <div className="logoimage-div"><img src="https://www.netmeds.com/assets/gloryweb/images/home-logo-netmeds-new.svg" alt="" className="logoimage"/></div>
            <div className="input-div">
                <div className="delivery-add">Delivery to</div>
                 <input type="text" className="navinput" />
            </div>
            <div className="blank">Upload</div>
            <div className="cart">Cart</div>
            <div className="signin">Sign In/Sign up</div>
            </div>
            
              
        </div>
        
    )
}


export const Navbar1 =()=>{
    return (
        <div className="navbar1">
            <div className="types">
                <div><Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDadh2wWH2-Z6538nw8qCpQm7OIIK2wE2ALQ&usqp=CAU" /><p>Medicine</p> </div>
                <div><Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDadh2wWH2-Z6538nw8qCpQm7OIIK2wE2ALQ&usqp=CAU" /><p>Wellness</p></div>
                <div><Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDadh2wWH2-Z6538nw8qCpQm7OIIK2wE2ALQ&usqp=CAU" /><p>Lab Tests</p></div>
                <div><Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDadh2wWH2-Z6538nw8qCpQm7OIIK2wE2ALQ&usqp=CAU" /><p>Beauty</p></div>
                <div><Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDadh2wWH2-Z6538nw8qCpQm7OIIK2wE2ALQ&usqp=CAU" /><p>Health Corner</p></div>
            </div>
             
        </div>
    )
}

