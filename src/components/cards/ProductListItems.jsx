import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const { price, category, subs, shipping, color, brand, quantity, sold } =
    product;
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Price</span>
          <span className="fw-bold">$ {price}</span>
        </li>
        {category && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Category</span>
            <Link
              to={`/category/${category.slug}`}
              className="text-decoration-none fw-bold"
            >
              {category.name}
            </Link>
          </li>
        )}
        {subs && (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>Sub Categories</span>
            {subs.map((s) => (
              <Link
                key={s._id}
                to={`/sub/${s.slug}`}
                className="text-decoration-none fw-bold"
              >
                {s.name}
              </Link>
            ))}
          </li>
        )}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Shipping</span>
          <span className="fw-bold">{shipping}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Color</span>
          <span className="fw-bold">{color}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Brand</span>
          <span className="fw-bold">{brand}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Available</span>
          <span className="fw-bold">{quantity}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>Sold</span>
          <span className="fw-bold">{sold}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductListItems;
