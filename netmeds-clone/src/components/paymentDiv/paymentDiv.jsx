
// import { useState } from "react";
// import "./addressDiv.css";
// import "../../images/orderpage.png";
// import { useNavigate, Link } from "react-router-dom";


// export const AddressDiv = () => {

//     let navigate = useNavigate();

//     const [payment, setPayment] = useState({
//         cart_id: user_id,
//         user_id: cart_id,
//         status: true,
        
//     })

//     const handleAddressChange = (e) => {
//         const { name, value } = e.target;

//         setPayment({
//             ...payment,
//             [name]: value,
//         })

//     }


//     const handleAddressSubmit = (e) => {
//         e.preventDefault()
//         fetch("https://netmedback.herokuapp.com/checkout", {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json",
//             },
//             body: JSON.stringify(payment),
//         });

//         //navigate("/orderReview")

//     }


//     return (


//         <div className="addressImage_background">
//             <div className="address-left_div"></div>
//             <div className="side_div_forAddress">

//                 <form action="" onSubmit={handleAddressSubmit} className="addressForm">
//                     <div>
//                         <h4>ENTER CARD DETAILS</h4>
//                         <Link to="/orderReview">
//                         <p>✖</p>
//                         </Link>
//                     </div>

//                     <label>CARD NUMBER</label>
//                     <input type="text" className="inp_full" name="pincode"  placeholder="XXXX XXXX XXXX XXXX" /> <br />
//                     <label>EXPIRY DATE</label>
//                     <input type="text" name="city"  placeholder="" />
//                     <input type="text" name="state"  placeholder="" /> 
//                     <label></label>
//                     <input type="text"  name="firstName"  placeholder="" /> <br />
//                     <input type="text" className="inp_full" name="lastName"  placeholder="Last Name" /> <br />
//                     <input type="text" className="inp_full" name="address" value={address.address} onChange={handleAddressChange} placeholder="Address" /> <br />
//                     <input type="text" className="inp_full" name="landmark" value={address.landmark} onChange={handleAddressChange} placeholder="Landmark" /> <br />
//                     <div className="div_phone_inp">
//                         <div>+91</div>
//                         <input type="text" className="inp_full" name="phone" value={address.phone} onChange={handleAddressChange} placeholder="Phone Number" /> <br />
//                     </div>
//                     <input className="addressSubmit" value="SAVE ADDRESS" type="submit" />

//                 </form>
//             </div>
//         </div>
//     )


// }