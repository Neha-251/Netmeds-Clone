import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer.jsx';
import {AllRoutes} from "./Routes/Routes";
import {Body} from "./components/Body Contents/body"
// import {Carousel_Div} from "./components/Body Contents/body"

function App() {
  return (
    <div className="App">
      <AllRoutes/>
       <Body/>
      <Footer/>
    </div>
  );
}

export default App;
