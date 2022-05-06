
import {useState} from "react";
import "./addressDiv.css";
import "../../images/orderpage.png";
import {useNavigate} from "react-router-dom";


export const AddressDiv = () => {
    
    let navigate = useNavigate();

    const [address, setAddress] = useState({
        pincode: "",
        city: "",
        state: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
    })

    const handleAddressChange = (e) => {
        const { name, value } = e.target;

        setAddress({
            ...address,
            [name]: value,
        })

    }


    const handleAddressSubmit = (e) => {
        e.preventDefault()
        fetch("https://netmedback.herokuapp.com/checkout", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(address),
        });

        navigate("/orderReview")

    }


    return (


        <div className="addressImage_background">
            <div className="address-left_div"></div>
        <div className="side_div_forAddress">

        <form action="" onSubmit={handleAddressSubmit} className="addressForm">
            <h4>ADD ADDRESS</h4>

            <input type="text" className="inp_full" name="pincode" value={address.pincode} onChange={handleAddressChange} placeholder="Pin Code" /> <br />
            <input type="text" name="city" value={address.city} onChange={handleAddressChange} placeholder="City" />
            <input type="text" name="state" value={address.state} onChange={handleAddressChange} placeholder="State" /> <br />
            <input type="text" className="inp_full" name="firstName" value={address.firstName} onChange={handleAddressChange} placeholder="First Name" /> <br />
            <input type="text" className="inp_full" name="lastName" value={address.lastName} onChange={handleAddressChange} placeholder="Last Name" /> <br />
            <input type="text" className="inp_full" name="address" value={address.address} onChange={handleAddressChange} placeholder="Address" /> <br />
            <input type="text" className="inp_full" name="landmark" value={address.landmark} onChange={handleAddressChange} placeholder="Landmark" /> <br />
            <div className="div_phone_inp">
                <div>+91</div>
                <input type="text" className="inp_full" name="phone" value={address.phone} onChange={handleAddressChange} placeholder="Phone Number" /> <br />
            </div>
            <input className="addressSubmit" value="SAVE ADDRESS" type="submit" />

        </form>
    </div>
    </div>
    )


}