import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/templates/Home";
import Playlists from "@/templates/Playlists";
import Login from "@/templates/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
