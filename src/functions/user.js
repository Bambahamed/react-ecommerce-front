import axios from "axios";

export const userCart = async (cart, authtoken) => {
  try {
    console.log(cart);
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/user/cart`,
      { cart },
      {
        headers: {
          authtoken,
        },
      }
    );

    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating product:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const getUserCart = async (authtoken) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/user/cart`,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating product:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const emptyUserCart = async (authtoken) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SOME_API}/user/cart`,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating product:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const saveUserAddress = async (authtoken, address) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/user/address`,
      { address },
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating product:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const createOrder = async (stripeResponse, authtoken) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/user/order`,
      { stripeResponse },
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

export const getUserOrders = async (authtoken) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/user/orders`,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching orders", error);
    throw error;
  }
};

export const getWishlist = async (authtoken) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/user/wishlist`,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting wishlist", error);
    throw error;
  }
};

export const removeWishlist = async (productId, authtoken) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SOME_API}/user/wishlist/${productId}`,
      { productId },
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting wishlist", error);
    throw error;
  }
};

export const addToWishlist = async (authtoken, productId) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/user/wishlist`,
      { productId },
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error getting wishlist", error);
    throw error;
  }
};

export const createCashOrderForUser = async (authtoken, COD, coupon) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/user/cash-order`,
      { COD, couponApplied: coupon },
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
