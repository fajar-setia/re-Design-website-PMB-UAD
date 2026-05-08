import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout";

import Home from "./page/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN AREA */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* AUTH AREA */}
        <Route element={<AuthLayout />}>
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}