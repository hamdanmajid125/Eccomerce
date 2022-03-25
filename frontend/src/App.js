import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCategoryShop from "./pages/ProductCategoryShop";
import LoadingBar from "react-top-loading-bar";
import Cart from "./components/Cart";



export default function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Router>
      <Navbar />
      {/* <Cart/> */}
      <LoadingBar
        className="shadow-lg"
        color="#835a02fa"
        progress={progress}
        shadow={false}
        height={4}
        style={{ top: "85px", position: "absolute", zIndex: 2 }}
        transitionTime={500}
        loaderSpeed={1000}
        onLoaderFinished={() => setProgress(100)}
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart show={true}/>} />

        <Route
          exact
          path="/products"
          element={<Shop setProgress={setProgress} />}
        />
        <Route
          exact
          path="/products/categories/:slug"
          element={<ProductCategoryShop setProgress={setProgress} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
