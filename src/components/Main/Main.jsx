import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../Layout/Layout";
import { Home, About, Portfolio, ContactMe } from "../Pages";


const Main = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contactme" element={<ContactMe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};

export default Main;
