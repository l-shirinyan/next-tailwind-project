import { SwiperProps } from "swiper/react";

export interface ICoverageData {
    id: string;
    img: { en: string };
    city1: { en: string };
    city2: { en: string };
    tab: { en: string };
    content: { en: string };
  }
  export interface SwiperType extends SwiperProps {
    ref?: React.MutableRefObject<SwiperType | null>;
    initialize?(): void;
    swiper?: {
      slideNext: () => void;
      slidePrev: () => void;
      slideTo: (to: number) => void;
      activeIndex: number;
      isBeginning: boolean;
      isEnd: boolean;
    };
  }
  