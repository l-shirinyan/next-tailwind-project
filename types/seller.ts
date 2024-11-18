
import { StaticImageData } from "next/image";

export interface Seller {
    id: number;
    name: string;
    position: string;
    img: StaticImageData;
    time: string;
  }
  
  export interface Sellers {
    day: Seller[];
    month: Seller[];
    year: Seller[];
  }