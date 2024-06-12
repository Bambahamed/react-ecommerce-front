import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <div>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link text-uppercase">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/product" className="nav-link text-uppercase">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/products" className="nav-link text-uppercase">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/category" className="nav-link text-uppercase">
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/sub" className="nav-link text-uppercase">
              Sub Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/coupon" className="nav-link text-uppercase">
              Coupon
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/password" className="nav-link text-uppercase">
              Password
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
