import { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const [count, setCount] = useState(0);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#454F5B",
      },
      secondary: {
        main: "#161C24",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
