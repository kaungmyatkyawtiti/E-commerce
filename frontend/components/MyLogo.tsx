import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MyLogo() {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl font-bold uppercase group hoverEffect"
        )}
      >
        Shopcart
      </h2>
    </Link>
  )
}
