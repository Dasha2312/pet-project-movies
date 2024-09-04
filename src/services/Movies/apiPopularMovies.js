import axios from "axios";

async function apiPopularMovies() {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', options)

    const populatMoviesList = response.data;

    return populatMoviesList;
  } catch (error) {
    console.log('Can"t get populatMoviesList', error)
    throw new Error('Can"t get populatMoviesList')
  }
}

export default apiPopularMovies;