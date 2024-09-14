import axios from "axios";

export async function getMovieGenres() {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', options);

    const genresList = response.data.genres;

    return genresList
  } catch (error) {
    console.log('Cant get genres list', error)
    throw new Error(error)
  }
}