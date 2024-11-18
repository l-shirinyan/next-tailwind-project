"use client";
import React, { useEffect, useRef, ReactNode, MutableRefObject } from "react";
import { SwiperProps } from "swiper/react";
import { register } from "swiper/element/bundle";
import { SwiperType } from "@/types/coverage";

interface ICustomSwiper extends SwiperProps {
  children: ReactNode;
  view: { desktop: number; laptop: number; md: number; mobile: number };
  space: number;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": SwiperType;
    }
  }
}
export default function CustomSwiper({
  children,
  view,
  space,
  ...rest
}: ICustomSwiper) {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const initializeSwiper = () => {
      register();

      const params = {
        spaceBetween: space,
        speed: rest.freeMode ? 10000 : 2500,
        loop: true,
        className: "cards",
        breakpoints: {
          1400: {
            slidesPerView: view.desktop,
          },
          700: {
            slidesPerView: view.laptop,
          },
          576: {
            slidesPerView: view.md,
          },
          320: {
            slidesPerView: view.mobile,
          },
        },
        autoplay: {
          disableOnInteraction: true,
          delay: 20,
        },
        ...rest,
      };
      if (swiperRef.current) {
        Object?.assign(swiperRef.current, params);
        const swiperInstance = swiperRef.current as SwiperType;
        if (typeof swiperInstance.initialize === "function") {
          swiperInstance.initialize();
        }
      }
    };
    initializeSwiper();
  }, [children, rest, space, view.desktop, view.laptop, view.md, view.mobile]);
  return (
    <>
      <div>
        <swiper-container ref={swiperRef} init={false}>
          {children}
        </swiper-container>
      </div>
    </>
  );
}
