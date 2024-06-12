import axios from "axios";

export const createPaymentIntent = async (authtoken, coupon) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/create-payment-intent`,
      { couponApplied: coupon },
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
