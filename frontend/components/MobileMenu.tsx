"use client";

import { useState } from "react";
import { TextAlignEnd, TextAlignStart } from "lucide-react";
import SideMenu from "./SideMenu";

export default function MobileMenu() {
  const [sideMenuOpen, isSideMenuOpen] = useState(false);

  return (
    <>
      <button
        className="hover:text-shop-blue-hard hoverEffect md:hidden"
        onClick={() => isSideMenuOpen(!sideMenuOpen)}
      >
        {
          sideMenuOpen
            ? <TextAlignEnd size={26} />
            : <TextAlignStart size={26} />
        }
      </button>
      <SideMenu
        isOpen={sideMenuOpen}
        onClose={() => isSideMenuOpen(false)}
      />
    </>
  )
}
