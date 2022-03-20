import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import ProductSideBar from "../components/ProductSideBar";
import ProductItem from "../components/ProductItem";

export default function ProductCategoryShop() {
  let [products, productState] = useState([]);
  let { slug } = useParams();
  const url = window.location.pathname.split("/").pop();

  useEffect(() => {
    getProducts();
  }, [url]);

  let makeTitle = (title) => {
    title = title.replace("-", " ");
    var word = title.toLowerCase().split(" ");
    for (var i = 0; i < word.length; i++) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].substring(1);
    }
    return word.join(" ");
  };
  let getProducts = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/getcat/" + slug);
    let data = await response.json();
    productState(data);
  };

  return (
    <div>
      <Banner title={makeTitle(slug)} />
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
    </div>
  );
}
