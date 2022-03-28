import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CategoryNavItems() {
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
    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      {categories.map((categories, index) => (
        <li  key={index}>
          <div className="row" key={index}>
            <div className="thumbnails" key={index}>
              <img src={categories.catimage} />
            </div>
            <div className="links" >
              <Link key={categories.id} className="dropdown-item" to={(hasSpace(categories.category_title.toLowerCase()))?( '/products/categories/'+categories.category_title.replace(/\s/g, '-').toLowerCase()):('/products/categories/'+categories.category_title.toLowerCase())} >
                {categories.category_title}
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
