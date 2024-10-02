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
      throw new Error('Этот фильм уже добавлен в ваш список Watch Later.')
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
    console.error('Ошибка в apiAddToWatch:', error.message);
    throw error;
  }

}
