import { Outlet } from "react-router-dom";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children?: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </>
  );
}
