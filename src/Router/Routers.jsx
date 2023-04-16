import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from "../components/pages/Home";
import { SavePage } from "../components/pages/SavePage";

export const Routers = () =>{
  return(
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/save" element={<SavePage />} />
    </Routes>
  )
}