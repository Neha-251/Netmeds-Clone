
import "./orderReview.css";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Button } from "@mui/material";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaLuggageCart, FaRupeeSign } from "react-icons/fa";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";



export const OrderReview = () => {

    const [userlogin, setUserlogin] = useState(false);
    const navigate = useNavigate();

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

    const [reRender, setReRender] = useReducer(x => x + 1, 0);

    const [reg_address, setReg_address] = useState([]);


    const handleCodeApply = () => {

        if (codeStatus === false) {
            setCodeStatus(true);
           
        } else {
            setCodeStatus(false);
        }
       
    }
    const applyCode1 = () => {
        
        if (applyCodeS1 === true) {

            setApplyCodeS1(false);
            setDiscount1(Math.round(((mrpTotal / 2) * 20) / 100))
            console.log("re rendered")

        } else {
            setApplyCodeS1(true);
        }
        
    }
    const applyCode2 = () => {
        
        if (applyCodeS2 === true) {
            setApplyCodeS2(false);
            setDiscount1(Math.round((mrpTotal * 5) / 100))
            console.log("re rendered")
        } else {
            setApplyCodeS2(true);
        }
        
    }
    const applyCode3 = () => {
       
        if (applyCodeS3 === true) {
            setApplyCodeS3(false);
            setDiscount1(Math.round((mrpTotal * 15) / 100))
            console.log("re rendered")
        } else {
            setApplyCodeS3(true);
        }
        
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
          

            let res = await fetch("https://netmedback.herokuapp.com/carts");

            let data = await res.json();


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


            setCartData(user_based_data);
            calculateTotal(user_based_data);


            let res_user = await fetch("https://netmedback.herokuapp.com/users");
            let data_user = await res_user.json();
            console.log('data_user', data_user);

            let user_ph;
            for(let i = 0; i < data_user.users.length; i++) {
                if(data_user.users[i]._id === userId){
                    user_ph = data_user.users[i].number;
                }
            }


            let res_add = await fetch("https://netmedback.herokuapp.com/checkout");

            let data_add = await res_add.json();
            console.log('data_add', data_add.checkout)
            console.log('data_add[1]', data_add.checkout[1].phone)
            console.log('user_ph', user_ph)

         
            // for(let i = 0; i < data_add.checkout.length; i++){
            //     if(data_add.checkout[i].phone === user_ph){
            //         setReg_address(data_add.checkout[i]);
            //         console.log('data_add.checkout[i]', data_add.checkout[i])
            //     }
            // }


            data_add.checkout.forEach((el) => {
                console.log('el', el.phone)

                if(el.phone === user_ph){
                            setReg_address(el);
                }
            })

            // setReg_address(data_add.checkout[0]);


          
            


        }
        catch (err) {
            console.log('err', err);

        }

    }

    console.log("cartData", cartData);
    
    console.log('reg_address', reg_address)

    console.log("reg_address.length", reg_address);

    // useEffect(()=> {
    //     setTimeout(()=> {

    //         console.log("reg_address.length", reg_address.length);
    //         if(reg_address.length === -1){
    //             navigate("/addressdiv")
    //         } else {
    //             navigate("/orderReview");
    //         }
    //     }, 2000)
    // })

 

    // const handleRemove = (id) => {
    //     console.log(id);

    //     try {

            
    //         setMrpTotal(0);
    //         setDeleteStatus(false);

    //         axios.delete(`https://netmedback.herokuapp.com/carts/${id}`).then(() =>
    //             setReRender()
    //         );


    //     }

    //     catch (error) {
    //         console.log('error', error)

    //     }
    // }


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

                    <div className="showAddress">
                        <p>DELIVERY ADDRESS</p>
                        
                        {
                        
                            
                                <div>
                                    <p>{ reg_address.firstName } {reg_address.lastName}</p>
                                    <p>{ reg_address.address },</p>
                                    <p>{ reg_address.landmark }</p>
                                    <p>{ reg_address.city } - {reg_address.pincode} { reg_address.state }.</p>
                                    <p>+91 - { reg_address.phone  }</p>
                                    
                                </div>
                            
                    

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
                                    <Link to="/payment">
                                    <button>PAY</button>
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

