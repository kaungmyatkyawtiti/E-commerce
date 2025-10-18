import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/globals.css";
import { Quicksand } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "./ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import ThemedApp from "./ThemedApp";

export const metadata: Metadata = {
  title: {
    default: "Shopcart Online Store",
    template: "%s - Shopcart Online Store",
  },
  description: "Shopcart Online Store Project By Nott Nott",
};

interface Props {
  readonly children: ReactNode;
}

const mulist = Quicksand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <StoreProvider>
        <html
          lang="en"
          className={mulist.className} suppressHydrationWarning
        >
          <head />
          <body>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ThemedApp>
                {children}
              </ThemedApp>
            </ThemeProvider>
          </body>
        </html>
      </StoreProvider>
    </ClerkProvider>
  );
}
