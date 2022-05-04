import "./Cart.css";
import {TiArrowSortedDown, TiArrowSortedUp} from "react-icons/ti";
import { Button } from "@mui/material";



export const Cart = () => {
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
                        <div className="promocode_div">
                            <div>
                                <div className="radioBtn_promoCode"></div>
                            </div>
                            <div>
                                <h3 className="promoCode_h3">Apply Promo Code</h3>
                            </div>
                            <div className="downArrow"> <TiArrowSortedDown/> </div>

                            
                        </div>

                        <div className="applyPromo">
                                <div className="inp_div">
                                    <input className="code_inp" type="text" placeholder="Have a promocode? Enter Here" />
                                    <Button>Apply</Button>
                                </div>


                                <div className="code_div">
                                    <div className="radioBtn_promoCode"></div>
                                    <div>
                                        <p className="code_heading">NMSH100</p>
                                        <p className="code_details">Flat 20% off on medicines + 100% NMS SuperCash on orders above Rs. 500. Valid today only. T&C Apply</p>
                                    </div>
                                </div>
                                <div className="code_div">
                                    <div className="radioBtn_promoCode"></div>
                                    <div>
                                        <p className="code_heading">FULL100</p>
                                        <p className="code_details">Get flat 25% off on meds + 100% NMS SuperCash on your First meds order. No minimum order value.</p>
                                    </div>
                                </div>
                                <div className="code_div">
                                    <div className="radioBtn_promoCode"></div>
                                    <div>
                                        <p className="code_heading">DUO100</p>
                                        <p className="code_details">Get flat 20% off on meds + 100% NMS SuperCash on your meds order. Minimum order value: Rs. 999.</p>
                                    </div>
                                </div>
                                <div className="code_div">
                                    <div className="radioBtn_promoCode"></div>
                                    <div>
                                        <p className="code_heading">BOWL100</p>
                                        <p className="code_details">Get flat 15% off on meds + 100% NMS SuperCash on your meds order. No minimum order value.</p>
                                    </div>
                                </div>

                            </div>
                    </div>
                    <div className="paymentDetails_Maindiv"></div>
                </div>
            </div>
        </div>
    )
}