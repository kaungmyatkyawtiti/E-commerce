import { cn } from "@/lib/utils";
import MyLogo from "./MyLogo";
import { X } from "lucide-react";
import { links } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import SearchBar from "./SearchBar";

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
        "fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/40 shadow-xl hoverEffect",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}>
      <div
        className="min-w-72 max-w-96 bg-card h-screen text-foreground/85 p-8 border-r border-r-border/50 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <MyLogo
            className="text-white"
            spanDesign="group-hover:text-white"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-input hover:text-foreground"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {
            links.map((link, ind) =>
              <Link
                key={ind}
                href={link.href}
                className={cn(
                  "hover:text-shop-blue-soft hoverEffect",
                  pathname === link.href && "text-shop-blue-soft"
                )}
              >
                {link.name}
              </Link>
            )
          }
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <Button>SignIn</Button>
        </div>
      </div>
    </div >
  )
}
