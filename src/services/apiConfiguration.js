import axios from "axios";


export async function getConfiguration() {
  let myToken = import.meta.env.VITE_Access_Token_Auth;
  try {
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    };

    const response = await axios.get('https://api.themoviedb.org/3/configuration', options);
    const configurationOptions = response.data

    const imageBackdropSizes = configurationOptions.images?.backdrop_sizes;
    const imagesBaseUrl = configurationOptions.images?.base_url;
    const imagePosterSizes = configurationOptions.images?.poster_sizes;
    const imageSecureBaseUrl = configurationOptions.images?.secure_base_url;

    return {configurationOptions, imageBackdropSizes, imagesBaseUrl, imagePosterSizes, imageSecureBaseUrl};
  } catch (error) {
    console.log('Error get all about Configuration', error)
    throw new Error('Error get all about Configuration')
  }
}