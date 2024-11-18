"use client";
import { ReactNode } from "react";
import { SwiperSlideProps } from "swiper/react";
import "swiper/css";
interface ICustomSwiperSlide {
  children: ReactNode;
  styles?: object;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-slide": SwiperSlideProps;
    }
  }
}
const CustomSwiperSlide = ({
  children,
  styles,
  ...rest
}: ICustomSwiperSlide) => {
  return (
    <swiper-slide {...rest} style={styles}>
      {children}
    </swiper-slide>
  );
};
export default CustomSwiperSlide;
