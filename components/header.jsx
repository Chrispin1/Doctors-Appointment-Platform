import { SignedIn, UserButton } from "@clerk/nextjs";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 border-b w-full bg-background/80 backdrop-blur-md z-10 supports-background-filter:bg-background/60">
      <nav className="mx-auto px-4 flex items-center justify-between h-16 ">
        <Link href="/">
          <Image
            src="/logo-single.png"
            alt="Logo"
            height={60}
            width={200}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-2">
          <SignedOut>
            <SignInButton>
              <Button variant="secondary">Sign In</Button>
            </SignInButton>
          </SignedOut>
          {/* Show the user button when the user is signed in */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
