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

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/getin" element={<GetIn />} />
        </Route>

        <Route path="/pendaftaran" element={<PendaftaranRoute />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
