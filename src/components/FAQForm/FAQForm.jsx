import { Box, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Grid from '@mui/material/Grid2';

import style from "../SupportPage/SupportPage.module.scss"
import { Controller, useForm } from 'react-hook-form';

import toast from 'react-hot-toast';


function SupportForm() {

  const {handleSubmit, control, watch, reset} = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      subject: '',
      message: '',
      file: '',
      agreeCheck: false
    }
  })

  function supportOnSubmit(data) {
    console.log('support form 2: ', data);
    reset();
  
    toast.success('Thank you! \n\nYour request has been successfully submitted to our support team. \n\nWe will review your inquiry and get back to you as soon as possible. \n\nYou will receive a confirmation email shortly.')
  }
  const agreeCheck = watch('agreeCheck')

  return (
    <>
      <form onSubmit={handleSubmit(supportOnSubmit)}>
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
                      {error && <Box className={`${style.supportPage__formError} form-error`}>{error.message}</Box>}
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
                      {error && <Box className={`${style.supportPage__formError} form-error`}>{error.message}</Box>}
                    </>
                  )
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, xl:6, lg: 6 }}>
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
                      {error && <Box className={`${style.supportPage__formError} form-error`}>{error.message}</Box>}
                    </>
                  )
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12, xl:6, lg: 6 }}>
            <Box sx={{marginBottom: '20px', position: 'relative'}}>
              <Box className={style.supportPage__formLabel}>Subject</Box>
              <Controller
                name="subject"
                rules={{
                  required: 'This files is required',
                  validate: value => value !== "" || 'Enter your subject'
                }}
                control={control}
                render={({field, fieldState: {error}}) => {
                  const isPlaceholderSelected = field.value === "";
                  return (
                    <>
                      <Select
                        fullWidth
                        displayEmpty
                        className={isPlaceholderSelected ? 'select-placeholder' : ''}
                        sx={{
                          "&": {
                            color: "#fff"
                          },
                          "&.select-placeholder": {
                            color: "#999",
                            fontWeight: "400 !important",
                            fontSize: '14px !important'
                          },
                          "& fieldset": {
                            borderColor: "#262626",
                          },
                          "&:hover fieldset": {
                            borderColor: "#262626 !important",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#fff !important",
                            borderWidth: '1px !important'
                          },
                          "& .MuiSvgIcon-root": {
                            color: '#fff'
                          },
                          "& .MuiPaper-paper": {
                            background: "#141414 !important"
                          }
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              bgcolor: "#141414", // Цвет фона выпадающего списка
                              color: "#fff",
                              border: '1px solid #262626',
                              borderRadius: '8px',
                              "& .MuiMenuItem-root": {
                                backgroundColor: "#0f0f0f", // Фон элементов списка
                                "&:hover": {
                                  backgroundColor: "#1f1f1f", // Фон при наведении на элемент
                                },
                                "&.Mui-selected": {
                                  backgroundColor: "#1f1f1f", // Фон для выбранного элемента
                                },
                              }
                            }
                          }
                        }}
                        {...field}
                      >
                        <MenuItem value="" disabled>Enter your subject</MenuItem>
                        <MenuItem value="Technical Support">Technical Support</MenuItem>
                        <MenuItem value="Billing Inquiry">Billing Inquiry</MenuItem>
                        <MenuItem value="Subscription Issues">Subscription Issues</MenuItem>
                        <MenuItem value="Account Management">Account Management</MenuItem>
                        <MenuItem value="Content Availability">Content Availability</MenuItem>
                        <MenuItem value="Refund Request">Refund Request</MenuItem>
                        <MenuItem value="Feedback">Feedback</MenuItem>
                        <MenuItem value="Report a Bug">Report a Bug</MenuItem>
                        <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                        <MenuItem value="Cancellation Request">Cancellation Request</MenuItem>
                        <MenuItem value="Payment Failure">Payment Failure</MenuItem>
                        <MenuItem value="Promotions and Discounts">Promotions and Discounts</MenuItem>
                        <MenuItem value="Security Concern">Security Concern</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                      {error && <Box className={`${style.supportPage__formError} form-error`}>{error.message}</Box>}
                    </>
                  )
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{marginBottom: '20px', position: 'relative'}}>
          <Controller
            name="file"
            control={control}
            render={({field}) => {
              const selectedFiles = field.value ? Array.from(field.value) : [];
              function handleChangeInput(event) {
                const files = event.target.files;
                field.onChange(files);
              }
              return (
                <Box sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      background: "#e50000"
                    }}
                  >
                    Upload files
                    <input
                      className="form-file"
                      type="file"
                      multiple
                      onChange={handleChangeInput}
                      style={{ display: 'none' }}
                    />
                  </Button>

                  <Box sx={{margin: '5px'}}>
                    {selectedFiles.length > 0 &&
                      selectedFiles.map((file, index) => (
                        <div key={index}>{file.name}</div>
                      ))
                    }
                  </Box>
                </Box>
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
                  {error && <Box className={`${style.supportPage__formError} form-error`}>{error.message}</Box>}
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
                  {error && <Box className={`${style.supportPage__formError} form-error`} sx={{bottom: '-15px'}}>{error.message}</Box>}
                </>
              )
            }}
          />
        </Box>
        <Box className={style.supportPage__formBottom}>
          
          <Box className={style.supportPage__formSend}>
            <button type="submit" className={`${style.supportPage__formBtn} btnRed btn-medium`} disabled={agreeCheck ? false : true}>Send Message</button>
          </Box>
        </Box>
      </form>
    </>
  );
}

export default SupportForm;