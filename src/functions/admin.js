import axios from "axios";

export const getOrders = async (authtoken) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/admin/orders`,
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

export const changeStatus = async (orderId, orderStatus, authtoken) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SOME_API}/admin/order-status`,
      { orderId, orderStatus },
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
