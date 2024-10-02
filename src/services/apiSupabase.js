import { createClient } from '@supabase/supabase-js'

const supabaseURL = "https://tvzpcfqmyauktqcjpaqk.supabase.co";
const supabaseKEY = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseURL, supabaseKEY)

export default supabase;