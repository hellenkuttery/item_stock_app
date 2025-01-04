import React from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import backgroundImage from "../../assets/bgimg.jpg"
function Login() {
  return (
    <Box
      sx={{
      
        height: "100vh", // Tarayıcı yüksekliğini tamamen kapla
        width: "100vw",  // Tarayıcı genişliğini tamamen kapla
        display: "flex",
        alignItems: "center", // Dikeyde ortala
        justifyContent: "center", // Yatayda ortala
        backgroundImage: `url(${backgroundImage})`, // Arka plan resmi
        backgroundSize: "cover", // Resmi ekranı tamamen kaplayacak şekilde ayarla
        backgroundPosition:"center"
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(10px)", // Hafif bulanıklık efekti
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Şeffaf beyaz arka plan
        }}
      >
        <Typography variant="h5" mb={2}>
          Login
        </Typography>
        <form>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
          />
          <TextField
            label="Password"
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
      </Paper>
    </Box>
  );
}

export default Login;
