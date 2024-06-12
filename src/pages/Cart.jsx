import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductCardInCheckOut from "../components/cards/ProductCardInCheckOut";
import { userCart } from "../functions/user";

const Cart = () => {
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    console.log("cart", JSON.stringify(cart, null, 4));
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.ok) navigate("/checkout");
        console.log(cart);
      })
      .catch((err) => {
        console.log("cart save err", err);
      });
  };

  const saveCashOrderToDb = () => {
    /*   console.log("cart", JSON.stringify(cart, null, 4)); */
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.ok) navigate("/checkout");
        console.log(cart);
      })
      .catch((err) => {
        console.log("cart save err", err);
      });
  };

  const submitToConnect = () => {
    if (!user) {
      navigate("/login", { state: { from: "/cart" } });
    }
  };

  const showCartItems = () => {
    return (
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th scope="col">Image</th>
            <th scope="col" className="text-center">
              Title
            </th>
            <th scope="col" className="text-center">
              Price
            </th>
            <th scope="col" className="text-center">
              Brand
            </th>
            <th scope="col" className="text-center">
              Color
            </th>
            <th scope="col" className="text-center" style={{ width: "100px" }}>
              Count
            </th>
            <th scope="col" className="text-center">
              Shipping
            </th>
            <th scope="col" className="text-center">
              Remove
            </th>
          </tr>
        </thead>

        {cart.map((p) => (
          <ProductCardInCheckOut key={p._id} p={p} />
        ))}
      </table>
    );
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <h4>Cart / {cart.length} Product</h4>
      </div>
      <div className="row">
        <div className="col-md-8">
          {!cart.length ? (
            <p>
              No product in cart. <Link to={"/shop"}>Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>

        <div className="col-md-4">
          <h4>Order Summary</h4>
          <hr />
          <p>Products</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = ${c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total : <b>${getTotal()}</b>
          <hr />
          {user ? (
            <>
              <button
                onClick={saveOrderToDb}
                className="btn btn-sm btn-primary mt-2"
                disabled={!cart.length}
              >
                Proceed to Checkout
              </button>
              <br />
              <button
                onClick={saveCashOrderToDb}
                className="btn btn-sm btn-warning mt-2"
                disabled={!cart.length}
              >
                Pay Cash on Delivery
              </button>
            </>
          ) : (
            <button
              onClick={submitToConnect}
              className="btn btn-sm btn-primary mt-2"
            >
              Login to Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
