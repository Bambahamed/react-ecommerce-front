import React, { useState } from "react";
import { Card, Tabs, Tooltip } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Laptop from "../../assets/laptop.jpg";
import ProductListItems from "./ProductListItems";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import { showAverage } from "../../functions/NewRating";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { addToWishlist } from "../../functions/user";
import { toast } from "react-toastify";

const { TabPane } = Tabs;

const SingleProduct = ({ product, star, onStarClick, related }) => {
  const { title, images, description } = product;
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const [tooltip, setTooltip] = useState("Click to add");
  const navigate = useNavigate("");

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
    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishlist(user.token, product._id).then((res) => {
      console.log("ADDED TO WISHLIST", res);
      toast.success("Added to wishlist");
      navigate("/user/wishlist");
    });
  };

  return (
    <div className="row">
      <div className="col-md-7">
        {images && images.length > 0 ? (
          <Carousel showArrows={true} autoPlay infiniteLoop>
            {images && images.map((i) => <img src={i.url} key={i.public_id} />)}
          </Carousel>
        ) : (
          <Card cover={<img src={Laptop} className="mb-3 card-image" />}></Card>
        )}
        <Tabs type="card">
          <TabPane tab="Description" key="1">
            {description && description}
          </TabPane>
          <TabPane tab="More" key="2">
            Cal use on XXXX XXX XXX to learn more about this product
          </TabPane>
        </Tabs>
      </div>
      <div className="col-md-5">
        <h1 className="bg-info">{title}</h1>
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
          actions={[
            <div
              className="text-decoration-none"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Tooltip title={tooltip}>
                <a onClick={handleAddToCart}>
                  <ShoppingCartOutlined className="text-danger" />
                  <br /> Add to Cart
                </a>
              </Tooltip>
            </div>,
            <a
              to={"/"}
              className="text-decoration-none"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={handleAddToWishlist}
            >
              <HeartOutlined className="text-info" /> Add to Wishlist
            </a>,

            <RatingModal>
              <StarRating
                name={product._id}
                numberOfStars={5}
                rating={star}
                changeRating={onStarClick}
                isSelectable={true}
                starRatedColor="red"
              />
            </RatingModal>,
          ]}
        >
          <ProductListItems product={product} />
        </Card>
      </div>
    </div>
  );
};

export default SingleProduct;
