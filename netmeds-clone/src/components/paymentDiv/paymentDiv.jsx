
import { useState } from "react";
import "./addressDiv.css";
import "../../images/orderpage.png";
import { useNavigate, Link } from "react-router-dom";


export const AddressDiv = () => {

    let navigate = useNavigate();



    const handleAddressSubmit = (e) => {
        e.preventDefault()
        

        navigate("/payment")

    }


    return (


        <div className="addressImage_background">
            <div className="address-left_div"></div>
            <div className="side_div_forAddress">

                <form action="" onSubmit={handleAddressSubmit} className="addressForm">
                    <div>
                        <h4>ENTER CARD DETAILS</h4>
                        <Link to="/orderReview">
                        <p>✖</p>
                        </Link>
                    </div>

                    <label>CARD NUMBER</label>
                    <input type="text" className="inp_full" name="pincode"  placeholder="XXXX XXXX XXXX XXXX" /> <br />
                    <label>EXPIRY DATE</label>
                    <input type="text" name="city"  placeholder="" />
                    <input type="text" name="state"  placeholder="" /> 
                    <label>CVV</label>
                    <input type="text"  name="firstName"  placeholder="" /> <br />
                    <label>NAME ON CARD</label>
                    <input className="addressSubmit" value="SAVE ADDRESS" type="submit" />

                </form>
            </div>
        </div>
    )


}