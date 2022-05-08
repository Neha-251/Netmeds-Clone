
import { Navbar, Navbar1, Nav_Menu } from "../Nav/Navbar";

import * as React from "react";
import "./account.css"
import { useNavigate } from 'react-router-dom';


export const Account = () => {

    const [user, setUser] = React.useState([]);
    const [firstName, setFirstName] = React.useState("");
    const [firstNameLength, setFirstNameLength] = React.useState("");


    const navigate = useNavigate();
    const logout = () => {
        localStorage.setItem("users", null);
        navigate("/");
    }

    const getUser = () => {
        let UserDetail = JSON.parse(localStorage.getItem("users"));

        setUser(UserDetail);
        setFirstName(UserDetail.firstName);
        setFirstNameLength(UserDetail.firstName.length - 1)
        // user.firstName.length

    }

    console.log('user.firstName.length', firstName[firstNameLength])

    React.useEffect(() => {
        getUser();
    }, []);

    return (

        <>
            <Navbar />
            <Navbar1 />
            <Nav_Menu />

            <div className="account-container">
                <div className="headerr">
                    <h2>Your Account</h2>
                </div>

                <div className="first-row">
                    <div className="top-left">
                        <img src="https://www.netmeds.com/msassets/images/icons/profile-icon.svg" alt="" />
                        <div className="user-det">
                            <h2 className="accName">{user.firstName} {user.lastName}</h2>
                            <p className="accGmail">{user.email}</p>
                            <p className="accMob">+91- {user.number}</p>
                        </div>
                    </div>
                    <div className="top-right">
                        <div className="one-opt">
                            <img src="https://www.netmeds.com/msassets/images/icons/payment_history.svg" alt="" />
                            <p>Payment Methods</p>
                        </div>
                        <div className="one-opt">
                            <img src="https://www.netmeds.com/msassets/images/icons/medicine_orders.svg" alt="" />
                            <p>Medicine Orders</p>
                        </div>
                        <div className="one-opt">
                            <img src="https://www.netmeds.com/msassets/images/icons/rewards.svg" alt="" />
                            <p>My Rewards</p>
                        </div>
                    </div>
                </div>

                <div className="second-row">
                    <div className="btm-left">
                        <div className="sideMenu active">
                            <div className="logoDiv">
                                <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/account_information_blue.svg" alt="" />
                            </div>
                            <p>Account Information</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/wallet_grey.svg" alt="" />
                            </div>
                            <p>My Wallet</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/favorite.svg" alt="" />
                            </div>
                            <p>My WishList</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/offer_inactive.svg" alt="" />
                            </div>
                            <p>Offers</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/netmeds-elite_inactive.svg" alt="" />
                            </div>
                            <p>Netmeds First</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/delivery_inactive.svg" alt="" />
                            </div>
                            <p>Delivery Address</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/my-prescription_inactive.svg" alt="" />
                            </div>
                            <p>My Prescription</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/subscription_grey.svg" alt="" />
                            </div>
                            <p>My Subscription</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/refer_earn_grey.svg" alt="" />
                            </div>
                            <p>Refer & Earn</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/support_inactive.svg" alt="" />
                            </div>
                            <p>Help</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="	https://www.netmeds.com/msassets/images/icons/document_inactive.svg" alt="" />
                            </div>
                            <p>Legal Information</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/contact-us_grey.svg" alt="" />
                            </div>
                            <p>Contact Us</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/document_inactive.svg" alt="" />
                            </div>
                            <p>Rate Us</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                        <hr />
                        <div className="sideMenu">
                            <div className="logoDiv">
                                <img className="menuLogo" src="https://www.netmeds.com/msassets/images/icons/lock_grey.svg" alt="" />
                            </div>
                            <p style={{ cursor: "pointer" }} onClick={() => {
                                logout();
                            }}>Logout</p>
                            <img className="arr" src="https://www.netmeds.com/msassets/images/icons/keyboard_arrow_big_right.svg" alt="" />
                        </div>
                    </div>

                    <div className="btm-right">
                        <div className="upper">
                            <div className="log-info">
                                <p className="box-head">LOGIN INFORMATION</p>
                                <div className="indSec">
                                    <p className="ques">EMAIL</p>
                                    <p className="data">{user.email}</p>
                                    <hr />
                                </div>
                                <div className="indSec">
                                    <p className="ques">MOBILE NUMBER</p>
                                    <p className="data">+91-{user.number}</p>
                                    <hr />
                                </div>
                            </div>
                            <div className="personal-info">
                                <p className="box-head">PERSONAL INFORMATION</p>
                                <div className="indSec">
                                    <p className="ques">FULL NAME</p>
                                    <p className="data">{firstName} {user.lastName}</p>
                                    <hr />
                                </div>
                                <div className="indSec">
                                    <p className="ques">GENDER</p>
                                    <p className="data">
                                        {firstName[firstNameLength] === "a" || firstName[firstNameLength] === "i" ||
                                            firstName[firstNameLength] === "y" ? "Female" : "Male"}

                                    </p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="mod-btn">
                            <button>Modify</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}