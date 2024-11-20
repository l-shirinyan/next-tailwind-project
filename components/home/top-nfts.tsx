import { ReactNode } from "react";
export default function TopNFTs({
  children,
  renderRightMenu,
}: {
  children: ReactNode;
  renderRightMenu?: () => React.ReactNode;
}) {
  return (
    <section
      className="container px-5 sm:px-0 py-10 md:py-20"
      role="region"
      aria-labelledby="top-nfts-heading"
    >
      <div className="flex justify-between items-center mt-20">
        <h2
          id="top-nfts-heading"
          className="text-white text-2xl md:text-3xl lg:text-4xl"
        >
          Top NFTs now
        </h2>
        {renderRightMenu?.()}
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-9 sm:gap-y-[70px] py-10 md:py-20"
        role="list"
        aria-label="List of top NFTs"
      >
        {children}
      </div>
    </section>
  );
}
