import { Box, Button, Container, Modal, Skeleton } from '@mui/material';
import style from './Subscription.module.scss'
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import SubscriptionTable from './subscriptionTable';
import { useForm } from 'react-hook-form';
import useTarifPlan from '../../hooks/TarifPlan/useTarifPlan';
import useUser from '../../hooks/Auth/useUser';
import {useCurrentTariffPlan} from '../../hooks/TarifPlan/useGetTariffPlan';
import useTariffPlans from '../../hooks/TarifPlan/useTariffPlans';

function Subscription() {
  const {currentUserData} = useUser();
  const userId = currentUserData?.id;
  console.log('userId ', userId)

  const {currentTariffPlan, currentTariffPlanIsPending} = useCurrentTariffPlan(userId);

  function normalizeTariff(tariff) {
    if (Array.isArray(tariff)) {
      return tariff[0] || null;
    }
    return tariff || null;
  }

  const {allTariffPlansPending, allTariffPlans} = useTariffPlans();

  const normalizedTariff = normalizeTariff(currentTariffPlan);

  const {tarifPlan} = useTarifPlan();

  const [typePlan, setTypePlans] = useState('monthly');
  const [showPayModal, setShowPayModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [daysLeft, setDaysLeft] = useState('');
  const {handleSubmit, reset} = useForm();


  function handlePlanType(type) {
    setTypePlans(type)
  }

  function openPayModal(selectPlan, method) {
    setSelectedPlan({...selectPlan, method})
    setShowPayModal(true)
  }

  function handleCloseModal() {
    setShowPayModal(false)
  }

  function onSubmit() {
    const userPlan = {
      tariffPlanTitle: selectedPlan.title,
      tariffPlanPrice: selectedPlan.price,
      tariffPlanType: selectedPlan.type,
      userId: currentUserData.id,
      tariffPlanId: selectedPlan.id,
      tariffPlanMethod: selectedPlan.method
    }

    tarifPlan(userPlan, {
      onSettled: () => {
        reset();
      },
      onSuccess: () => {
        setShowPayModal(false)
        reset()
      }
    })
  }
  
  useEffect(() => {
    if (normalizedTariff?.tariff_plan_type) {
      setTypePlans(normalizedTariff.tariff_plan_type);
    }
  }, [normalizedTariff]);

  const plansMonth = allTariffPlans?.filter(item => item.type == 'monthly');
  const plansYear = allTariffPlans?.filter(item => item.type == 'yearly');


  useEffect(() => {
    if (!normalizedTariff?.finish_at) return;

    const currentDate = new Date();
    const finishDate = new Date(normalizedTariff?.finish_at);
    const timeDifference = finishDate - currentDate;
    setDaysLeft(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
  }, [normalizedTariff?.finish_at])

  

  const tariffPlan = typePlan == 'monthly' ? plansMonth : plansYear;

  const isLoading = (userId && currentTariffPlanIsPending) || allTariffPlansPending;

  // if (allTariffPlansPending) {
  //   return <div>Loading...</div>
  // }

  return (
    <Box className={style.subscriptionPage}>
      <Box className={style.subscriptionPage__plans}>
        <Container>
          <Box className={style.subscriptionPage__header}>
            <Box className={style.subscriptionPage__headerLeft}>
              <Box
                component="h1"
                className={style.subscriptionPage__headerTitle}
              >
                Choose the plan that is right for you
              </Box>
              <Box className={style.subscriptionPage__headerSubtitle}>
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </Box>
            </Box>
            <Box className={style.subscriptionPage__headerRight}>
              <Box className={style.subscriptionPage__headerButtons}>
                {isLoading
                  ? 
                    <Skeleton variant="rectangular"  height={45} sx={{ borderRadius: '10px', bgcolor: '#1f1f1f', width: '100%'}}  />
                  :

                    <>
                      <button
                        type="button"
                        className={`${style.subscriptionPage__headerButton} ${
                          typePlan === "monthly" ? style.active : ""
                        }`}
                        onClick={() => handlePlanType("monthly")}
                      >
                        Monthly
                      </button>
                      <button
                        type="button"
                        className={`${style.subscriptionPage__headerButton} ${
                          typePlan === "yearly" ? style.active : ""
                        }`}
                        onClick={() => handlePlanType("yearly")}
                      >
                        Yearly
                      </button>
                    </>
                }
              </Box>
            </Box>
          </Box>

          {
            daysLeft > 0 &&
              <Box sx={{ mb: 5 }}>
                <h3>The subscription ends in {daysLeft > 1 ? `${daysLeft} days` : `${daysLeft} day` }. </h3>
              </Box>
          }

          <Box className={style.subscriptionPage__plansItems}>
            <Grid container spacing={3}>
              {tariffPlan?.map((plan) => (
                <Grid size={{ xl: 4, lg: 4, md: 12, xs: 12 }} key={plan.id}>
                  <Box className={style.subscriptionPage__plansItem}>
                    <Box className={style.subscriptionPage__plansItem__title}>
                      {plan.title}
                    </Box>
                    <Box
                      className={style.subscriptionPage__plansItem__subtitle}
                    >
                      {plan.description}
                    </Box>
                    <Box className={style.subscriptionPage__plansItem__price}>
                      $
                      {plan.price}
                      
                      <span>{plan.type == 'monthly' ? '/month' : '/year'}</span>
                    </Box>

                    <Box className={style.subscriptionPage__plansItem__buttons}>
                      {isLoading 
                        ? 
                          <Skeleton variant="rectangular"  height={48} sx={{ borderRadius: '8px', bgcolor: '#999', width: '100%'}}  />
                        :
                          normalizedTariff?.tariff_plan_id == plan.id &&
                          normalizedTariff?.tariff_plan_type == typePlan ? (
                            <>
                              <button
                                type="button"
                                className={`${style.subscriptionPage__plansItem__button} btnRed small`}
                              >
                                Active Plan
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                type="button"
                                className={`${style.subscriptionPage__plansItem__button} btnBlack small`}
                                onClick={() => openPayModal(plan, "freeTrial")}
                              >
                                Start Free Trial
                              </button>
                              <button
                                type="button"
                                className={`${style.subscriptionPage__plansItem__button} btnRed small`}
                                onClick={() => openPayModal(plan, "buy")}
                              >
                                Choose Plan
                              </button>
                            </>
                          )
                      }
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box className={style.subscriptionPage__compare}>
        <Container>
          <Box className={style.subscriptionPage__header}>
            <Box className={style.subscriptionPage__headerLeft}>
              <Box
                component="h1"
                className={style.subscriptionPage__headerTitle}
              >
                Compare our plans and find the right one for you
              </Box>
              <Box className={style.subscriptionPage__headerSubtitle}>
                StreamVibe offers three different plans to fit your needs:
                Basic, Standard, and Premium. Compare the features of each plan
                and choose the one that is right for you.
              </Box>
            </Box>
          </Box>

          <Box className={style.subscriptionPage__table}>
            <SubscriptionTable />
          </Box>
        </Container>
      </Box>

      <Modal
        open={showPayModal}
        onClose={handleCloseModal}
        sx={{
          ".MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
          },
        }}
      >
        <Box
          className="modal-block"
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box component="h2" sx={{ textAlign: "center", mb: "20px" }}>
            Payment
          </Box>
          <Box sx={{ mb: "20px", fontSize: "18px", fontWeight: "500" }}>
            <Box sx={{ fontWeight: "bold", display: "inline-block" }}>
              {selectedPlan.title}
            </Box>{" "}
            -{" "}
            {typePlan == "monthly"
              ? `$ ${selectedPlan.price}/month`
              : `$ ${selectedPlan.price}/year`}
          </Box>
          <Box sx={{ mt: "20px" }}>
            <Button fullWidth type="submit" className="btnRed">
              Buy
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default Subscription;