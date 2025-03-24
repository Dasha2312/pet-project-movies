
import supabase from "../apiSupabase"

export async function singUpAPI({fullName, email, password}) {
  console.log('singUpAPI', fullName, email, password)
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      }
    }
  })

  if (error) throw new Error(error.message);

  return data;
}


export async function logIn({email, password}) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw new Error(error.message);
  console.log('login', data)
  // console.log('error', error.message)
  return data
}

export async function logOut() {

  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

}


export async function resetPassword({email}) {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) throw new Error(error.message);

  return data;

}


export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
} 

export async function apiUpdateUser({fullName, email, password}) {
  const { data: updateUserData, error } = await supabase.auth.updateUser({
    email,
    password,
    data: { fullName }
  })

  if (error) throw new Error(error.message);

  return updateUserData;
}