import Header from "@/components/Header";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <>
      <Header />

      <ModeToggle />

      <div className="group p-4 bg-gray-200 hover:bg-gray-300">
        <p className="text-gray-500 group-hover:text-red-400">Hello</p>
      </div>

      <Button>Check Out</Button>
    </>
  )
}
