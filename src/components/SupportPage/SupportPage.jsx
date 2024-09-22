import { Accordion, AccordionDetails, AccordionSummary, Alert, AlertTitle, Box, Button, Checkbox, Container, FormControlLabel, FormGroup, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';

import style from "./SupportPage.module.scss"
import { useEffect, useState } from "react";
import AccordionBlock from "../../UI/AccordionBlock/AccordionBlock";
import { Controller, useForm } from "react-hook-form";
import SupportForm from "../SupportForm/SupportForm";


const dataFAQ = [
  {
    id: 1, 
    title: 'What is StreamVibe?',
    body: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.'
  },
  {
    id: 2, 
    title: 'How much does StreamVibe cost?',
    body: 'Watch StreamVibe on your smartphone, tablet, Smart TV, laptop all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month (pre-tax). No extra costs, no contracts.'
  },
  {
    id: 3, 
    title: 'What content is available on StreamVibe?',
    body: "On StreamVibe, you can explore a wide variety of content including the latest movies, popular TV shows, documentaries, and exclusive original series. Whether you're into action, drama, comedy, or documentaries, StreamVibe offers something for everyone."
  },
  {
    id: 4, 
    title: 'How can I watch StreamVibe?',
    body: 'Watch anywhere, anytime. Watch StreamVibe on your smartphone, tablet, Smart TV, laptop.'
  },
  {
    id: 5, 
    title: 'How do I sign up for StreamVibe?',
    body: 'To sign up for StreamVibe, simply visit our website and click the "Sign Up" button. You’ll be guided through creating an account by entering your email, setting a password, and choosing a subscription plan. Once completed, you can start streaming your favorite content instantly!'
  },
  {
    id: 6, 
    title: 'What is the StreamVibe free trial?',
    body: "he StreamVibe free trial allows you to explore our service for six months at no cost. During this period, you'll have full access to all our features, so you can experience everything StreamVibe has to offer without any commitment. After the trial ends, you can choose to continue with a subscription or cancel if it’s not the right fit for you."
  },
  {
    id: 7, 
    title: 'How do I contact StreamVibe customer support?',
    body: "To contact StreamVibe customer support, please use the form located at the top of our website. Simply fill it out with your details and inquiry, and our support team will get in touch with you as soon as possible."
  },
  {
    id: 8, 
    title: 'What are the StreamVibe payment methods?',
    body: "We accept major credit and debit cards, as well as payments via PayPal. For additional payment options, please check the payment section during the checkout process."
  }
];

function SupportPage() {
  const [expanded, setExpanded] = useState('');
  const [showAsk, setShowAsk] = useState(false);
  const [isSuccessfullySubmittedSupport, setIsSuccessfullySubmittedSupport] = useState(false);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const {handleSubmit, control, watch, formState, reset} = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      message: '',
      file: '',
      agreeCheck: false
    }
  })

  const {handleSubmit: handleSubmitSupport, control: controlSupport, watch: watchSupport, formState: formStateSupport, reset: resetSupport} = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      subject: '',
      message: '',
      agreeCheck: false
    }
  })

  function handleChange(panel) {
    return function(event, newExpanded) {
      setExpanded(newExpanded ? panel : false);
    };
  }

  useEffect(() => {
    let timer;

    if (formState.isSubmitted) {
      setIsSuccessfullySubmitted(true); 
    }

    if (formStateSupport.isSubmitted) {
      setIsSuccessfullySubmittedSupport(true);
    }
  
    return () => clearTimeout(timer);
  }, [formState.isSubmitted, formStateSupport.isSubmitted]);

  function onSubmit(data) {
    console.log('data form 1: ', data);
    reset();
    setTimeout(() => {
      setIsSuccessfullySubmitted(false);
    }, 3500);
  }

  function supportOnSubmit(data) {
    console.log('support form 2: ', data);
    resetSupport();
  
    setTimeout(() => {
      setIsSuccessfullySubmittedSupport(false);
    }, 3500);
  }

  function showSupportForm() {
    setShowAsk(prev => !prev)
  }

  const agreeCheck = watch('agreeCheck')
  console.log('isSuccessfullySubmitted', isSuccessfullySubmitted)

  return (
    <Box className={style.supportPage}>
      <Container>
        <Box className={style.supportPage__top}>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, sm: 12, md: 4, xl:5, lg: 5 }}>
              <Box>
                <Box className={style.supportPage__topHeader}>
                  <Box component="h1" className={style.supportPage__title}>Welcome to our support page!</Box>
                  <Box className={style.supportPage__subtitle}>We're here to help you with any problems you may be having with our product.</Box>
                </Box>
                <Box className={style.supportPage__img}>
                  <img src="/img/support-img.png" />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4, xl:7, lg: 7 }}>
              <Box className={style.supportPage__form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 12, md: 12, xl:6, lg: 6 }}>
                      <Box sx={{marginBottom: '20px', position: 'relative'}}>
                        <Box className={style.supportPage__formLabel}>First Name</Box>
                        <Controller
                          name="firstName"
                          rules={{
                            required: 'This files is required',
                            validate: value => value.trim() !== '' || 'Field cannot contain only spaces'
                          }}
                          control={control}
                          render={({field, fieldState: {error}}) => {
                            return (
                              <>
                                <input type="text" name="firstName" placeholder="Enter First Name" {...field} className={style.supportPage__formInput} />
                                {error && <Box className={`${style.supportPage__formError} form-rrror`}>{error.message}</Box>}
                              </>
                            )
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 12, md: 12, xl:6, lg: 6 }}>
                      <Box sx={{marginBottom: '20px', position: 'relative'}}>
                        <Box className={style.supportPage__formLabel}>Second Name</Box>
                        <Controller
                          name="secondName"
                          rules={{
                            required: 'This files is required',
                            validate: value => value.trim() !== '' || 'Field cannot contain only spaces'
                          }}
                          control={control}
                          render={({field, fieldState: {error}}) => {
                            return (
                              <>
                                <input type="text" name="secondName" placeholder="Enter Second Name" {...field} />
                                {error && <Box className={`${style.supportPage__formError} form-rrror`}>{error.message}</Box>}
                              </>
                            )
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{marginBottom: '20px', position: 'relative'}}>
                    <Box className={style.supportPage__formLabel}>Email</Box>
                    <Controller
                      name="email"
                      rules={{
                        required: 'This files is required',
                        validate: {
                          notEmpty: value => value.trim() !== '' || 'Field cannot contain only spaces',
                          validEmail: value => /\S+@\S+\.\S+/.test(value) || 'Please enter a valid email address'
                        }
                      }}
                      control={control}
                      render={({field, fieldState: {error}}) => {
                        return (
                          <>
                            <input type="text" placeholder="Enter your Email" {...field} />
                            {error && <Box className={`${style.supportPage__formError} form-rrror`}>{error.message}</Box>}
                          </>
                        )
                      }}
                    />
                  </Box>
                  <Box sx={{marginBottom: '20px', position: 'relative'}}>
                    <Box className={style.supportPage__formLabel}>Message</Box>
                    <Controller
                      name="message"
                      rules={{
                        required: 'This files is required',
                        validate: value => value.trim() !== '' || 'Field cannot contain only spaces'
                      }}
                      control={control}
                      render={({field, fieldState: {error}}) => {
                        return (
                          <>
                            <textarea type="text" placeholder="Enter your Message" {...field} />
                            {error && <Box className={`${style.supportPage__formError} form-rrror`}>{error.message}</Box>}
                          </>
                        )
                      }}
                    />
                  </Box>
                  <Box className={style.supportPage__formAgree} sx={{marginBottom: '20px', position: 'relative'}}>
                    <Controller
                      name="agreeCheck"
                      rules={{required: 'This files is required'}}
                      control={control}
                      render={({field, fieldState: {error}}) => {
                        const { onChange, value } = field
                        return (
                          <>
                            <FormGroup>
                              <FormControlLabel control={<Checkbox sx={{
                                '& .MuiSvgIcon-root': {
                                  border: '1px solid #fff',
                                  borderRadius: '4px',
                                },
                                '&.Mui-checked': {
                                  color: "#fff",
                                  '.MuiSvgIcon-root': {
                                    border: '0',
                                  },
                                },
                              }} checked={value} onChange={onChange} />} 
                              label="I agree with Terms of Use and Privacy Policy" 
                              />
                            </FormGroup>
                            {error && <Box className={`${style.supportPage__formError} form-rrror`} sx={{bottom: '-15px'}}>{error.message}</Box>}
                          </>
                        )
                      }}
                    />
                  </Box>
                  <Box className={style.supportPage__formBottom}>
                    
                    <Box className={style.supportPage__formSend}>
                      <button type="submit" className={`${style.supportPage__formBtn} btnRed`} disabled={agreeCheck ? false : true}>Send Message</button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>

          {isSuccessfullySubmitted && <Alert severity="success" sx={{marginTop: '20px'}}>
              <AlertTitle>Thank you!</AlertTitle>
              Your request has been successfully submitted to our team.
          </Alert>
          }
        </Box>

        <Box className={style.supportPage__ask}>
          <Box className={style.supportPage__askInner}>
            <Box className={style.supportPage__askLeft}>
              <Box component="h5" className={style.supportPage__askTitle}>Frequently Asked Questions</Box>
              <Box className={style.supportPage__askSubtitle}>
                Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
              </Box>
            </Box>
            <Box className={style.supportPage__askRight}>
              <button className="btnRed small" onClick={showSupportForm}>Ask a Question</button>
            </Box>
          </Box>
        </Box>

        {showAsk && <SupportForm handleSubmitSupport={handleSubmitSupport} supportOnSubmit={supportOnSubmit} controlSupport={controlSupport} Controller={Controller} watchSupport={watchSupport} isSuccessfullySubmittedSupport={isSuccessfullySubmittedSupport} />}

        <Box className={style.supportPage__faq}>
          <Grid container spacing={2}>
            {
              dataFAQ.map(faq => (
                <Grid size={{ xs: 12, sm: 12, md: 12, xl: 6, lg: 6 }} key={faq.id}>
                  <AccordionBlock key={faq.id} faq={faq} expanded={expanded} handleChange={handleChange}/>
                </Grid>
              ))
            }
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

export default SupportPage;