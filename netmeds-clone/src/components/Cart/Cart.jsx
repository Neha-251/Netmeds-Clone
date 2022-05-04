import "./Cart.css";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Button } from "@mui/material";
import { useState } from "react";



export const Cart = () => {

    const [codeStatus, setCodeStatus] = useState(true);
    const [applyCodeS1, setApplyCodeS1] = useState(true);
    const [applyCodeS2, setApplyCodeS2] = useState(true);
    const [applyCodeS3, setApplyCodeS3] = useState(true);
    const [applyCodeS4, setApplyCodeS4] = useState(true);


    const [mrpTotal, setMrpTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);


    const handleCodeApply = () => {

        if (codeStatus === false) {
            setCodeStatus(true);
            console.log(codeStatus);
        } else {
            setCodeStatus(false);
            console.log(codeStatus);
        }
    }

    const applyCode1 = () => {
        if (applyCodeS1 === false) {
            setApplyCodeS1(true);
        } else {
            setApplyCodeS1(false);
        }
    }

    const applyCode2 = () => {
        if (applyCodeS2 === false) {
            setApplyCodeS2(true);
        } else {
            setApplyCodeS2(false);
        }
    }

    const applyCode3 = () => {
        if (applyCodeS3 === false) {
            setApplyCodeS3(true);
        } else {
            setApplyCodeS3(false);
        }
    }

    const applyCode4 = () => {
        if (applyCodeS4 === false) {
            setApplyCodeS4(true);
        } else {
            setApplyCodeS4(false);
        }
    }


    return (
        <div className="cartMain">
            <h1>Order Summary</h1>
            <div className="cartMainContainer">

                <div className="cartContainer_1">
                    <h6>PRODUCTS</h6>


                </div>
                <div className="cartContainer_2">
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


                        </div>

                        <div className={codeStatus === true ? "applyPromo_none" : "applyPromo_block"}>
                            <div className="inp_div">
                                <p>PROMOCODE</p>
                                <input className="code_inp" type="text" placeholder="Have a promocode? Enter Here" />
                                <Button>Apply</Button>
                            </div>


                            <div className="code_div">
                                <div className={applyCodeS1 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode1}>{applyCodeS1 === true ? "" : "✔"}</div>
                                <div>
                                    <p className="code_heading">NMSH100</p>
                                    <p className="code_details">Flat 20% off on medicines + 100% NMS SuperCash on orders above Rs. 500. Valid today only. T&C Apply</p>
                                </div>
                            </div>
                            <div className="code_div">
                                <div className={applyCodeS2 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode2}>{applyCodeS2 === true ? "" : "✔"}</div>
                                <div>
                                    <p className="code_heading">FULL100</p>
                                    <p className="code_details">Get flat 25% off on meds + 100% NMS SuperCash on your First meds order. No minimum order value.</p>
                                </div>
                            </div>
                            <div className="code_div">
                                <div className={applyCodeS3 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode3}>{applyCodeS3 === true ? "" : "✔"}</div>
                                <div>
                                    <p className="code_heading">DUO100</p>
                                    <p className="code_details">Get flat 20% off on meds + 100% NMS SuperCash on your meds order. Minimum order value: Rs. 999.</p>
                                </div>
                            </div>
                            <div className="code_div">
                                <div className={applyCodeS4 === true ? "apply_promoCode_radio" : "apply_promoCode_radio_null"} onClick={applyCode4}>{applyCodeS4 === true ? "" : "✔"}</div>
                                <div>
                                    <p className="code_heading">BOWL100</p>
                                    <p className="code_details">Get flat 15% off on meds + 100% NMS SuperCash on your meds order. No minimum order value.</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="paymentDetails_Maindiv">
                        <h5>PAYMENT DETAILS</h5>

                        <div>
                            <div className="leftSidePayment_subDiv">MRP Total</div>
                            <div className="rightSidePayment_subDiv">Rs {mrpTotal}</div>
                        </div>
                        <div>
                            <div className="leftSidePayment_subDiv">Netmeds Discount</div>
                            <div className="rightSidePayment_subDiv">Rs {discount}</div>
                        </div>
                        <div>
                            <div className="leftSidePayment_subDiv total_p">Total Amount</div>
                            <div className="rightSidePayment_subDiv">Rs {totalAmount}</div>
                        </div>

                        <div className="savings_div">TOTAL SAVINGS</div>
                       
                        <div className="totalAmount_mainDiv"> 
                            <div>
                                <div>Total Amount</div>
                                <div>Rs 0</div>

                            </div>
                            <div>
                                <button>Proceed</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}