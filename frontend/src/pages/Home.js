import React from "react";
import Images from "../components/images/imagejson";
import ProductItemHome from "../components/ProductItemHome";
import ProductCat from "../components/ProductCat";
import BlogCatalog from "../components/BlogCatalog";
import Carousel from "../components/Carousel";


export default function Home() {
  return (
    <>
      <Carousel/>
      <div className="container text-center containerpadding">
        <h3 className="mb-4">Trending Products</h3>
        <div className="row">
          <div className="col-md-3">
            <ProductItemHome />
          </div>
          <div className="col-md-3">
            <ProductItemHome />
          </div>
          <div className="col-md-3">
            <ProductItemHome />
          </div>
          <div className="col-md-3">
            <ProductItemHome />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={Images.home.sec1} alt="" />
          </div>
          <div className="col-md-6">
            <img src={Images.home.sec2} alt="" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-3">
            <ProductCat />
          </div>
          <div className="col-md-3">
            <ProductCat />
          </div>
          <div className="col-md-6">
            <img src={Images.home.sofa} alt="" />
          </div>
        </div>
      </div>
      <div className="container text-center containerpadding">
        <h3>From Our Blogs</h3>
        <p className="mb-5">
          Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
          primis eget
        </p>
        <div className="row">
          <div className="col-md-4">
            <BlogCatalog />
          </div>
          <div className="col-md-4">
            <BlogCatalog />
          </div>
          <div className="col-md-4">
            <BlogCatalog />
          </div>

        </div>
      </div>
     
    </>
  );
}
