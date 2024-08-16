import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News/index";
import { ROUTES } from './constants/routes';

function AppRouter() {
  
  const { NEW_YORK, THE_GUARDIAN, THE_NEWS } = ROUTES;
  
  return (
    <Routes>
      <Route path={THE_GUARDIAN} element={<Home />} />
      <Route path={THE_NEWS} element={<News />} />
    </Routes>
  );
}

export default AppRouter;
