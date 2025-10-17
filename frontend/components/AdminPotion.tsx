import { Heart } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import ShopCart from "./ShopCart";
import ClerkLogin from "./ClerkLogin";

export default function AdminPotion() {
  return (
    <div className="flex items-center gap-5 md:gap-6">
      <ShopCart />
      <div className="hidden md:flex items-center gap-6">
        <SearchBar />
        <Heart size={20} />
        <ClerkLogin />
      </div>
      <ModeToggle />
    </div>
  )
}
