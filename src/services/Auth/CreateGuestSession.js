import axios from "axios";

export async function CreateGuestSession() {
  let myToken = import.meta.env.VITE_Access_Token_Auth;
 try {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${myToken}`
    }
  };

  const response = await axios.get('https://api.themoviedb.org/3/authentication/guest_session/new', options);

  const guestSessionId = response.data.guest_session_id;

  return guestSessionId
 } catch (error) {
  console.log('Cant get guest session id', error);
  throw new Error(error)
 }
}
