import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import ProductList from './components/ProductList'
import About from './components/About'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={
          <>
          <Slider />
          <ProductList />
          </>
        } />
        <Route path="About" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
