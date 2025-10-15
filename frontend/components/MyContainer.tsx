import { cn } from "@/lib/utils";

interface MyContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function MyContainer({
  children,
  className,
}: MyContainerProps) {
  return (
    <div
      className={cn(
        "max-w-screen mx-auto px-8",
        className
      )}
    >
      {children}
    </div>
  )
}
