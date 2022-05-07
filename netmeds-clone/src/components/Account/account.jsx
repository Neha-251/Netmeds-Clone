import * as React from "react";
import "../Your Account/Account.css"


export const Account= ()=>{
    return (
        <div className="account-container">
            <div className="headerr">
                <h2>Your Account</h2>
            </div>
​
            <div className="first-row">
                <div className="top-left">
                    <img src="https://www.netmeds.com/msassets/images/icons/profile-icon.svg" alt=""/>
                    <div className="user-det">
                        <h2 className="accName">Ashish Kumar</h2>
                        <p className="accGmail">asishkumar@gmail.com</p>
                        <p className="accMob">+91-7883229157</p>
                    </div>
                </div>
                <div className="top-right">
                    <div className="one-opt">
                        <img src="https://www.netmeds.com/msassets/images/icons/payment_history.svg" alt=""/>
                        <p>Payment Methods</p>
                    </div>
                    <div className="one-opt">
                        <img src="https://www.netmeds.com/msassets/images/icons/medicine_orders.svg" alt=""/>
                        <p>Medicine Orders</p>
                    </div>
                    <div className="one-opt">
                        <img src="https://www.netmeds.com/msassets/images/icons/rewards.svg" alt=""/>
                        <p>My Rewards</p>
                    </div>
                </div>
            </div>
​
            <div className="second-row">
                <div className="btm-left">
                    <div className="sideMenu active">
                        <div className="logoDiv">
                            <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/account_information_blue.svg" alt=""/>
                        </div>
                        <a>Account Information</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/wallet_grey.svg" alt=""/>
                        </div>
                        <a>My Wallet</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/favorite.svg" alt=""/>
                        </div>    
                        <a>My WishList</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/offer_inactive.svg" alt=""/>
                        </div>    
                        <a>Offers</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/netmeds-elite_inactive.svg" alt=""/>
                        </div>
                        <a>Netmeds First</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/delivery_inactive.svg" alt=""/>
                        </div>
                        <a>Delivery Address</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/my-prescription_inactive.svg" alt=""/>
                        </div>
                        <a>My Prescription</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">   
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/subscription_grey.svg" alt=""/>
                        </div>
                        <a>My Subscription</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/refer_earn_grey.svg" alt=""/>
                        </div>
                        <a>Refer & Earn</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/support_inactive.svg" alt=""/>
                        </div>
                        <a>Help</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/document_inactive.svg" alt=""/>
                        </div>
                        <a>Legal Information</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/contact-us_grey.svg" alt=""/>
                        </div>
                        <a>Contact Us</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/document_inactive.svg" alt=""/>
                        </div>
                        <a>Rate Us</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                    <hr/>
                    <div className="sideMenu">
                        <div className="logoDiv">
                            <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/lock_grey.svg" alt=""/>
                        </div>
                        <a>Logout</a>
                        <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt=""/>
                    </div>
                </div>
​
                <div className="btm-right">
                    <div className="upper">
                        <div className="log-info">
                            <p className="box-head">LOGIN INFORMATION</p>
                            <div className="indSec">
                                <p className="ques">EMAIL</p>
                                <p className="data">asishkumar@gmail.com</p>
                                <hr/>
                            </div>
                            <div className="indSec">
                                <p className="ques">MOBILE NUMBER</p>
                                <p className="data">+91-7883229157</p>
                                <hr/>
                            </div>
                        </div>
                        <div className="personal-info">
                            <p className="box-head">PERSONAL INFORMATION</p>
                            <div className="indSec">
                                <p className="ques">FULL NAME</p>
                                <p className="data">Asish Kumar</p>
                                <hr/>
                            </div>
                            <div className="indSec">
                                <p className="ques">GENDER</p>
                                <p className="data">Male</p>
                                <hr/>
                            </div>
                        </div>
                    </div>    
                    <div className="mod-btn">
                        <button>Modify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}