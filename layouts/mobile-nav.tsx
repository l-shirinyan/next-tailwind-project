import Link from "next/link";
import { navbar } from "@/utils/constant";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const path = usePathname();
  return (
    <nav className="flex flex-col" aria-label="Mobile navigation">
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
