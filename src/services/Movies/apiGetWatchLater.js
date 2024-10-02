
export default async function apiGetWatchLater() {
  
let { data: getWatchLater, error } = await supabase
  .from('watch_later')
  .select('*')
        
  if(error) throw new Error(error.message)

  return getWatchLater;
}

