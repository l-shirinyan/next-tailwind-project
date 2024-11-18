import { footerLink } from "@/utils/constant";
import Link from "next/link";
import PlayIcon from "@/assets/play.svg";
export default function Footer() {
  return (
    <div className="container px-5 sm:px-0 grid grid-cols-1 md:grid-cols-2 gap-y-10 xl:gap-y-0 xl:grid-cols-4 mb-20 md:mb-44 mt-10">
      <h2 className="font-arabic text-2xl md:text-5xl max-w-[331px] w-full text-white ">
        {" "}
        Discover a rare abstract item around the world
      </h2>
      {footerLink.map(({ id, title, links }) => {
        return (
          <div key={id} className="text-white font-rajdhani flex flex-col">
            <span className="text-xl md:text-2xl font-semibold">{title}</span>
            <div className="flex flex-col pt-6">
              {links.map(({ id, txt, link }) => {
                return (
                  <Link href={link} key={id} className="text-base md:text-lg">
                    {txt}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="text-white flex flex-col font-rajdhani">
        <span className="text-xl md:text-2xl font-semibold">
          Joins Newsletter
        </span>
        <span className="text-lg pt-6 block">
          Subscribe to our newsletter to get more amazing NFT items
        </span>
        <div className="relative border border-white rounded-[56px] mt-5">
          <input
            placeholder="Enter Your Email"
            className="w-full bg-transparent py-4 px-6 focus-visible:outline-0"
          />
          <button className="absolute right-6 top-[10px]">
            <PlayIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
