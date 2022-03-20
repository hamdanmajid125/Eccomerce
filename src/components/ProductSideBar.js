import React, { useEffect, useState } from "react";

export default function ProductSideBar() {
  let [categories, categoriesState] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  let getCategory = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/getcat/");
    let data = await response.json();
    categoriesState(data);
    console.log(data);
  };
  return (
    <div className="sidebar">
      <h6 className="sidebarh6">Product Categories</h6>

      <ul className="cat-ul">
        {categories.map((categories, index) => (
          <li key={index}>{categories.category_title}</li>
        ))}
      </ul>
    </div>
  );
}
