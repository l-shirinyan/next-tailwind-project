"use client";
import { useState } from "react";
import Logo from "@/assets/logo.svg";
import BurgerIcon from "@/assets/burger.svg";
import CloseIcon from "@/assets/close.svg";
import Link from "next/link";
import { useScroll } from "@/utils/hooks/useScroll";
import DesktopNav from "./desktop-header";
import MobileNav from "./mobile-nav";

const LogoLink = () => (
  <Link href="/" aria-label="Go to homepage">
    <Logo className="w-[150px] sm:w-[210px] sm:h-[24px]" />
  </Link>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const scroll = useScroll();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header
      role="banner"
      className={`${
        scroll && !open ? "backdrop-blur-xl" : ""
      } sticky top-0 bg-transparent flex items-center justify-between py-6 z-10 flex-col`}
    >
      <div className="container px-5 sm:px-0 flex justify-between items-center">
        <LogoLink />
        <DesktopNav />
        <button
          className="block md:hidden"
          onClick={handleOpen}
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <BurgerIcon />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="absolute top-0 w-full px-5 h-screen backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="container sm:px-0 flex justify-between items-center py-[28px]">
            <LogoLink />
            <button
              className="block md:hidden"
              onClick={handleOpen}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          <MobileNav />
        </div>
      )}
    </header>
  );
}
