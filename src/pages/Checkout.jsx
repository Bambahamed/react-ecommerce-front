import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserCart,
  emptyUserCart,
  saveUserAddress,
  createCashOrderForUser,
} from "../functions/user";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { applyCoupon } from "../functions/coupon";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const { user, COD, coupon } = useSelector((state) => ({ ...state }));
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [coupons, setCoupons] = useState("");
  const navigate = useNavigate();
  //discount price

  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  useEffect(() => {
    getUserCart(user.token).then((res) => {
      console.log("user cart res", JSON.stringify(res, null, 4));
      setProducts(res.products);
      setTotal(res.cartTotal);
    });
  }, []);

  const saveAddressToDb = (e) => {
    /* console.log(address); */
    saveUserAddress(user.token, address).then((res) => {
      if (res.ok) {
        setAddressSaved(true);
        console.log(address);
        toast.success("Address saved");
      }
    });
  };

  const emptyCart = () => {
    // remove from local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove  from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    emptyUserCart(user.token).then((res) => {
      console.log("Res", res);
      setProducts([]);
      setTotal(0);
      setTotalAfterDiscount(0);
      setCoupons("");
      toast.success("Cart is empty . Continue shopping");
    });
  };

  const applyDiscountCoupon = () => {
    console.log("send coupons to backend", coupons);
    applyCoupon(user.token, coupons).then((res) => {
      console.log("RES ON COUPON APPLIED", res);
      if (res) {
        setTotalAfterDiscount(res);
        // update redux coupons applied
        dispatch({
          type: "COUPON_APPLIED",
          payload: true,
        });
      }

      //error
      if (res.err) {
        setDiscountError(res.err);

        //update redux coupons applied
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      }
    });
  };

  const showAddress = () => (
    <>
      <ReactQuill theme="snow" value={address} onChange={setAddress} />
      <button className="btn btn-primary mt-2" onClick={saveAddressToDb}>
        Save
      </button>
    </>
  );

  const showProductSummary = () => (
    <>
      {products.map((p, i) => (
        <div key={i}>
          <p>
            {p.product.title} ({p.color}) x {p.count} =
            {p.product.price * p.count}
          </p>
        </div>
      ))}
    </>
  );

  const showApplyCoupon = (e) => (
    <>
      <input
        onChange={(e) => {
          setCoupons(e.target.value);
          setDiscountError("");
        }}
        value={coupons}
        className="form-control"
        type="text"
      />
      <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
        Apply
      </button>
    </>
  );

  const createCashOrder = () => {
    createCashOrderForUser(user.token, COD, coupon).then((res) => {
      console.log("USER CASH ORDER CREATED RES", res);
      // empty cart form redux, local Storage, reset coupons, reset COD, redirect
      if (res.ok) {
        if (typeof window !== "undefined") localStorage.removeItem("cart");

        //empty cart from redux
        dispatch({
          type: "ADD_TO_CART",
          payload: [],
        });
        // reset coupons to false
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
        //empty redux COD
        dispatch({
          type: "COD",
          payload: false,
        });

        //empty cart from database
        emptyUserCart(user.token);
        setTimeout(() => {
          navigate("/user/history");
        }, 3000);
      }
    });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h4>Delivery Address</h4>
        <br />
        <br />
        {showAddress()}
        <hr />
        <h4>Got Coupon?</h4>
        <br />
        {showApplyCoupon()}
        <br />
        {discountError && <p className="bg-danger p-2">{discountError}</p>}
      </div>

      <div className="col-md-6">
        <h4>Order Summary</h4>
        <p>Products {products.length}</p>
        <hr />
        {showProductSummary()}
        <hr />
        <p>Cart Total: {total}</p>
        {totalAfterDiscount > 0 && (
          <p className="bg-success p-2">
            Discount Applied: Total Payable: ${totalAfterDiscount}
          </p>
        )}
        <div className="row">
          <div className="col-md-6">
            {COD ? (
              <button
                disabled={!addressSaved || !products.length}
                onClick={createCashOrder}
                className="btn btn-primary"
              >
                Place Order
              </button>
            ) : (
              <button
                disabled={!addressSaved || !products.length}
                onClick={() => navigate("/payment")}
                className="btn btn-primary"
              >
                Place Order
              </button>
            )}
          </div>
          <div className="col-md-6">
            <button
              disabled={!products.length}
              onClick={emptyCart}
              className="btn btn-primary"
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
