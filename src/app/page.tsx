"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const videoUrl =
    "https://qbo5h06ezf.ufs.sh/f/S4R4KlDobPU9ZLolj8HTB0xvrhitKM6e7IEWuYP9LXao3l4S";

  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center text-gray-800 overflow-hidden">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
           
          src={videoUrl}
        />
      </div>

      {/* Main Content */}
      <h1 className="text-4xl font-serif font-bold text-blue-900 drop-shadow-lg">
        Discover Pampanga
      </h1>
      <p className="text-base font-mono text-blue-500 drop-shadow-lg mt-2"></p>
      <p className="text-base font-mono text-blue-500 drop-shadow-lg mt-2">
        Explore the most beautiful tourist spots in Pampanga.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          className="w-32 h-8 flex items-center justify-center bg-blue-900 text-white rounded-lg text-base font-semibold font-sans transition-transform transform hover:scale-105"
          onClick={() => router.push("/home")}
        >
          Explore More
        </button>

        <button
          className="w-32 h-8 flex items-center justify-center bg-green-700 text-white rounded-lg text-base font-semibold font-sans transition-transform transform hover:scale-105"
          onClick={() => router.push("/highlights")}
        >
          View Highlights
        </button>
      </div>
    </main>
  );
}
