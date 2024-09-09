import axios from "axios";

export async function SimilarMovies(mediaId) {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}/similar`, options)

    const similarMovies = response.data;

    return similarMovies;
  } catch (error) {
    console.log('Cant get similarMovies', error);
    throw new Error(error)
  }
}