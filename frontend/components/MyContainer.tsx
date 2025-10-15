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
        "max-w-screen mx-auto p-4",
        className
      )}
    >
      {children}
    </div>
  )
}
