"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TopNav() {
  const router = useRouter();
  return (
<nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 text-xl font-semibold text-white backdrop-blur-md z-10 bg-gradient-to-b from-blue-200 to-blue-600">
{/* Logo */}
      <Link
        href="/"
        className="cursor-pointer text-2xl font-bold text-white hover:text-gray-300 transition duration-300"
        aria-label="home"
      >
        Pampanga
      </Link>

      {/* Navigation Links */}
      <div className="flex flex-row space-x-6">
        <Link
          href="/home"
          className="text-white hover:text-gray-300 transition duration-300"
          aria-label="home"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-gray-300 transition duration-300"
        >
          Contact
        </Link>

        {/* Signed In State */}
        <SignedIn>
          <Link
            href="/memories"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Memories
          </Link>
          <UserButton />
        </SignedIn>

        {/* Signed Out State */}
        <SignedOut>
          <SignInButton>
            <button className="h-8 bg-blue-700 text-white font-semibold text-sm px-6 rounded-md hover:bg-black transition duration-300">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
