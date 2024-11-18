"use client";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import { navbar } from "@/utils/constant";
import { useEffect, useState } from "react";
import BurgerIcon from "@/assets/burger.svg";
import CloseIcon from "@/assets/close.svg";
import { usePathname } from "next/navigation";
export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const checkScroll = () => {
      const isScrolled = window.scrollY > 80;
      setScroll(isScrolled);
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={`${
        scroll && !open ? "backdrop-blur-xl" : ""
      }  sticky top-0 bg-transparent flex items-center justify-between py-6 z-10 flex-col `}
    >
      <div className="container  px-5 sm:px-0 flex justify-between items-center">
        <Link href="/">
          <Logo className="w-[150px] sm:w-[210px] sm:h-[24px]" />
        </Link>
        <div className="hidden md:flex gap-10 xl:gap-0 w-max xl:max-w-[592px] xl:w-full justify-between">
          {navbar.link.map(({ id, label, href }) => {
            return (
              <Link
                href={href}
                key={id}
                className={`${
                  href === path ? "text-pink" : "text-white"
                } font-robot text-2xl lg:text-4xl`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <button className="block md:hidden" onClick={handleOpen}>
          <BurgerIcon />
        </button>
      </div>
      {open && (
        <div className="absolute top-0 w-full px-5 h-screen backdrop-blur-xl">
          <div className="container sm:px-0 flex justify-between items-center py-[28px]">
            <Link href="/">
              <Logo className="w-[150px] sm:w-[210px] sm:h-[24px]" />
            </Link>
            <button className="block md:hidden" onClick={handleOpen}>
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col">
            {navbar.link.map(({ id, label, href }) => {
              return (
                <Link
                  href={href}
                  key={id}
                  className={`${
                    href === path ? "text-pink" : "text-white"
                  } font-robot text-2xl lg:text-4xl`}
                  onClick={handleOpen}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
