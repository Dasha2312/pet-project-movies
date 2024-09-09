import axios from "axios";

export async function Translations(mediaId) {
  let myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    };

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}/translations`, options)

    const allTranslations = response.data;

    return allTranslations;
  } catch (error) {
    console.log("can't get all Translations", error);
    throw new Error(error)
  }
}