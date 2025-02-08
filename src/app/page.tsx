"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [images, setImages] = useState<
    { id: number; top: string; left: string; animationDelay: string; direction: string }[]
  >([]);

  // Generate random positions, animation delays, and directions for images
  useEffect(() => {
    const generateRandomImages = () => {
      const imageCount = 30; // Number of floating images
      const newImages = Array.from({ length: imageCount }, (_, index) => ({
        id: index,
        top: `${Math.random() * 200}vh`, // Random vertical position
        left: `${Math.random() * 150}vw`, // Random horizontal position
        animationDelay: `${Math.random() * 10}s`, // Random delay for animation
        direction: Math.random() < 0.5 ? "left" : "right", // Random movement direction
      }));
      setImages(newImages);
    };

    generateRandomImages();
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      {/* Floating and Moving Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {images.map((image) => (
          <div
            key={image.id}
            className={`absolute w-32 h-32 bg-cover bg-center rounded-lg opacity-75 ${
              image.direction === "left" ? "animate-float-left" : "animate-float-right"
            }`}
            style={{
              top: image.top,
              left: image.left,
              animationDelay: image.animationDelay,
              backgroundImage: `url(https://picsum.photos/400?random=${image.id})`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6">Discover Pampanga</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore the most beautiful tourist spots in Pampanga.
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-transform transform hover:scale-105"
          onClick={() => router.push("/home")}
        >
          Explore More
        </button>
      </div>
    </main>
  );
}