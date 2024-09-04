import axios from "axios";

export async function apiPopularSeries() {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get('https://api.themoviedb.org/3/tv/popular', options)

    const popularSeriesList = response.data;

    return popularSeriesList
    
  } catch (error) {
    console.log('Cant get popularSeriesList', error)
    throw new Error('Cant get popularSeriesList')
  }
}