import axios from "axios";

export const getSubs = async () =>
  await axios.get(`${import.meta.env.VITE_SOME_API}/subs`);

export const getSub = async (slug) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SOME_API}/sub/${slug}`
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error get sub:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const removeSub = async (slug, authtoken, userData) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SOME_API}/sub/${slug}`,

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
    console.error("Error deleted sub:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const updateSub = async (slug, authtoken, sub, userData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SOME_API}/sub/${slug}`,
      sub,

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
    console.error("Error updated sub:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};

export const createSub = async (authtoken, sub) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/sub`,
      sub,
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérer les erreurs ici
    console.error("Error creating sub:", error);
    throw error; // Peut-être que vous voulez relancer l'erreur pour la gérer ailleurs
  }
};
