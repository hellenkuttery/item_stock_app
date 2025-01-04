import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import bgregister from "../../assets/bgregister.jpg";
import * as Yup from "yup";
import { Formik } from "formik";

function Register() {
  const SignupSchema = Yup.object().shape({
    username: Yup.string().required("This field is required").min(3,"Username should be more than 3 character"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
  });

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bgregister})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <Formik
          initialValues={{
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: "",
          }}
          validationSchema={SignupSchema} // Doğrulama Şeması Bağlandı
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="username"
                label="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
              />

              <TextField
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
              />

              <TextField
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                variant="outlined"
                fullWidth
                margin="normal"
                type="text"
              />

              <TextField
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                variant="outlined"
                fullWidth
                margin="normal"
                type="email"
              />

              <TextField
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default Register;
