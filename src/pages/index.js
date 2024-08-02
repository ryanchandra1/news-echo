import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News1 from "./news1";
import News2 from "./news2";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News1 />} />
        <Route path="/news2" element={<News2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;