import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={ <Register/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
