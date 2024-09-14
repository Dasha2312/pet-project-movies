import axios from "axios";

export async function ReviewsMovie(mediaId, reviewPage = 1) {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}/reviews?page=${reviewPage}`, options)

    const reviewsMovie = response.data;

    return reviewsMovie
  } catch (error) {
    console.log('cant get reviewsMovie', error)
    throw new Error(error)
  }
}