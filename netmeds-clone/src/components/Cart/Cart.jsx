
import "./Cart.css";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";



export const Cart = () => {



    const [codeStatus, setCodeStatus] = useState(true);
    const [applyCodeS1, setApplyCodeS1] = useState(true);
    const [applyCodeS2, setApplyCodeS2] = useState(true);
    const [applyCodeS3, setApplyCodeS3] = useState(true);
    const [applyCodeS4, setApplyCodeS4] = useState(true);

    const [cartData, setCartData] = useState([]);


    const [mrpTotal, setMrpTotal] = useState(0);
    // const [discount, setDiscount] = useState(0);
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
            console.log('data_get_cart', data)


            


            let userId = "6275e8307fe4bb73452dcfc6";

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


    // const handleTotal = () => {
    //     console.log("mrpTotal", mrpTotal);

    //     console.log("deleteStatus", deleteStatus)
    //     if(deleteStatus === false){
    //         setTotalAmount(mrpTotal-discount1)
    //     } else if(deleteStatus === true) {
    //         setTotalAmount((mrpTotal/2) - discount1)
    //     }
    // }

    //console.log("mrpTotal", mrpTotal);


    console.log("totalAmount", totalAmount)

    console.log("discount1", discount1);

    useEffect(() => {
        getCartData();

    }, [reRender])

    useEffect(() => {

    }, [reRender])

    return (
        <div className="cartMain">
            <h2>Order Summary</h2>
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

                                                <div className="priceDiv">
                                                    <p className="elPrice">Rs {el.product_id.price}</p>
                                                    <p className="elstprice">Rs {el.product_id.stprice}</p>
                                                </div>

                                                <div className="delivery_p">Delivery between May 5 5PM-May 6 10PM</div>
                                            </div>
                                        </div>
                                        <div className="pro_div2">
                                            <div>
                                                <div>-</div>
                                                <div>QTY {el.nos}</div>
                                                <div>+</div>
                                            </div>
                                            <div>
                                                <button
                                                    onClick={() => handleRemove(el._id, el)}
                                                >Remove</button>
                                                <button>Save For Later</button>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
                <div className="cartContainer_2">
                    {/* @ -80,7 +249,7 @@ export const Cart = () => { */}
                    <div className="promoCode_Maindiv">
                        <div>
                            <h5>APPLY PROMOCODE / NMS SUPERCASH</h5>
                        </div>

                        <div className="promocode_div" onClick={handleCodeApply}>
                            <div>
                                <div className={codeStatus === true ? "radioBtn_promoCode" : "radioBtn_promoCode_null"}>{codeStatus === true ? "" : "✔"}</div>
                            </div>

                            <div>
                                <h3 className="promoCode_h3">Apply Promo Code</h3>
                            </div>
                            <div className="downArrow">{codeStatus === true ? <TiArrowSortedDown /> : <TiArrowSortedUp />}  </div>
                            {/* @ -99,31 +268,31 @@ export const Cart = () => { */}

                        </div>



                        <div className={codeStatus === true ? "applyPromo_none" : "applyPromo_block"}>

                            <div className="inp_div">
                                <p>PROMOCODE</p>
                                <input className="code_inp" type="text" placeholder="Have a promocode? Enter Here" />
                                <Button>Apply</Button>
                            </div>

                            <div className="code_div">
                                <div className={applyCodeS1 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode1}>{applyCodeS1 === true ? "" : "✔"}</div>
                                {/* <div className={applyCodeS1 === false ? "apply_promoCode_radio_null" : "apply_promoCode_radio"} onClick={applyCode1}>{applyCodeS1 === true ? "" : "✔"}</div> */}
                                <div>
                                    <p className="code_heading">NMSH100</p>
                                    <p className="code_details">Flat 20% off on medicines + 100% NMS SuperCash on orders above Rs. 500. Valid today only. T&C Apply</p>
                                    <p className="code_details">Apply this coupon to get Flat 20% off on orders above Rs. 500. Valid today only. T&C Apply</p>
                                </div>
                            </div>
                            <div className="code_div">
                                <div className={applyCodeS2 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode2}>{applyCodeS2 === true ? "" : "✔"}</div>
                                {/* <div className={applyCodeS2 === false ? "apply_promoCode_radio_null" : "apply_promoCode_radio"} onClick={applyCode2}>{applyCodeS2 === true ? "" : "✔"}</div> */}
                                <div>
                                    <p className="code_heading">FULL100</p>
                                    <p className="code_details">Get flat 25% off on meds + 100% NMS SuperCash on your First meds order. No minimum order value.</p>
                                    <p className="code_details">Apply this coupon to get flat 5% off on . No minimum order value.</p>
                                </div>
                            </div>
                            <div className="code_div">
                                <div className={applyCodeS3 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode3}>{applyCodeS3 === true ? "" : "✔"}</div>
                                {/* <div className={applyCodeS3 === false ? "apply_promoCode_radio_null" : "apply_promoCode_radio"} onClick={applyCode3}>{applyCodeS3 === true ? "" : "✔"}</div> */}
                                <div>
                                    <p className="code_heading">DUO100</p>
                                    <p className="code_details">Get flat 20% off on meds + 100% NMS SuperCash on your meds order. Minimum order value: Rs. 999.</p>
                                    <p className="code_details">Apply this coupon to get flat 25% off on your order. Minimum order value: Rs. 999.</p>
                                </div>
                            </div>
                            <div className="code_div">
                                <div className={applyCodeS4 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode4}>{applyCodeS4 === true ? "" : "✔"}</div>
                                {/* <div className={applyCodeS4 === false ? "apply_promoCode_radio_null" : "apply_promoCode_radio"} onClick={applyCode4}>{applyCodeS4 === true ? "" : "✔"}</div> */}
                                <div>
                                    <p className="code_heading">BOWL100</p>
                                    <p className="code_details">Apply this coupon to get flat 15% off on your meds order. Minimum order value: Rs. 399.</p>
                                </div>
                            </div>

                        </div>
                        {/* @ -136,23 +305,29 @@ export const Cart = () => { */}


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
                                    <Link to="/orderReview">
                                        <button>PROCEED</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}

