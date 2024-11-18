import Link from "next/link";

import { ReactNode } from "react";
export default function TopNFTs({
  children,
  renderRightMenu,
}: {
  children: ReactNode;
  renderRightMenu?: () => React.ReactNode;
}) {
  return (
    <div className="container px-5 sm:px-0 py-10 md:py-20">
      <div className="flex justify-between items-center mt-20">
        <span className="text-white text-2xl md:text-3xl lg:text-4xl">
          Top NFTs now
        </span>
        {renderRightMenu?.()}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-[70px] py-10 md:py-20">
        {children}
      </div>
    </div>
  );
}
