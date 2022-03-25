import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import ProductItem from "../components/ProductItem";
import ProductSideBar from "../components/ProductSideBar";
export default function Shop(props) {
  let [products, productState] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  let getProducts = async () => {
    props.setProgress(20);
    let response = await fetch("http://127.0.0.1:8000/api/getpro/");
    props.setProgress(40);
    let data = await response.json();
    props.setProgress(60);
    productState(data);
    props.setProgress(80);
    console.log(data);
    props.setProgress(100);
  };
  return (
    <>
      <Banner title="Products" />
      <div className="container containerpadding">
        <div className="row">
          <div className="col-md-2">
            <ProductSideBar />
          </div>
          <div className="col-md-10">
            <div className="row">
              {products.map((products, index) => (
                <div className="col-md-3" key={index}>
                  <ProductItem
                    proid={products.id}
                    protitle={products.pro_title}
                    procat={products.pro_category}
                    proprice={products.pro_price}
                    proimg={products.pro_image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
