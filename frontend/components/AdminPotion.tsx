import { Heart, LogIn } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";
import ShopCart from "./ShopCart";
import SignIn from "./SignIn";

export default function AdminPotion() {
  return (
    <div className="flex items-center gap-5 md:gap-7">
      <ShopCart />
      <div className="hidden md:flex items-center gap-7">
        <SearchBar />
        <Heart size={22} />
        <SignIn />
      </div>
      <ModeToggle />
    </div>
  )
}
