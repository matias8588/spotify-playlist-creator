import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/templates/Home";
import Playlists from "@/templates/Playlists";
import Login from "@/templates/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
