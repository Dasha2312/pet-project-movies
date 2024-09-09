import axios from "axios";

export async function CreditsMovies(mediaId) {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}/credits`, options);

    const creditsMovie = response.data;

    return creditsMovie
  } catch (error) {
    console.log('Cant get creadit movies', error)
    throw new Error(error)
  }
}