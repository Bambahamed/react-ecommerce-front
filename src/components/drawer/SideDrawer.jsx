import React from "react";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import laptop from "../../assets/laptop.jpg";

const SideDrawer = () => {
  const dispatch = useDispatch();
  const { drawer, cart } = useSelector((state) => ({ ...state }));

  const imagesStyle = {
    width: "100%",
    height: "50px",
    objectFit: "cover",
  };
  return (
    <div>
      <Drawer
        className="text-center"
        title={`Cart / ${cart.length} Product`}
        placement="right"
        closable={false}
        onClose={() => {
          dispatch({
            type: "SET_VISIBLE",
            payload: false,
          });
        }}
        open={drawer}
      >
        {cart.map((p) => (
          <div className="col">
            {p.images[0] ? (
              <>
                <img src={p.images[0].url} style={imagesStyle} />
                <p className="text-center bg-secondary text-light">
                  {p.title} x {p.count}
                </p>
              </>
            ) : (
              <>
                <img src={laptop} style={imagesStyle} />
                <p className="text-center bg-secondary text-light">
                  {p.title} x {p.count}
                </p>
              </>
            )}
          </div>
        ))}

        <Link to="/cart">
          <button
            onClick={() =>
              dispatch({
                type: "SET_VISIBLE",
                payload: false,
              })
            }
            className="text-center btn btn-primary btn-info text-white btn-block"
          >
            Go To Cart
          </button>
        </Link>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
