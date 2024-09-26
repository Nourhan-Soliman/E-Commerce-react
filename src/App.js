import About from "./Components/About";
import NavBar from "./Components/NavBar";
import ProductsList from "./Components/ProductsList";
import Slider from "./Components/Slider";
import ProductDetails from "./Components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Products from "./Components/Prouducts";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div>
            <Slider />
            <ProductsList />
          </div>
        } />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="footer" element={<Footer />} />
        <Route path="prouducts" element={<ProductsList />} />


      </Routes>
    </div>
  );
}

export default App;
