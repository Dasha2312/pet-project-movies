import axios from "axios";

export async function getGenreMovies(catalogPage = 1) {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?page=${catalogPage}`, options);

    const genreMovie = response.data.genres;

    return genreMovie
  } catch (error) {
    console.log('Cant get genre movies', error)
    throw new Error(error)
  }
}