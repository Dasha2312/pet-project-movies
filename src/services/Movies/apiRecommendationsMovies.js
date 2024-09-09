import axios from "axios";

export async function RecommendationsMovies(mediaId) {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}/recommendations`, options)

    const recommendationsMovies = response.data;

    return recommendationsMovies;
  } catch (error) {
    console.log('cant get recommendationsMovies', error)
    throw new Error(error)
  }
}