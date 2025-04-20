import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Controller, useForm } from "react-hook-form";

import style from "../SupportPage/SupportPage.module.scss"
import toast from 'react-hot-toast';

function SupportForm() {
  
  const {handleSubmit, control, watch, reset} = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      email: '',
      message: '',
      agreeCheck: false
    }
  })

  const agreeCheck = watch('agreeCheck');

  function onSubmit(data) {
    console.log('data form 1: ', data);
    reset();
    toast.success('Thank you! \n\nYour request has been successfully submitted to our team')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 12, xl: 6, lg: 6 }}>
          <Box sx={{ marginBottom: "20px", position: "relative" }}>
            <Box className={style.supportPage__formLabel}>First Name</Box>
            <Controller
              name="firstName"
              rules={{
                required: "This files is required",
                validate: (value) =>
                  value.trim() !== "" || "Field cannot contain only spaces",
              }}
              control={control}
              render={({ field, fieldState: { error } }) => {
                return (
                  <>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      {...field}
                      className={style.supportPage__formInput}
                    />
                    {error && (
                      <Box
                        className={`${style.supportPage__formError} form-error`}
                      >
                        {error.message}
                      </Box>
                    )}
                  </>
                );
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, xl: 6, lg: 6 }}>
          <Box sx={{ marginBottom: "20px", position: "relative" }}>
            <Box className={style.supportPage__formLabel}>Second Name</Box>
            <Controller
              name="secondName"
              rules={{
                required: "This files is required",
                validate: (value) =>
                  value.trim() !== "" || "Field cannot contain only spaces",
              }}
              control={control}
              render={({ field, fieldState: { error } }) => {
                return (
                  <>
                    <input
                      type="text"
                      name="secondName"
                      placeholder="Enter Second Name"
                      {...field}
                    />
                    {error && (
                      <Box
                        className={`${style.supportPage__formError} form-error`}
                      >
                        {error.message}
                      </Box>
                    )}
                  </>
                );
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginBottom: "20px", position: "relative" }}>
        <Box className={style.supportPage__formLabel}>Email</Box>
        <Controller
          name="email"
          rules={{
            required: "This files is required",
            validate: {
              notEmpty: (value) =>
                value.trim() !== "" || "Field cannot contain only spaces",
              validEmail: (value) =>
                /\S+@\S+\.\S+/.test(value) ||
                "Please enter a valid email address",
            },
          }}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <input type="text" placeholder="Enter your Email" {...field} />
                {error && (
                  <Box className={`${style.supportPage__formError} form-error`}>
                    {error.message}
                  </Box>
                )}
              </>
            );
          }}
        />
      </Box>
      <Box sx={{ marginBottom: "20px", position: "relative" }}>
        <Box className={style.supportPage__formLabel}>Message</Box>
        <Controller
          name="message"
          rules={{
            required: "This files is required",
            validate: (value) =>
              value.trim() !== "" || "Field cannot contain only spaces",
          }}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <textarea
                  type="text"
                  placeholder="Enter your Message"
                  {...field}
                />
                {error && (
                  <Box className={`${style.supportPage__formError} form-error`}>
                    {error.message}
                  </Box>
                )}
              </>
            );
          }}
        />
      </Box>
      <Box
        className={style.supportPage__formAgree}
        sx={{ marginBottom: "20px", position: "relative" }}
      >
        <Controller
          name="agreeCheck"
          rules={{ required: "This files is required" }}
          control={control}
          render={({ field, fieldState: { error } }) => {
            const { onChange, value } = field;
            return (
              <>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": {
                            border: "1px solid #fff",
                            borderRadius: "4px",
                          },
                          "&.Mui-checked": {
                            color: "#fff",
                            ".MuiSvgIcon-root": {
                              border: "0",
                            },
                          },
                        }}
                        checked={value}
                        onChange={onChange}
                      />
                    }
                    label="I agree with Terms of Use and Privacy Policy"
                  />
                </FormGroup>
                {error && (
                  <Box
                    className={`${style.supportPage__formError} form-error`}
                    sx={{ bottom: "-15px" }}
                  >
                    {error.message}
                  </Box>
                )}
              </>
            );
          }}
        />
      </Box>
      <Box className={style.supportPage__formBottom}>
        <Box className={style.supportPage__formSend}>
          <button
            type="submit"
            className={`${style.supportPage__formBtn} btnRed btn-medium`}
            disabled={agreeCheck ? false : true}
          >
            Send Message
          </button>
        </Box>
      </Box>
    </form>
  );
}

export default SupportForm;
