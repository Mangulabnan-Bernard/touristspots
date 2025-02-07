"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-semibold bg-gray-800 text-white">
      <Link href="/" className="cursor-pointer text-2xl font-bold text-white hover:text-gray-300" aria-label="home">
        Pampanga 
      </Link>
      <div className="flex flex-row space-x-6">
      <Link href="/" className="text-blue-400 hover:text-blue-600" aria-label="home">Home</Link>

        <Link href="/about" className="text-blue-400 hover:text-blue-600">About</Link>
        <Link href="/contact" className="text-blue-400 hover:text-blue-600">Contact</Link>

        <SignedIn>
          <Link href="/memories" className="text-blue-400 hover:text-blue-600">Memories</Link>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-md hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition duration-300">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
