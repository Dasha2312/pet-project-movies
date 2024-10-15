import supabase from "../apiSupabase";

export async function apiDeleteWatchLater(movieId) {

  const { error } = await supabase
    .from('watch_later')
    .delete()
    .eq('movieId', movieId)

    if(error) throw new Error(error.message)
        
}

export  async function apiAddToWatch(newMovieLater) {

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
      console.log('delete movie from watch later')
      await apiDeleteWatchLater(newMovieLater.movieId)
      return { deleted: true };
      // throw new Error('This movie had been deleted to your Watch Later list.')
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


export async function getAllWatchLater() {

  let { data: all_watch_later, error } = await supabase
    .from('watch_later')
    .select('*')
        
  return all_watch_later
}

export async function removeWatchLater(movieId, currentUserId) {
  console.log('remove ',movieId, currentUserId)
  let { data: existingMovies, error: checkError } = await supabase
  .from('watch_later')
  .select('*')
  .eq('movieId', movieId)
  .eq('userId', currentUserId)

  if(checkError) {
    throw new Error(checkError.message)
  }

  return data
}