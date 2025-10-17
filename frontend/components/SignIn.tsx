// import { SignInButton } from "@clerk/nextjs";
// import { LogIn } from "lucide-react";
//
// export default function SignIn() {
//   return (
//     <SignInButton>
//       {/* <Button */}
//       {/*   className="bg-shop-blue-hard hover:bg-shop-blue-soft text-white" */}
//       {/* > */}
//       {/*   Sign In */}
//       {/* </Button> */}
//
//
//       <button className="hover:bg-input p-1 rounded-full">
//         <LogIn size={20} />
//       </button>
//     </SignInButton>
//   )
// }
//
import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

export default function SignIn() {
  return (
    <SignInButton>
      {/* Single wrapper element */}
      <div className="flex">
        {/* Desktop icon button */}
        <button className="hidden md:flex hover:bg-input p-1 rounded-full items-center justify-center">
          <LogIn size={20} />
        </button>

        {/* Mobile text button */}
        <Button className="flex md:hidden bg-shop-blue-hard hover:bg-shop-blue-soft text-white px-4 py-2 rounded-md">
          Sign In
        </Button>
      </div>
    </SignInButton>
  );
}
