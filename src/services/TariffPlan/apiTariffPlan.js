import supabase from "../apiSupabase";

export async function apiChooseTariffPlan(userPlan) {
  console.log('userPlan', userPlan)

  try {
    const { data: createTariffPlan, error: createError } = await supabase.from('user_tariff_plan')
      .insert([
        { 
          user_id: userPlan.userId,
          tariff_plan_id: userPlan.tariffPlanId, 
          tariff_plan_title: userPlan.tariffPlanTitle,
          tariff_plan_price: userPlan.tariffPlanPrice,
          tariff_plan_type: userPlan.tariffPlanType,
          tariff_plan_method: userPlan.tariffPlanMethod
        },
      ])
      .select('*')

    if (createError) throw new Error(createError.message);

    return createTariffPlan;
  } catch(error) {
    console.log('apiChooseTariffPlan: ', error.message)
    throw error;
  }
}