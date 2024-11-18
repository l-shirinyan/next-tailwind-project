import { StaticImageData } from "next/image";

export type nftCart = {
  img: StaticImageData;
  name: string;
  user: StaticImageData;
  userName: string;
  price: string;
  id:string
};

export type collectCart = {
  id: number;
  name: string;
  price: string;
  img: StaticImageData;
};


