import './App.css';
import ProductPage from './components/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
import CovidRoutes from './components/ProductPage/covidRoutes';
import Diabeties from './components/ProductPage/diabetiesRoutes';
import { Navbar } from "./components/Nav/Navbar.jsx";
import { Navbar1, Nav_Menu } from "./components/Nav/Navbar.jsx";
// import {Carousel_Div} from "./components/Body Contents/body"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navbar1/>
      <Nav_Menu/>
      <ProductPage/>
      <Routes>
        <Route path="/covid" element={<CovidRoutes/>}></Route>
        <Route path="/diabeties" element={<Diabeties/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
