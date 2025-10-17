// import { Search } from "lucide-react";
//
// export default function SearchBar() {
//   return (
//     <div>
//       <input />
//       <Search size={20} />
//     </div>
//   )
// }
//
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search....."
        className="w-28 px-2 py-1 text-sm placeholder:text-muted-foreground rounded-md bg-muted border border-border focus:outline-none focus:ring-1 focus:ring-shop-blue-soft hoverEffect"
      />
      <Search
        size={18}
        className="absolute right-2 text-foreground/85 pointer-events-none"
      />
    </div>
  );
}
