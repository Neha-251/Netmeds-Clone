import {ProductPage} from "../components/ProductPage/ProductPage";
import { Route, Routes } from 'react-router-dom';
import {CovidRoutes} from '../components/ProductPage/covidRoutes';
import {Diabeties} from '../components/ProductPage/diabetiesRoutes';
import { Navbar } from "../components/Nav/Navbar.jsx";
import { Navbar1, Nav_Menu } from "../components/Nav/Navbar.jsx";


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
            </Routes>


        </>
    )


}