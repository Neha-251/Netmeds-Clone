import './App.css';
import ProductPage from './components/ProductPage/ProductPage';
import { Route, Routes } from 'react-router-dom';
import CovidRoutes from './components/ProductPage/covidRoutes';
import Diabeties from './components/ProductPage/diabetiesRoutes';

function App() {
  return (
    <div className="App">
      <ProductPage/>
      <Routes>
        <Route path="/covid" element={<CovidRoutes/>}></Route>
        <Route path="/diabeties" element={<Diabeties/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
