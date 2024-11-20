"use client";
import { useSellers } from "@/api/sellers";
import { Sellers as SellersType } from "@/types/seller";
import { sellerBtns } from "@/utils/constant";
import Image from "next/image";
import { useState } from "react";

export default function Sellers() {
  const [active, setActive] = useState("day");
  const handleClick = (type: string) => {
    setActive(type);
  };
  const { data } = useSellers();
  return (
    <section
      className="container py-28 md:py-[200px] px-5 md:px-0"
      aria-labelledby="sellers-heading"
    >
      <div className="text-white font-arabic text-3xl lg:text-6xl">
        <h1 id="sellers-heading" className="text-center">
          Our Amazing Top Sellers
        </h1>
        <h1 className="text-center">Based on This </h1>
      </div>
      <div
        className="flex gap-4 sm:gap-10 justify-center pt-10"
        role="group"
        aria-labelledby="filter-buttons-group"
      >
        {sellerBtns.map(({ id, text, type }) => {
          return (
            <button
              className={`${
                active === type ? "bg-purpleGradient" : "bg-opacity"
              } py-2 sm:py-4 px-3 rounded min-w-20 sm:min-w-40 hover:bg-hovered`}
              key={id}
              onClick={() => handleClick(type)}
              aria-label={`Filter by ${text}`}
            >
              <span className="font-rajdhani text-white text-xl font-bold">
                {text}
              </span>
            </button>
          );
        })}
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16"
        role="list"
      >
        {data &&
          data[active as keyof SellersType].map(
            ({ id, img, name, position }) => {
              return (
                <div key={id} className="relative" role="listitem">
                  <Image
                    src={img}
                    alt={`Profile picture of ${name}`}
                    width={337}
                    height={395}
                    className="w-full rounded-[22px] h-full object-cover"
                    priority
                  />
                  <div className="absolute h-full w-full top-0 flex flex-col justify-end p-5 bg-opacity rounded-[22px]">
                    <div className="text-white font-rajdhani flex flex-col">
                      <span className="text-xl font-bold">{name}</span>
                      <span className="text-lg">{position}</span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </section>
  );
}
