import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductSideBar() {
  let [categories, categoriesState] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  let getCategory = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/getcat/");
    let data = await response.json();
    categoriesState(data);
  };
  function hasSpace(value){
    return value.indexOf(' ') >= 0;
 }
  return (
    <div className="sidebar">
      <h6 className="sidebarh6">Product Categories</h6>

      <ul className="cat-ul">
        {categories.map((categories, index) => (
          <li key={index}><Link className="sidebaranchor" to={(hasSpace(categories.category_title.toLowerCase()))?( '/products/categories/'+categories.category_title.replace(/\s/g, '-').toLowerCase()):('/products/categories/'+categories.category_title.toLowerCase())}>{categories.category_title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
