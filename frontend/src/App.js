import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCategoryShop from "./pages/ProductCategoryShop";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const [progress, setProgress] = useState(0);
  return (
    <Router>

      <Navbar />
      <LoadingBar
        color="#835a02fa"
        progress={progress}
        shadow={true}
        height={4}
        transitionTime = {500}
        loaderSpeed = {1000}
        onLoaderFinished={() => setProgress(100)}
      />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Shop setProgress={setProgress}/>} />
        <Route
          exact
          path="/products/categories/:slug"
          element={<ProductCategoryShop setProgress={setProgress}/>}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
