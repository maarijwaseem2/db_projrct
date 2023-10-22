import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashNav />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
