import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blog", href: "/blog" },
  { name: "Hot Deal", href: "/deal" },
]
export default function Navbar() {
  return (
    <nav className="hidden lg:inline-flex items-center gap-9 capitalize font-semibold text-foreground/90 text-[16px]">
      {
        links.map((link, ind) =>
          <Link
            key={ind}
            href={link.href}
            className="relative hover:text-shop-blue-soft hoverEffect group"
          >
            {link.name}
            <span
              className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-shop-blue-soft hoverEffect group-hover:w-full"
            ></span>
          </Link>
        )
      }
    </nav>
  )
}
