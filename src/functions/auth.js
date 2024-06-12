import axios from "axios";

export const createOrUpdateUser = async (authtoken, userData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/create-or-update-user`,
      userData, // Laissez le deuxième paramètre null si vous n'envoyez pas de données dans le corps de la requête
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérez les erreurs ici
    console.error(
      "Une erreur s'est produite lors de la création ou de la mise à jour de l'utilisateur 1 :",
      error
    );
    throw error; // Vous pouvez rejeter l'erreur pour qu'elle soit gérée ailleurs si nécessaire
  }
};

export const currentUser = async (authtoken, userData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/current-user`,
      userData, // Laissez le deuxième paramètre null si vous n'envoyez pas de données dans le corps de la requête
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérez les erreurs ici
    console.error(
      "Une erreur s'est produite lors de la création ou de la mise à jour de l'utilisateur 2 :",
      error
    );
    throw error; // Vous pouvez rejeter l'erreur pour qu'elle soit gérée ailleurs si nécessaire
  }
};

export const currentAdmin = async (authtoken, userData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SOME_API}/current-user`,
      userData, // Laissez le deuxième paramètre null si vous n'envoyez pas de données dans le corps de la requête
      {
        headers: {
          authtoken,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Gérez les erreurs ici
    console.error(
      "Une erreur s'est produite lors de la création ou de la mise à jour de l'utilisateur 3 :",
      error
    );
    throw error; // Vous pouvez rejeter l'erreur pour qu'elle soit gérée ailleurs si nécessaire
  }
};
