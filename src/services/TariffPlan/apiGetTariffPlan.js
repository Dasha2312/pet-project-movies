import supabase from "../apiSupabase"

export async function getTariffPlan(userId) {
  console.log('userId', userId)
  let { data: userTariffPlan, error: userTariffPlanError } = await supabase
      .from('user_tariff_plan')
      .select('*')
      .eq('userId', userId)
      

  if(userTariffPlanError) {
    throw new Error(userTariffPlanError.message)
  }


  console.log('userTariffPlan', userTariffPlan)

  return userTariffPlan
}