import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import NewYorkNews from "./pages/NewYorkNews";
import { ROUTES } from './constants/routes';

function AppRouter() {
  
  const { NEW_YORK, THE_GUARDIAN, THE_NEWS } = ROUTES;
  
  return (
    <Routes>
      <Route path={THE_GUARDIAN} element={<Home />} />
      <Route path={THE_NEWS} element={<News />} />
      <Route path={NEW_YORK} element={<NewYorkNews />} />
    </Routes>
  );
}

export default AppRouter;
