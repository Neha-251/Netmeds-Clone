import { ProductPage } from "../components/ProductPage/ProductPage";
import { Route, Routes } from 'react-router-dom';
import { Cart } from "../components/Cart/Cart";
import { Navbar, Navbar1, Nav_Menu } from "../components/Nav/Navbar";
import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails";
import CovidRoutes from "../components/ProductPage/covidRoutes";
import Diabeties from "../components/ProductPage/diabetiesRoutes";
import Login from "../components/Login/Login";
import { Footer } from "../components/Footer/Footer";

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
            </Routes>

        </>
    )
}
