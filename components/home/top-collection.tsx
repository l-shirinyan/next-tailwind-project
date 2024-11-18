import { dataTopCollection } from "@/utils/top-nfts-now";
import TopCollectCart from "../reusable/top-collection-item";

export default function TopCollection() {
  return (
    <div className="container px-5 sm:px-0">
      <h2 className="text-white font-arabic text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center">
        Top Collections Over Last 7 Days
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10 py-16">
        {dataTopCollection.map((it) => {
          return <TopCollectCart key={it.id} cart={it} />;
        })}
      </div>
    </div>
  );
}
