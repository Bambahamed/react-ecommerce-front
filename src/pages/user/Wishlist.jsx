import React, { useState, useEffect } from "react";
import UserNav from "../../components/nav/UserNav";
import { getWishlist, removeWishlist } from "../../functions/user";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      loadWishlist();
    }
  }, [user]);

  const loadWishlist = () => {
    getWishlist(user.token).then((res) => {
      /* console.log(res); */
      setWishlist(res.wishlist);
    });
  };

  const handleRemove = (productId) => {
    removeWishlist(productId, user.token).then((res) => {
      loadWishlist();
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          <h4>Wishlist</h4>
          {wishlist.map((p) => (
            <div
              key={p._id}
              className="alert alert-secondary"
              style={{ display: "block" }}
            >
              <Link to={`/product/${p.slug}`} className="text-decoration-none">
                {p.title}
              </Link>
              <span
                onClick={() => handleRemove(p._id)}
                className="btn btn-sm"
                style={{ float: "right" }}
              >
                <DeleteOutlined className="text-danger" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
