import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import {
  DrawingList,
  HomePage,
  LoginPage,
  ProfileUpdate,
  SignUpPage,
  UserDrawing,
  Navbar,
} from "./components";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/profile" element={<ProfileUpdate />} />
        <Route exact path="/user" element={<DrawingList />} />
        <Route exact path="/drawing" element={<UserDrawing />} />
      </Routes>
    </div>
  );
};

export default App;
