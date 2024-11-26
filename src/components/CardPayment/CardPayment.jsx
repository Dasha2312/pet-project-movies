import { Box, Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Grid from '@mui/material/Grid2';

function CardPayment() {
  const {reset, handleSubmit, formState: {errors}, control} = useForm({
    defaultValues: {
      cardNumber: "",
      
    }
  });


  function onSubmit(data) {
    console.log('data ', data)
  }

  return (
    <form className="card_payment" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{mb: '10px', fontSize: '12px'}}>Card number</Box>
      <Controller
        name="cardNumber"
        control={control}
        rules={{
          required: "Enter correct card number",
          validate: {
            notEmppty: value => value.trim() !== '' || "Enter correct card number",
          },
          minLength: {
            value: 16,
            message: 'Enter correct card number'
          },
        }}
        render={({field}) => (
          <>
            <TextField variant="outlined" {...field} fullWidth
              sx={{
                mb: "20px",
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
              error={!!errors.cardNumber}
              helperText={errors.cardNumber && errors.cardNumber.message}
            />
          </>
        )}
      />
      <Grid container columnSpacing={2} rowSpacing={3}>
        <Grid size={{ xs: 12, md: 6, xl: 3 }}>
          <Box sx={{mb: '10px', fontSize: '12px'}}>Card date</Box>
          <Controller
            name="cardExp"
            control={control}
            rules={{
              required: "Invalid expiration date",
              validate: {
                notEmppty: value => value.trim() !== '' || "Invalid expiration date",
              },
              minLength: {
                value: 4,
                message: 'Invalid expiration date'
              },
              
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
                  error={!!errors.cardExp}
                  helperText={errors.cardExp && errors.cardExp.message}
                />
              </>
            )}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, xl: 3 }}>
          <Box sx={{mb: '10px', fontSize: '12px'}}>Card cvv</Box>
          <Controller
            name="cardCsc"
            control={control}
            rules={{
              required: "Enter correct CVV2/CVC2 code",
              validate: {
                notEmppty: value => value.trim() !== '' || "Enter correct CVV2/CVC2 code",
              },
              minLength: {
                value: 3,
                message: 'Enter correct CVV2/CVC2 code'
              },
              
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
                  error={!!errors.cardCsc}
                  helperText={errors.cardCsc && errors.cardCsc.message}
                />
              </>
            )}
          />
        </Grid>
      </Grid>

      <Box sx={{mt: '20px'}}>
        <Button fullWidth type="submit" className="btnRed">Buy</Button>
      </Box>
    </form>
  );
}

export default CardPayment;