import TopNavbar from "./TopNavbar";
import BottomNavbar from "./BottomNavbar";
import MobileDrawer from "./MobileDrawer";

import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <>
      {/* TOP NAV */}
      <TopNavbar />

      {/* STICKY NAV */}
      <BottomNavbar
        onOpenMobile={() =>
          setMobileOpen(true)
        }
      />

      {/* MOBILE */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() =>
          setMobileOpen(false)
        }
      />
    </>
  );
}