import { ProductPage } from "../components/ProductPage/ProductPage";
import { Route, Routes } from 'react-router-dom';
import { Cart } from "../components/Cart/Cart";
import { Navbar, Navbar1, Nav_Menu } from "../components/Nav/Navbar";
import { ProductDetails } from "../components/ProductDetailsPage/ProductDetails";


export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Navbar1 />
            <Nav_Menu />
            <Routes>
                <Route path="/productdetails/:id" element={<ProductDetails />}> </Route>
                <Route path="/productpage" element={<ProductPage />}> </Route>
                <Route path="/cart" element={<Cart />}> </Route>

            </Routes>
            <ProductPage />

        </>
    )
}
