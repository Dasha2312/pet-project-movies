import axios from "axios";

export async function apiTopSeries() {
  let myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    };

    const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated', options)

    const topSeriesList = response.data;

    return topSeriesList
  } catch (error) {
    console.log('Cant get topSeriesList', error)
    throw new Error('Cant get topSeriesList')
  }
}