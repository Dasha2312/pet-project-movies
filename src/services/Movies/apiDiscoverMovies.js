import axios from "axios";

export async function getDiscoverMovies({ includeAdult = false, includeVideo = false, language = "en-US", catalogPage, sortBy = "popularity.desc", genreId }) {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      },
      params: {
        include_adult: includeAdult,
        include_video: includeVideo,
        language: language,
        page: catalogPage,
        sort_by: sortBy,
        with_genres: genreId 
      }
    }

    const responsee = await axios.get(`https://api.themoviedb.org/3/discover/movie`, options)
    
    const discoverMovie = responsee.data;

    return discoverMovie;
  } catch (error) {
    console.log('Cant get discover movie', error)
    throw new Error(error)
  }
}