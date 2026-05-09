import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./page/Home";
import Registration from "./page/PendaftaranProgram";
import GetIn from "./page/GetIn";
import Dashboard from "./page/AfterLogin/Dashboard";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const syncLogin = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", syncLogin);
    syncLogin();

    return () => window.removeEventListener("storage", syncLogin);
  }, []);

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* PUBLIC */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Home />} />
          <Route path="/getin" element={<GetIn />} />
        </Route>

        {/* PRIVATE */}
        <Route element={isLoggedIn ? <AuthLayout /> : <MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pendaftaran" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
