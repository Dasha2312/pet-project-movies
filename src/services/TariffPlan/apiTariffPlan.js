import supabase from "../apiSupabase";

export async function apiChooseTariffPlan(userPlan) {

  try {
    const { data: createTariffPlan, error: createError } = await supabase.from('user_tariff_plan')
      .insert([
        { 
          tariffPlanId: userPlan.tariffPlanId, 
          userId: userPlan.userId,
          tariffPlanTitle: userPlan.tariffPlanTitle,
          tariffPlanPrice: userPlan.tariffPlanPrice,
          tariffPlanType: userPlan.tariffPlanType,
          tariffPlanMethod: userPlan.tariffPlanMethod
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