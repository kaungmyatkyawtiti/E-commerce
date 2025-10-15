import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MyLogo() {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl font-bold uppercase group hoverEffect text-shop-blue-hard hover:text-shop-blue-soft"
        )}
      >
        Shopcar<span className="text-shop-blue-soft group-hover:text-shop-blue-hard">t</span>
      </h2>
    </Link>
  )
}
