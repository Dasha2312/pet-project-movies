import axios from "axios";

export async function CreateRequestToken() {
  try {
    let myToken = import.meta.env.VITE_Access_Token_Auth;
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`
      }
    };

    const response = await axios.get('https://api.themoviedb.org/3/authentication/token/new', options);

    const acceptToken = response.data.request_token

    console.log('response', acceptToken)

    return acceptToken
  } catch (error) {
    console.error('Error creating request token:', error);
    throw error;
  }
}