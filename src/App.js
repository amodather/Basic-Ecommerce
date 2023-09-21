import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import ProductList from './components/ProductList'
import About from './components/pages/About'
import ProductDetails from './components/ProductDetails'
import Contact from './components/pages/Contact';
import Cart from './components/pages/Cart';

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
        <Route path="Contact" element={<Contact />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
