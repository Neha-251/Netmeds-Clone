
import "./orderReview.css";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Button } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaLuggageCart, FaRupeeSign } from "react-icons/fa";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export const OrderReview = () => {

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


            setCartData(data.cart);
            calculateTotal(data.cart);

            // setTimeout(() => {
            //     handleTotal();
            // }, 3000)

            console.log("data", data)

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
                    <h5>PRODUCTS</h5>

                    <div className="productsShow_div">


                        {
                            cartData.map((el) => {
                                // console.log("el_name", el);



                                return (
                                    <div className="product_subdiv">
                                        <div className="pro_div1">
                                            <div>


                                                <img className="img_pro" src={el.product_id.img} alt="" />

                                            </div>
                                            <div>
                                                <p className="elName">{el.product_id.name}</p>
                                                {/* <p className="elNos">{el.nos}</p> */}

                                                <p className="elMkt">{el.product_id.mkt}</p>


                                                <div className="address_div"></div>

                                                <div className="delivery_p">Delivery between May 5 5PM-May 6 10PM</div>
                                            </div>
                                        </div>
                                        <div className="pro_div2_or">

                                            <div>
                                                <p className="elPrice">Rs {el.product_id.price}</p>
                                                <p className="elstprice">Rs {el.product_id.stprice}</p>
                                            </div>
                                            <div>

                                                <div>QTY:</div>
                                                <div>{el.nos}</div>
                                            </div>

                                        </div>

                                    </div>

                                )
                            })
                        }

                    </div>
                    <Link to="/addressdiv">
                        <button className="goto_address_btn">Add Address</button>
                    </Link>

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
                                    <button>PAY</button>
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

    )


}

