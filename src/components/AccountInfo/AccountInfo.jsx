import { Box, Container, TextField } from "@mui/material";
import { useAuth } from "../../store/Auth/useAuth";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useUpdateUser } from "../../hooks/Auth/useUpdateUser";


function AccountInfo() {
  const {currentUser} = useAuth();
  const {updateUser, isPendingUpdateUser} = useUpdateUser()

  const {control, reset, handleSubmit, formState: {errors}, getValues} = useForm({
    defaultValues: {
      fullName: currentUser?.user_metadata?.fullName || '',
      email: currentUser?.user_metadata?.email || '',
      newPassword: '',
      confirmNewPassword: ''
    }
  });

  useEffect(() => {
    if (currentUser) {
      reset({
        fullName: currentUser.user_metadata?.fullName || '',
        email: currentUser?.user_metadata?.email || '',
      });
    }
  }, [currentUser, reset]);

  function onSubmit({fullName, email, newPassword}) {
    //need update currentUser after updateUser
    updateUser({fullName, email, newPassword})
  }

  return (
    <Box sx={{marginTop: '50px'}}>
      <Container>
        <Box sx={{maxWidth: "500px"}}>
          <Box component="h1">Account settings</Box>

          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{marginBottom: "15px"}}>
                <Box sx={{fontWeight: 600, marginBottom: "10px"}}>User Name</Box>
                <Controller
                  name="fullName"
                  control={control}
                  rules={{
                    required: "User name is required",
                    validate: {
                      notEmpty: value => value.trim() !== "" || "User name cannot be empty"
                    }
                  }}
                  render={({field}) => (
                    <>
                      <TextField
                        fullWidth
                        {...field}
                        error={!!errors.fullName}
                        helperText={errors.fullName && errors.fullName.message}
                        sx={{
                          "& .MuiInputBase-input ": {
                            color: "#fff",
                            padding: "20px",
                            border: 0,
                            minHeight: "55px"
                          },
                          "& fieldset, &:hover fieldset": {
                            border: '1px solid #333 !important',
                            borderRadius: "8px", 
                          },
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid #fff !important',
                          },
                          "& .Mui-error fieldset": {
                            border: "1px solid #e50000 !important"
                          }
                        }}
                      />
                    </>

                  )}
                />
              </Box>
              <Box sx={{marginBottom: "15px"}}>
                <Box sx={{fontWeight: 600, marginBottom: "10px"}}>Email</Box>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    validate: {
                      notEmpty: value => value.trim() !== "" || "Email cannot be empty",
                      validEmail: value => /\S+@\S+\.\S+/.test(value) || 'Please enter a valid email address'
                    }
                  }}
                  render={({field}) => (
                    <>
                      <TextField
                        fullWidth
                        {...field}
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                        sx={{
                          "& .MuiInputBase-input ": {
                            color: "#fff",
                            padding: "20px",
                            border: 0,
                            minHeight: "55px"
                          },
                          "& fieldset, &:hover fieldset": {
                            border: '1px solid #333 !important',
                            borderRadius: "8px", 
                          },
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid #fff !important',
                          },
                          "& .Mui-error fieldset": {
                            border: "1px solid #e50000 !important"
                          }
                        }}
                      />
                    </>

                  )}
                />
              </Box>
              <Box sx={{marginBottom: "15px"}}>
                <Box sx={{fontWeight: 600, marginBottom: "10px"}}>New password</Box>
                <Controller
                  name="newPassword"
                  control={control}
                  rules={{
                    // required: "New password is required",
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long'
                    },
                    validate: {
                      // notEmpty: value => value.trim() !== "" || "New Password cannot be empty",

                    }
                  }}
                  render={({field}) => (
                    <>
                      <TextField
                        fullWidth
                        {...field}
                        error={!!errors.newPassword}
                        helperText={errors.newPassword && errors.newPassword.message}
                        sx={{
                          "& .MuiInputBase-input ": {
                            color: "#fff",
                            padding: "20px",
                            border: 0,
                            minHeight: "55px"
                          },
                          "& fieldset, &:hover fieldset": {
                            border: '1px solid #333 !important',
                            borderRadius: "8px", 
                          },
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid #fff !important',
                          },
                          "& .Mui-error fieldset": {
                            border: "1px solid #e50000 !important"
                          }
                        }}
                      />
                    </>
                  )}
                />
              </Box>
              <Box sx={{marginBottom: "15px"}}>
                <Box sx={{fontWeight: 600, marginBottom: "10px"}}>Confirm new password</Box>
                <Controller
                  name="confirmNewPassword"
                  control={control}
                  rules={{
                    // required: "Confirm new password is required",
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters long'
                    },
                    validate: {
                      // notEmpty: value => value.trim() !== "" || "Confirm new password cannot be empty",
                      matchPasswords: value => value === getValues("newPassword") || "Passwords do not match"
                    }
                  }}
                  render={({field}) => (
                    <>
                      <TextField
                        fullWidth
                        {...field}
                        error={!!errors.confirmNewPassword}
                        helperText={errors.confirmNewPassword && errors.confirmNewPassword.message}
                        sx={{
                          "& .MuiInputBase-input ": {
                            color: "#fff",
                            padding: "20px",
                            border: 0,
                            minHeight: "55px"
                          },
                          "& fieldset, &:hover fieldset": {
                            border: '1px solid #333 !important',
                            borderRadius: "8px", 
                          },
                          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: '1px solid #fff !important',
                          },
                          "& .Mui-error fieldset": {
                            border: "1px solid #e50000 !important"
                          }
                        }}
                      />
                    </>
                  )}
                />
              </Box>
              <Box>
                <button type="submit" className="btnRed btn-medium w-100">Save</button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default AccountInfo;