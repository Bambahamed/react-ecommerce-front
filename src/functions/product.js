import axios from "axios";

export const createProduct = async (authtoken, product) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/product`,
      product,
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

export const getProductsByCount = async (count) =>
  await axios.get(`${import.meta.env.VITE_SOME_API}/products/${count}`);

export const removeProduct = async (authtoken, slug) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SOME_API}/product/${slug}`,

      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error deleted product:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const getProduct = async (slug) =>
  await axios.get(`${import.meta.env.VITE_SOME_API}/product/${slug}`);

export const updateProduct = async (authtoken, slug, product) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SOME_API}/product/${slug}`,
      product,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error deleted product:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const getProducts = async (sort, order, page) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/products`,
      { sort, order, page }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating product:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const getProductsCount = async () =>
  await axios.get(`${import.meta.env.VITE_SOME_API}/products/total`);

export const productStar = async (productId, star, authtoken) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SOME_API}/product/star/${productId}`,
      { star },
      // Assurez-vous d'envoyer un objet avec une clé "star"
      {
        headers: {
          authtoken, // Utilisez le bon format pour l'authentification
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error adding star:", error);
    throw error;
  }
};

export const getRelated = async (productId) =>
  await axios.get(
    `${import.meta.env.VITE_SOME_API}/products/related/${productId}`
  );

export const fetchProductsByFilter = async (arg) =>
  await axios.post(`${import.meta.env.VITE_SOME_API}/search/filters`, arg);
