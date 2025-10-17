import { cn } from "@/lib/utils";
import MyLogo from "./MyLogo";
import { Search, X } from "lucide-react";
import { links } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import SocialMedia from "./SocialMedia";
import { Kbd, KbdGroup } from "./ui/kbd";
import ClerkLogin from "./ClerkLogin";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SideMenu({
  isOpen,
  onClose
}: SideMenuProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/40 shadow-xl hoverEffect lg:hidden",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
      onClick={onClose}
    >
      <div
        className="min-w-72 max-w-96 bg-card h-screen text-foreground/85 p-8 border-r border-r-border/50 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <MyLogo />
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-input hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>

        <Button
          variant="secondary"
          className="md:hidden w-2/3"
        >
          <Search
            size={16}
          />
          <span>Search</span>
          <KbdGroup>
            <Kbd>Shift</Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
          </KbdGroup>
        </Button>

        <div className="flex flex-col space-y-2">
          {
            links.map((link, ind) =>
              <Link
                key={ind}
                href={link.href}
                className={cn(
                  "hover:text-shop-blue-soft hover:bg-accent py-2 px-3 rounded-md hoverEffect font-semibold",
                  pathname === link.href && "text-shop-blue-soft bg-accent"
                )}
              >
                {link.name}
              </Link>
            )
          }
        </div>
        <div className="md:hidden">
          <ClerkLogin />
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div >
  )
}
