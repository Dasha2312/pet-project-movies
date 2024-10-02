import supabase from "../apiSupabase";

export default async function apiAddToWatch(newMovieLater) {

  try {
    let { data: existingMovies, error: checkError } = await supabase
      .from('watch_later')
      .select('*')
      .eq('movieId', newMovieLater.movieId)
      .eq('userId', newMovieLater.userId)
    

    if(checkError) {
      throw new Error(checkError.message)
    }

    if(existingMovies && existingMovies.length > 0) {
      throw new Error('This movie has already been added to your Watch Later list.')
    }
    
    const { data, error } = await supabase
      .from('watch_later')
      .insert([{...newMovieLater}])
      .select()

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch(error) {
    console.error('Error in apiAddToWatch:', error.message);
    throw error;
  }

}
