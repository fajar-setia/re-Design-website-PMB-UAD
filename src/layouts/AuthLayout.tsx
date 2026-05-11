import { Outlet } from "react-router-dom";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar/AfterLogin/Navbar";
import Footer from "../components/Footer";

type AuthLayoutProps = {
  children?: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
