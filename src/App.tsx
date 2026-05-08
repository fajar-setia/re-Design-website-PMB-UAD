import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout";


import Home from "./page/Home";
import Registration from "./page/PendaftaranProgram";
import RegisterAccount from "./page/Register/RegisterAccount";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN AREA */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pendaftaran" element={<Registration />} />
          <Route path="/register" element={<RegisterAccount />} />
        </Route>

        {/* AUTH AREA */}
        <Route element={<AuthLayout />}>
          
        </Route>

      </Routes>
    </BrowserRouter>
  );
}