import { Box, Container } from '@mui/material';
import style from './Subscription.module.scss'
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import SubscriptionTable from './subscriptionTable';

function Subscription() {

  const plans = [
    {
      id: 1,
      title: 'Basic Plan',
      body: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
      priceMonth: '9.99',
      priceYear: '119.88'
    },
    {
      id: 2,
      title: 'Standard Plan',
      body: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
      priceMonth: '12.99',
      priceYear: '155.88'
    },
    {
      id: 3,
      title: 'Premium Plan',
      body: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
      priceMonth: '14.99',
      priceYear: '179.88'
    }
  ]

  const [typePlan, setTypePlans] = useState('monthly');

  function handlePlanType(type) {
    setTypePlans(type)
  }

  return (
    <Box className={style.subscriptionPage}>
      <Box className={style.subscriptionPage__plans}>
        <Container>
          <Box className={style.subscriptionPage__header}>
            <Box className={style.subscriptionPage__headerLeft}>
              <Box component="h1" className={style.subscriptionPage__headerTitle}>Choose the plan that's right for you</Box>
              <Box className={style.subscriptionPage__headerSubtitle}>
                Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
              </Box>
            </Box>
            <Box className={style.subscriptionPage__headerRight}>
              <Box className={style.subscriptionPage__headerButtons}>
                <button type='button' className={`${style.subscriptionPage__headerButton} ${typePlan === 'monthly' ? style.active : ''}`} onClick={() => handlePlanType('monthly')}>Monthly</button>
                <button type='button' className={`${style.subscriptionPage__headerButton} ${typePlan === 'yearly' ? style.active : ''}`} onClick={() => handlePlanType('yearly')}>Yearly</button>
              </Box>
            </Box>
          </Box>

          <Box className={style.subscriptionPage__plansItems}>
            <Grid container spacing={3}>
              {plans.map(plan => (
                <Grid size={{xl: 4, lg: 4, md: 12, xs: 12}} key={plan.id}>
                  <Box className={style.subscriptionPage__plansItem}>
                    <Box className={style.subscriptionPage__plansItem__title}>{plan.title}</Box>
                    <Box className={style.subscriptionPage__plansItem__subtitle}>
                      {plan.body}
                    </Box>
                    <Box className={style.subscriptionPage__plansItem__price}>
                      ${typePlan === 'monthly' ? plan.priceMonth : plan.priceYear}
                      <span>/month</span>
                    </Box>
                    <Box className={style.subscriptionPage__plansItem__buttons}>
                      <button type='button' className={`${style.subscriptionPage__plansItem__button} btnBlack small`}>Start Free Trial</button>
                      <button type='button' className={`${style.subscriptionPage__plansItem__button} btnRed small`}>Choose Plan</button>
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
              <Box component="h1" className={style.subscriptionPage__headerTitle}>Compare our plans and find the right one for you</Box>
              <Box className={style.subscriptionPage__headerSubtitle}>
                StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
              </Box>
            </Box>
          </Box>

          <Box className={style.subscriptionPage__table}>
            <SubscriptionTable />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Subscription;