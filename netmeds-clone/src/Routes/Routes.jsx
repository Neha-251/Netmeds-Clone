import { ProductPage } from "../components/ProductPage/ProductPage";
import { Route, Routes } from 'react-router-dom';
import { Cart } from "../components/Cart/Cart";
import { Navbar, Navbar1, Nav_Menu } from "../components/Nav/Navbar";
import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails";
<<<<<<< HEAD
=======
import CovidRoutes from "../components/ProductPage/covidRoutes";
import Diabeties from "../components/ProductPage/diabetiesRoutes";
>>>>>>> 9070f0a012d08fabf47d048841d22c2e4d05e80a

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Navbar1 />
            <Nav_Menu />
<<<<<<< HEAD
           
            <Routes>
                <Route path="/productdetails" element={<ProductDetails />}> </Route>
                <Route path="/productpage" element={<ProductPage />}> </Route>
                <Route path="/cart" element={<Cart />}> </Route>
=======
>>>>>>> 9070f0a012d08fabf47d048841d22c2e4d05e80a



            <Routes>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/covid" element={<CovidRoutes />}></Route>
                <Route path="/diabeties" element={<Diabeties />}></Route>
                <Route path="/products/:id" element={<ProductDetails />}>
                </Route>
            </Routes>

        </>
    )
}
