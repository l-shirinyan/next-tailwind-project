import { useSellerServer } from "@/api/sellers";
import Sellers from "@/components/sellers/sellers-container";
import { arabic, rajdhani } from "@/fonts/fonts";

export default async function TopSallers() {
  const { HydrateProvider } = await useSellerServer();
  return (
    <div
      className={`${rajdhani.variable} ${arabic.variable} bg-gradient bg-no-repeat bg-cover bg-top -mt-[100px]`}
    >
      <HydrateProvider>
        <Sellers />
      </HydrateProvider>
    </div>
  );
}
