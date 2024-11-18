import Sellers from "@/components/sellers/sellers-container";
import { arabic, rajdhani } from "@/fonts/fonts";

export default function Home() {
  return (
    <div
      className={`${rajdhani.variable} ${arabic.variable} bg-gradient bg-no-repeat bg-cover bg-top -mt-[100px]`}
    >
      <Sellers />
    </div>
  );
}
