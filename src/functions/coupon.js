import axios from "axios";
import { toast } from "react-toastify";

export const getCoupons = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/coupons`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeCoupon = async (couponId, authtoken) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SOME_API}/coupon/${couponId}`,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCoupon = async (coupon, authtoken) => {
  /*  console.log(coupon.name.length); */
  if (coupon.name.length < 6) {
    toast.warn("coupon name is too short");
    return;
  } else if (coupon.name.length > 12) {
    toast.warn("coupon name is too long");
    return;
  } else {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SOME_API}/coupon`,
        { coupon },
        {
          headers: {
            authtoken,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export const applyCoupon = async (authtoken, coupon) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/user/cart/coupon`,
      { coupon },
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
