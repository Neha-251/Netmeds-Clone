import { ProductPage } from "../components/ProductPage/ProductPage";
import { Route, Routes } from 'react-router-dom';
import { Cart } from "../components/Cart/Cart";
import { Navbar, Navbar1, Nav_Menu } from "../components/Nav/Navbar";
import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails";
import CovidRoutes from "../components/ProductPage/covidRoutes";
import Diabeties from "../components/ProductPage/diabetiesRoutes";
import Login from "../components/Login/Login";
import { Footer } from "../components/Footer/Footer";
import Signup from "../components/Login/Signup";
import { Body } from "../components/Body Contents/body";
import ExistingUser from "../components/Login/existingUser";

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Navbar1 />
            <Nav_Menu />
            <Routes>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/covid" element={<CovidRoutes />}></Route>
                <Route path="/diabeties" element={<Diabeties />}></Route>
                <Route path="/products/:id" element={<ProductDetails />}></Route>
                <Route path="/account/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/existing" element={<ExistingUser/>}></Route>
            </Routes>

        </>
    )
}
