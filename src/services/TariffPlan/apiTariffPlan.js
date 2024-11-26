import supabase from "../apiSupabase";

export async function apiChooseTariffPlan(userPlan) {

  try {
    let { data: existTariffPlan, error: existTariffPlanError } = await supabase
      .from('user_tariff_plan')
      .select('*')
      .eq('userId', userPlan.userId)

    if(existTariffPlanError) {
      throw new Error(existTariffPlanError.message)
    }

    if(existTariffPlan && existTariffPlan.length > 0) {
      //if tariff plan exist then update it
      const { data: updateTariffPlan, error: updateError } = await supabase.from('user_tariff_plan')
        .update({ 
          tariffPlanId: userPlan.tariffPlanId,
          tariffPlanTitle: userPlan.tariffPlanTitle,
          tariffPlanPrice: userPlan.tariffPlanPrice,
          tariffPlanType: userPlan.tariffPlanType,
        })
        .eq('userId', userPlan.userId)

      if (updateError) throw new Error(updateError.message);

      return updateTariffPlan
    } else {
      // if tariff plan NOT exist - create if
      const { data: createTariffPlan, error: createError } = await supabase.from('user_tariff_plan')
        .insert([
          { 
            tariffPlanId: userPlan.tariffPlanId, 
            userId: userPlan.userId,
            tariffPlanTitle: userPlan.tariffPlanTitle,
            tariffPlanPrice: userPlan.tariffPlanPrice,
            tariffPlanType: userPlan.tariffPlanType,

          },
        ])

      if (createError) throw new Error(createError.message);

      return createTariffPlan;
    }
  } catch(error) {
    console.log('apiChooseTariffPlan: ', error.message)
    throw error;
  }
}