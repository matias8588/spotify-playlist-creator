import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/templates/Home";
import Playlists from "@/templates/Playlists";
import Login from "@/templates/Login";
import ProtectedRoute from "@/routes/PrivateRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/playlists"
          element={
            <ProtectedRoute>
              <Playlists />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
