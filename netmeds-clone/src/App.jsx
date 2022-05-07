import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer.jsx';

import {AllRoutes} from "./Routes/Routes";

// import {Carousel_Div} from "./components/Body Contents/body"

function App() {
  return (
    <div className="App">
      
      <AllRoutes/>
      
      <Footer/>
    </div>
  );
}

export default App;
