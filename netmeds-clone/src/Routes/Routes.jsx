import {ProductPage} from "../components/ProductPage/ProductPage";
import { Route, Routes } from 'react-router-dom';
import {CovidRoutes} from '../components/ProductPage/covidRoutes';
import {Diabeties} from '../components/ProductPage/diabetiesRoutes';
import { Navbar } from "../components/Nav/Navbar.jsx";
import { Navbar1, Nav_Menu } from "../components/Nav/Navbar.jsx";
import {Cart} from "../components/Cart/Cart";


export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Navbar1 />
            <Nav_Menu />
            <ProductPage/>
            <Routes>
                <Route path="/covid" element={<CovidRoutes />}></Route>
                <Route path="/diabeties" element={<Diabeties />}></Route>
<<<<<<< HEAD
                <Route path="/cart" element={ <Cart/> }></Route>
=======
                <Route path="/products/:id" element={<ProductDetails/>}></Route>
>>>>>>> af78969bb2288b888da75b1db1d33c432bd77f30
            </Routes>
        </>
    )


}