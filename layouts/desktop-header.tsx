import Link from "next/link";
import { navbar } from "@/utils/constant";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
  const path = usePathname();
  return (
    <nav
      className="hidden md:flex gap-10 xl:gap-0 w-max xl:max-w-[592px] xl:w-full justify-between"
      aria-label="Primary navigation"
    >
      {navbar.link.map(({ id, label, href }) => (
        <Link
          href={href}
          key={id}
          className={`${
            href === path ? "text-pink" : "text-white"
          } font-robot text-2xl lg:text-4xl`}
          aria-current={href === path ? "page" : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
