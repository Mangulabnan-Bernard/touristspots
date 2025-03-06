"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TopNav() {
  const router = useRouter();
  return (
<nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 text-xl
 font-semibold text-black backdrop-blur-md z-10 bg-transparent">
{/* Logo */} 
{/* border bg-blue-600 rounded-xl */}
  <Link
    href="/"
    className="cursor-pointer text-xl  font-bold text-black hover:text-gray-300 transition duration-300"
    aria-label="home"
  >
    Pampanga
  </Link>

  {/* Navigation Links */}
  <div className="flex flex-row space-x-6">
    <Link
      href="/home"
      className="text-black text-base hover:text-gray-300 transition duration-300"
      aria-label="home"
    >
      Home
    </Link>
    <Link
      href="/about"
      className="text-black text-base hover:text-gray-300 transition duration-300"
    >
      About
    </Link>
    <Link
      href="/contact"
      className="text-black text-base hover:text-gray-300 transition duration-300"
    >
      Contact
    </Link>

    {/* Signed In State */}
    <SignedIn>
      <Link
    href="/memories"
    className="text-black text-base  hover:text-gray-300 transition duration-300"
      >
    Memories
      </Link>
      <UserButton />
    </SignedIn>

    {/* Signed Out State */}
    <SignedOut>
      <SignInButton>
    <button className="h-8 bg-gray-400 text-black font-semibold text-sm px-6 rounded-md hover:bg-black transition duration-300">
      Sign In
    </button>
      </SignInButton>
    </SignedOut>
  </div>
    </nav>
  );
}
