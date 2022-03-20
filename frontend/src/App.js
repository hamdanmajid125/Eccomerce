import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCategoryShop from "./pages/ProductCategoryShop";

export default function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Shop />} />
        <Route exact path="/products/categories/:slug"element={<ProductCategoryShop />} />
     
   
      </Routes>
      <Footer />
    </Router>
  );
} 