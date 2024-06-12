import axios from "axios";

export const getCategories = async () =>
  await axios.get(`${import.meta.env.VITE_SOME_API}/categories`);

export const getCategory = async (slug) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/category/${slug}`
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error get category:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const removeCategory = async (slug, authtoken, userData) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SOME_API}/category/${slug}`,
      {
        userData,
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error deleted category:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const updateCategory = async (slug, authtoken, category, userData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SOME_API}/category/${slug}`,
      category,

      {
        userData,
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error updated category:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const createCategory = async (authtoken, category) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/category`,
      category,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating category:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const getCategorySubs = async (_id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/category/subs/${_id}`
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating category:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};
