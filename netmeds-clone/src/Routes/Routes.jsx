import { ProductPage } from "../components/ProductPage/ProductPage";
import { Route, Routes } from 'react-router-dom';
import { Cart } from "../components/Cart/Cart";
import {OrderReview} from "../components/OrderReview/orderReview";
import { AddressDiv } from "../components/addressDiv/addressDiv";
import { Navbar, Navbar1, Nav_Menu } from "../components/Nav/Navbar";
import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails";
import CovidRoutes from "../components/ProductPage/covidRoutes";
import Diabeties from "../components/ProductPage/diabetiesRoutes";
import Login from "../components/Login/Login";
import { Footer } from "../components/Footer/Footer";
import Signup from "../components/Login/Signup";
import { Body } from "../components/Body Contents/body";
import ExistingUser from "../components/Login/existingUser";
import{Payment} from "../components/Payments/Payment"
import UserDetails from "../components/UserDetails/UserDetails";
import {Success} from "../components/Success/Success"
import { PaymentDiv } from "../components/paymentDiv/paymentDiv";

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Navbar1 />
            <Nav_Menu />
            <Routes>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/orderReview" element={<OrderReview/>}></Route>
                <Route path="/addressdiv" element={<AddressDiv/>}></Route>
                <Route path="/covid" element={<CovidRoutes />}></Route>
                <Route path="/diabeties" element={<Diabeties />}></Route>
                <Route path="/products/:id" element={<ProductDetails />}></Route>
                <Route path="/account/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/existing" element={<ExistingUser/>}></Route>
                <Route path="/payment" element={<Payment></Payment>}></Route>
                <Route path="/account/user-details" element={<UserDetails/>}></Route>
                <Route path="/success" element={<Success></Success>}></Route>
                <Route path="/paymentDiv" element={<PaymentDiv/>}></Route>
            </Routes>

        </>
    )
}
