"use client";

import { ClerkLoaded, SignedIn, useUser } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "lucide-react";
import SignIn from "./SignIn";

export default function ClerkLogin() {
  const { user } = useUser();

  console.log("user", user);
  return (
    <ClerkLoaded>
      <SignedIn>
        <User />
      </SignedIn>
      {
        !user && <SignIn />
      }
    </ClerkLoaded>
  )
}
