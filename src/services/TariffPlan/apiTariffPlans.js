import supabase from "../apiSupabase";

export default async function apiTariffPlans() {

  let { data: tariff_plans, error } = await supabase
    .from('tariff_plans')
    .select('*')
      
  if(error) throw new Error(error.message);

  return tariff_plans;        
}