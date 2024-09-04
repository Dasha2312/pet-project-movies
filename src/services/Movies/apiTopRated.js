import axios from "axios";

async function apiTopRated() {
  const myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    }

    const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', options)

    const topRatedList = response.data;

    return topRatedList
    
  } catch (error) {
    console.log('Problem to get topRatedList', error)
    throw new Error('Problem to get topRatedList')
  }
}

export default apiTopRated;