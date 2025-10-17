import { cn } from "@/lib/utils";
import Link from "next/link";

interface MyLogoProps {
  className?: string;
  spanDesign?: string;
}

export default function MyLogo({
  className,
  spanDesign,
}: MyLogoProps) {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl font-bold uppercase group hoverEffect text-shop-blue-hard hover:text-shop-blue-soft",
          className
        )}
      >
        Shopcar<span className={cn(
          "text-shop-blue-soft group-hover:text-shop-blue-hard",
          spanDesign
        )}>
          t
        </span>
      </h2>
    </Link>
  )
}
