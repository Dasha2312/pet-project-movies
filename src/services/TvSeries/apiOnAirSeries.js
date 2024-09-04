import axios from "axios";

export async function apiOnAirSeries() {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {

    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air', options)

    const onAirSeriesList = response.data;

    return onAirSeriesList
  } catch (error) {
    console.log('Cant get newReleasedSeriesList', error)

    throw new Error('Cant get newReleasedSeriesList')
  }
}