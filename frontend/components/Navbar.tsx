"use client";
import { links } from "@/lib/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:inline-flex items-center gap-9 capitalize font-semibold text-[16px]">
      {
        links.map((link, ind) =>
          <Link
            key={ind}
            href={link.href}
            className={cn(
              "relative hover:text-shop-blue-soft hoverEffect group",
              pathname === link.href && "text-shop-blue-soft"
            )}
          >
            {link.name}
            <span
              className={cn(
                "absolute left-0 -bottom-[2px] h-[2px] w-0 bg-shop-blue-soft hoverEffect group-hover:w-full",
                pathname === link.href && "w-full"
              )}
            ></span>
          </Link>
        )
      }
    </nav>
  )
}
