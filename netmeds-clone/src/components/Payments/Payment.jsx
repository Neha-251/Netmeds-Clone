import "./Payment.css";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Button } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaLuggageCart, FaRupeeSign } from "react-icons/fa";
import { useState, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";



export const Payment = () => {

    const [userlogin, setUserlogin] = useState(false);

    const [codeStatus, setCodeStatus] = useState(true);
    const [applyCodeS1, setApplyCodeS1] = useState(true);
    const [applyCodeS2, setApplyCodeS2] = useState(true);
    const [applyCodeS3, setApplyCodeS3] = useState(true);
    const [applyCodeS4, setApplyCodeS4] = useState(true);

    const [cartData, setCartData] = useState([]);


    const [mrpTotal, setMrpTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [discount1, setDiscount1] = useState(0);

    const [totalAmount, setTotalAmount] = useState(0);

    const [deleteStatus, setDeleteStatus] = useState(true);

    const [reRender, setReRender] = useReducer(x => x + 1, 0)

    const {payment}=useContext(UserContext);
    const {afterPayment}=useContext(UserContext);
    const handleCodeApply = () => {

        if (codeStatus === false) {
            setCodeStatus(true);
            // if (codeStatus === true) {
            //     console.log(codeStatus);
        } else {
            setCodeStatus(false);
        }
        // } else {
        //     setCodeStatus(true);
        //     console.log(codeStatus);
        // }
        // }
    }
    const applyCode1 = () => {
        // if (applyCodeS1 === false) {
        //     setApplyCodeS1(true);
        // } else {
        if (applyCodeS1 === true) {

            setApplyCodeS1(false);
            setDiscount1(Math.round(((mrpTotal / 2) * 20) / 100))
            console.log("re rendered")

        } else {
            setApplyCodeS1(true);
        }
        // }
    }
    const applyCode2 = () => {
        // if (applyCodeS2 === false) {
        //     setApplyCodeS2(true);
        // } else {
        if (applyCodeS2 === true) {
            setApplyCodeS2(false);
            setDiscount1(Math.round((mrpTotal * 5) / 100))
            console.log("re rendered")
        } else {
            setApplyCodeS2(true);
        }
        // }
    }
    const applyCode3 = () => {
        // if (applyCodeS3 === false) {
        //     setApplyCodeS3(true);
        // } else {
        if (applyCodeS3 === true) {
            setApplyCodeS3(false);
            setDiscount1(Math.round((mrpTotal * 15) / 100))
            console.log("re rendered")
        } else {
            setApplyCodeS3(true);
        }
        // }
    }

    const applyCode4 = () => {
        if (applyCodeS4 === false) {

            setApplyCodeS4(true);
            setDiscount1(Math.round((mrpTotal * 25) / 100))
            console.log("re rendered")
        } else {
            setApplyCodeS4(false);
            setApplyCodeS4(true);
        }
    }


    const getCartData = async () => {

        try {
            // axios.get("https://netmedback.herokuapp.com/carts").then(response => {
            //     setCartData(response.data.cart);
            // }).then((response)=> {calculateTotal(response.data.cart)})

            let res = await fetch("https://netmedback.herokuapp.com/carts");

            let data = await res.json();



            let userId = "62760e357fe4bb73452dd215";

            let user_based_data = [];
            
            for(let i = 0; i < data.cart.length; i++){
                if(data.cart[i].user_id === userId){
                    user_based_data.push(data.cart[i]);
                }
            }

            console.log("data", data)
            console.log("user_based_data", user_based_data);

            setCartData(user_based_data);
            calculateTotal(user_based_data);

        }
        catch (err) {
            console.log('err', err);

        }

    }

    console.log("cartData", cartData);

    //console.log("cartData", cartData);






    const handleRemove = (id) => {
        console.log(id);

        try {

            // setCartData(cartData.filter((e) => e.id !== id));
            setMrpTotal(0);
            setDeleteStatus(false);

            axios.delete(`https://netmedback.herokuapp.com/carts/${id}`).then(() =>
                setReRender()
            );


        }

        catch (error) {
            console.log('error', error)

        }
    }


    const calculateTotal = (cartData) => {

        console.log("new_data", cartData);

        cartData.forEach((el) => {
            setMrpTotal(prev => prev + (el.product_id.price * el.nos));

        })
        //handleTotal();
    }

    console.log("totalAmount", totalAmount)

    console.log("discount1", discount1);



    useEffect(() => {
        getCartData();

    }, [reRender])





    return (

        <>

        <Navbar />
    <Navbar1 />
    <Nav_Menu />



        <div className="cartMain">



            <nav className="orderNav">
                <h2>Order Review</h2>


                <div>
                    <div>
                        <div className="navIcon_bac"><BsFillBagCheckFill /></div>
                        <p>Your Cart</p>
                    </div>
                    <div className="nav_line_white"></div>
                    <div>
                        <div className="navIcon_bac"><FaLuggageCart /></div>

                        <p>Order review</p>
                    </div>
                    <div className="nav_line_grey"></div>
                    <div>
                        <div className="navIcon_bac"><FaRupeeSign /></div>
                        <p>Payment Details</p>
                    </div>
                </div>

            </nav>

            <div className="cartMainContainer">

                {/* export const Cart = () => { */}
                <div className="cartContainer_1">
                    
                    <div className="vouchers">
                        <input type="checkbox" className="vcheck"></input>
                        <div className="voucherName">VOUCHERS</div>
                    </div>

                    <div className="preferred_payment">
                        
                        <div className="paydiv">
                        <div>PREFERRED PAYMENT</div>
                            <div className="paytm">
                                <div className="namelogopay">
                                  <div className="payimg">
                                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png" alt="notfpund"></img>
                                  </div>
                                  <div>Paytm</div>
                                </div>
                                <Link to="/paymentDiv">
                                <div>Link</div>
                                </Link>
                            </div>
                            
                            <div className="mob">
                                <div className="namelogomob">
                                    <div className="mobimg">
                                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/mobikwik-logo.png"></img>
                                    </div>
                                    <div className="mobname">MobiKwik</div>
                                </div>
                                <Link to="/paymentDiv">
                                <div className="moblink">Link</div>
                                </Link>
                            </div>
                        </div>
                        

                    </div>
                    <div className="preferred_payment">
                        
                        <div className="paydiv">
                        <div className="sectionname">WALLET</div>
                            <div className="paytm">
                                <div className="namelogofree">
                                  <div className="freeimg">
                                     <img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/freecharge-logo.png" width="40" alt="notfpund"></img>
                                  </div>
                                  <div className="freename">Freecharge PayLater | Wallet</div>
                                </div>
                                <Link to="/paymentDiv">
                                <div>Link</div>
                                </Link>
                            </div>
                            
                            <div className="mob">
                                <div className="namelogoama">
                                    <div className="amaimg">
                                        <img src="https://static.amazon.jobs/teams/378/thumbnails/AmazonPayLogo-543.jpg?1508227956"></img>
                                    </div>
                                    <div className="mobname">Amazon Pay</div>
                                </div>
                                <div className="moblink">
                                    <input type="radio"></input>
                                </div>
                                
                            </div>
                        </div>
                        

                    </div>
                    <div className="preferred_payment">
                        
                        <div className="paydiv">
                        <div className="sectionname">OTHER PAYMENTS</div>
                        
                            <div className="mob">
                                <div className="namelogoama">
                                    <div className="amaimg">
                                        <img src="https://www.pngitem.com/pimgs/m/3-38170_phonepe-logo-png-phone-pe-transparent-png.png"></img>
                                    </div>
                                    <div className="mobname">Phone Pe</div>
                                </div>
                                <div className="moblink">
                                    <input type="radio"></input>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="preferred_payment">
                        
                        <div className="paydiv">
                        <div className="sectionname">UPI</div>
                        
                            <div className="mob">
                                <div className="namelogoama">
                                    <div className="amaimg">
                                        <img src="https://seeklogo.com/images/G/google-pay-logo-BFDEA14F81-seeklogo.com.png"></img>
                                    </div>
                                    <div className="mobname">Google Pay</div>
                                </div>
                                <div className="moblink">
                                    <input type="radio"></input>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="preferred_payment">
                        
                        <div className="paydiv">
                        <div className="sectionname">CREDIT & DEBIT CARDS</div>
                        <br></br>
                        <hr></hr>
                        <div className="CardDiv">ADD NEW CARD</div>
                        
                            
                        </div>
                    </div>
                    <div className="preferred_payment">
                        
                        <div className="paydiv">
                        <div className="sectionname">UPI</div>
                        
                            <div className="mob">
                                <div className="namelogoama">
                                    <div className="amaimg">
                                        <img src="https://www.kindpng.com/picc/m/394-3943480_cash-on-delivery-icon-hd-png-download.png"></img>
                                    </div>
                                    <div className="mobname">Cash On Delivery</div>
                                </div>
                                <div className="moblink">
                                    <input type="radio"></input>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                <div className="cartContainer_2">
                    {/* @ -80,7 +249,7 @@ export const Cart = () => { */}
                    <div className="promoCode_Maindiv">




                        <div className="paymentDetails_Maindiv">
                            <h5>PAYMENT DETAILS</h5>
                            <div>
                                <div className="leftSidePayment_subDiv">MRP Total</div>
                                <div className="rightSidePayment_subDiv">Rs {deleteStatus === false ? mrpTotal : mrpTotal / 2}</div>
                            </div>
                            <div>
                                <div className="leftSidePayment_subDiv">Netmeds Discount</div>
                                <div className="rightSidePayment_subDiv">Rs
                                    {discount1}
                                </div>
                            </div>
                            <div>

                                <div className="leftSidePayment_subDiv total_p">Total Amount</div>
                                <div className="rightSidePayment_subDiv">Rs
                                    {deleteStatus === false ? mrpTotal - discount1 : (mrpTotal / 2) - discount1}
                                    {/* {totalAmount} */}
                                </div>
                            </div>

                            <div className="savings_div">TOTAL SAVINGS</div>

                            <div className="totalAmount_mainDiv">

                                <div>
                                    <div>Total Amount</div>
                                    <div>Rs
                                        {deleteStatus === false ? mrpTotal - discount1 : (mrpTotal / 2) - discount1}
                                    </div>

                                </div>
                                <div>
                                    <Link to="/success">
                                    <button onClick={()=>{
                                        afterPayment(true);
                                    }}>PAY</button>
                                    </Link>
                                    
                                </div>




                            </div>


                        </div>
                        <div>
                            <p className="des_p">IMPORTANT UPDATE : Due to the current Covid 19 situation, we cannot commit to our mentioned delivery dates. We are working hard to meet the unprecedented demand and we thank you for your patience.</p>
                            <p className="des_p">Netmeds is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personnel to be his agent for delivery of the goods. For details read Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )


}