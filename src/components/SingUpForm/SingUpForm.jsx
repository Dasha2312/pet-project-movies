import { Box, Modal, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useSingUp } from '../../hooks/Auth/useSingUp';
import { LoadingButton } from '@mui/lab';

function SingUpForm({isSignUpOpen, closeSingUpModal, handleCloseModal}) {
  const {singup, isPending} = useSingUp();

  const {handleSubmit, formState: { errors }, reset, control} = useForm()


  function onSubmit({fullName, email, password}) {
    singup(
      {fullName, email, password},
      {
        onSettled: () => {
          reset();
          closeSingUpModal
        },
      }
    )
  }

  return (
    <Modal
      open={isSignUpOpen}
      onClose={closeSingUpModal}
      sx={{
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.85)"
        }
      }}
    >
      <Box className="modal-block">
        <Box component="h2" sx={{textAlign: "center", marginBottom: '20px'}}>Sing Up</Box>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Box sx={{marginBottom: "20px"}}>
            <Box className="form-label">Your Name</Box>
            <Controller
              name="fullName"
              control={control}
              rules={{
                required: 'User name is required',
                validate: value => value.trim() !== '' || 'Name cannot be empty'
              }}
              render={({field}) => (
                <>
                  <TextField variant="outlined" {...field} fullWidth
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
                    error={!!errors.fullName}
                    helperText={errors.fullName && errors.fullName.message}
                  />
                </>
              )}
            />            
          </Box>
          <Box sx={{marginBottom: "20px"}}>
            <Box className="form-label">Your Email</Box>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                validate: {
                  notEmpty: value => value.trim() !== '' || 'Email cannot be empty',
                  validEmail: value => /\S+@\S+\.\S+/.test(value) || 'Please enter a valid email address'
                }
              }}
              render={({field}) => (
                <>
                  <TextField variant="outlined" {...field} fullWidth
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
                    error={!!errors.email}
                    helperText={errors.email && errors.email.message}
                  />
                </>
              )}
            />            
          </Box>
          <Box sx={{marginBottom: "20px"}}>
            <Box className="form-label">Your Password</Box>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long'
                },
                validate: value => value.trim() !== '' || 'Password cannot be empty',
              }}
              render={({field}) => (
                <>
                  <TextField variant="outlined" {...field} fullWidth
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
                    error={!!errors.password}
                    helperText={errors.password && errors.password.message}
                  />
                </>
              )}
            />
          </Box>
          <Box>
            {/* <Button type="submit" className="btnRed" variant="contained"  fullWidth>Send</Button> */}
            <LoadingButton type="submit" className="btnRed" variant="contained"  fullWidth loading={isPending}>
            Send
          </LoadingButton>
          </Box>
        </form>
            
        <Box sx={{marginTop: "30px"}}>
          <Box sx={{textAlign: "center"}}>Already have an account?</Box>
          <Box sx={{marginTop: "10px"}}>
            <button onClick={handleCloseModal} className="btnText text-align-center w-100">Log In</button>
          </Box>
        </Box>
        
      </Box>
    </Modal>
    
  );
}

export default SingUpForm;