import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import laptop from "../../../src/assets/laptop.jpg";
import { showAverage } from "../../functions/NewRating";
import StarRating from "react-star-ratings";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { title, description, images, slug, price, quantity } = product;
  const [tooltip, setTooltip] = useState("Click to add");

  const { user, cart } = useSelector((state) => ({ ...state }));

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      //if cart is in localStorage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new product to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      localStorage.setItem("cart", JSON.stringify(unique));
      //show tooltip
      setTooltip("Added");

      // add to redux state
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });

      //show cart item on side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">
          <StarRating
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
          />
        </div>
      )}
      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: 150, objectFit: "cover" }}
            className="p-1"
          />
        }
        actions={[
          <Link to={`/product/${slug}`} className="text-decoration-none">
            <EyeOutlined className="text-warning " /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <button
              onClick={handleAddToCart}
              className="btn btn-link text-decoration-none"
              disabled={quantity < 1}
              style={{ cursor: quantity < 1 ? "not-allowed" : "pointer" }}
            >
              <ShoppingCartOutlined className="text-danger" />
              <br /> {quantity < 1 ? "Out of stock" : "Add to Cart"}
            </button>
          </Tooltip>,
        ]}
      >
        <Meta
          title={`${title} - $${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
