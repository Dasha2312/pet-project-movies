import axios from "axios";

export async function getMovieSearch({ searchQuery, include_adult=false, language="en-US", catalogPage = 1 }) {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      },
      params: {
        query: searchQuery,
        include_adult,
        language: language,
        page: catalogPage
      }
    }
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', options);

    const movieSearch = response.data;
    
    return movieSearch;
  } catch (error) {
    console.log('Cant get discover movie', error)
    throw new Error(error)
  }
}