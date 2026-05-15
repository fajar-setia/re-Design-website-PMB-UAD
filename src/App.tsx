import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

import Home from "./page/Home";
import RegisterPage from "./page/Register";
import Registration from "./page/PendaftaranProgram";
import GetIn from "./page/GetIn";
import Dashboard from "./page/AfterLogin/Dashboard";
import Upload from "./page/AfterLogin/Upload";
import MBKM from "./page/AfterLogin/MBKM";
import Result from "./page/AfterLogin/Result";
import ProgramSarjana from "./page/AfterLogin/ProgramStudi/Sarjana/pilSarjana";
import ProgramMagister from "./page/AfterLogin/ProgramStudi/Magister/pilMagister";
import ProgramDoktor from "./page/AfterLogin/ProgramStudi/Doktor/pilDoktor";
import ProgramProfesi from "./page/AfterLogin/ProgramStudi/Profesi/pilProfesi";


import FormulirPendaftaran from "./page/AfterLogin/Form/index";

function PendaftaranRoute() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <AuthLayout>
      <Registration />
    </AuthLayout>
  ) : (
    <MainLayout>
      <Registration />
    </MainLayout>
  );
}

function GetInRoute() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <AuthLayout>
      <GetIn />
    </AuthLayout>
  ) : (
    <MainLayout>
      <GetIn />
    </MainLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 3000,

          style: {
            background: "#0f172a",
            color: "#ffffff",
            borderRadius: "18px",
            padding: "16px",
            fontWeight: "600",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            minWidth: "320px",
          },

          success: {
            style: {
              background: "linear-gradient(to right, #003366, #004c99)",
              color: "#ffffff",
              border: "1px solid #1d4ed8",
            },

            iconTheme: {
              primary: "#22c55e",
              secondary: "#ffffff",
            },
          },

          error: {
            style: {
              background: "linear-gradient(to right, #dc2626, #ef4444)",
              color: "#ffffff",
              border: "1px solid #f87171",
            },

            iconTheme: {
              primary: "#ffffff",
              secondary: "#dc2626",
            },
          },
        }}
      />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/getin" element={<GetInRoute />} />

        <Route path="/pendaftaran" element={<PendaftaranRoute />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/mbkm" element={<MBKM />} />
            <Route path="/result" element={<Result />} />
            <Route path="/pil-sarjana" element={<ProgramSarjana />} />
            <Route path="/pil-magister" element={<ProgramMagister />} />
            <Route path="/pil-doktor" element={<ProgramDoktor />} />
            <Route path="/pil-profesi" element={<ProgramProfesi />} />
            <Route path="/form-pendaftaran" element={<FormulirPendaftaran />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
