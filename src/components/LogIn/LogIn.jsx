import { Box, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useLogIn } from "../../hooks/Auth/useLogIn";

import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { closeAuthModal, openAuthModal } from "../../store/authModalSlice";

function LogIn() {
  const { login, isPending } = useLogIn();
  const dispatch = useDispatch();

  const {
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    console.log("log in ", data);
    login(data, {
      onSettled: () => {
        reset();
      },
      onSuccess: () => {
        dispatch(closeAuthModal());
        reset();
      },
    });
  }

  return (
    <>
      <Box component="h2" sx={{ textAlign: "center", marginBottom: "20px" }}>
        Log In
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Box sx={{ marginBottom: "40px" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Box className="form-label">Your Email</Box>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                validate: {
                  notEmpty: (value) =>
                    value.trim() !== "" || "Email cannot be empty",
                  validEmail: (value) =>
                    /\S+@\S+\.\S+/.test(value) ||
                    "Please enter a valid email address",
                },
              }}
              render={({ field }) => (
                <>
                  <TextField
                    variant="outlined"
                    {...field}
                    fullWidth
                    error={!!errors.email}
                    disabled={isPending}
                    sx={{
                      "& .MuiInputBase-input ": {
                        color: "#fff",
                        padding: "20px",
                        border: 0,
                        minHeight: "55px",
                      },
                      "& fieldset, &:hover fieldset": {
                        border: "1px solid #333 !important",
                        borderRadius: "8px",
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #fff !important",
                      },
                      "& .Mui-error fieldset": {
                        border: "1px solid #e50000 !important",
                      },
                    }}
                    helperText={errors.email && errors.email.message}
                  />
                </>
              )}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Box className="form-label">Your password</Box>
            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                validate: {
                  notEmpty: (value) =>
                    value.trim() !== "" || "Password cannot be empty",
                },
              }}
              render={({ field }) => (
                <>
                  <TextField
                    variant="outlined"
                    {...field}
                    fullWidth
                    error={!!errors.password}
                    disabled={isPending}
                    sx={{
                      "& .MuiInputBase-input ": {
                        color: "#fff",
                        padding: "20px",
                        border: 0,
                        minHeight: "55px",
                      },
                      "& fieldset, &:hover fieldset": {
                        border: "1px solid #333 !important",
                        borderRadius: "8px",
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #fff !important",
                      },
                      "& .Mui-error fieldset": {
                        border: "1px solid #e50000 !important",
                      },
                    }}
                    helperText={errors.password && errors.password.message}
                  />
                </>
              )}
            />
          </Box>
        </Box>
        <LoadingButton
          type="submit"
          className="btnRed"
          sx={{
            bgcolor: "#e50000",
            p: "10px",
            fontWeight: "600",
            fontSize: "16px",
            "&.MuiLoadingButton-loading": {
              bgcolor: "#e50000",
            },
            "& .MuiCircularProgress-root": {
              width: "20px !important",
              height: "20px !important"
            },
            "& .MuiCircularProgress-svg": {
              // color: "#fff"
            }
          }}
          variant="contained"
          fullWidth
          loading={isPending}
        >
          Send
        </LoadingButton>
      </form>

      <Box sx={{ marginTop: "30px" }}>
        <Box sx={{ textAlign: "center" }}>Don’t have an account?</Box>
        <Box sx={{ marginTop: "10px" }}>
          <button
            onClick={() => dispatch(openAuthModal('SignUp'))}
            className="btnText text-align-center w-100"
          >
            Sing Up
          </button>
        </Box>
      </Box>
    </>
  );
}

export default LogIn;
