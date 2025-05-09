import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const categoryData = {
  women: ["Dress", "Skirt", "Blouse"],
  men: ["Shirt", "Trousers", "Jacket"],
};

function Category() {
  const { category } = useParams();
  const items = categoryData[category.toLowerCase()];

  if (!items) {
    return <h2>Category not found.</h2>;
  }

  return (
    <div>
      <h2>{category.toUpperCase()} Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Link to={`${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Category;
