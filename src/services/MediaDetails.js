import axios from "axios";

export async function mediaDetails(mediaId) {
  let myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    };

    const response = await axios.get(`https://api.themoviedb.org/3/movie/${mediaId}`, options)

    const mediaInfo = response.data;

    return mediaInfo;
  } catch (error) {
    console.log('Error get media details', error)
    throw new Error('Error get media details')
  }
}