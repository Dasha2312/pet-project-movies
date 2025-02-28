import supabase from "../apiSupabase"

export async function getTariffPlan(userId) {
  let { data: userTariffPlan, error: userTariffPlanError } = await supabase
      .from('user_tariff_plan')
      .select('*')
      .eq('user_id', userId)
      

  if(userTariffPlanError) {
    throw new Error(userTariffPlanError.message)
  }

  return userTariffPlan
}

export async function getCurrentTariffPlan(userId) {
  const { data: currentTariff, error: currentTariffErrot } = await supabase
    .from("user_tariff_plan")
    .select("*")
    .eq('user_id', userId)
    .order("create_at", { ascending: false })
    .limit(1);

  if(currentTariffErrot) {
    throw new Error(currentTariffErrot.message)
  }

  return currentTariff
}