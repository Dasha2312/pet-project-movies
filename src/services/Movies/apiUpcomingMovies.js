import axios from "axios";

async function UpcomingMovies() {
  try {
    const myToken = import.meta.env.VITE_Access_Token_Auth;

    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }
    const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', options)

    const upcomingMoviesList = response.data;

    return upcomingMoviesList
  } catch (error) {
    console.error('Error get upcoming movies:', error);
    throw Error('Error get upcoming movies');
  }
}

export default UpcomingMovies;