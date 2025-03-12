"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export default function HomePage() {
  const router = useRouter();

  const [floatingImages, setFloatingImages] = useState<
    { id: number; url: string; top: number; left: number }[]
  >([]);

  const [allImages, setAllImages] = useState<{ id: number; url: string }[]>([]);

  useEffect(() => {
    // Fetch only public images from the database
    const fetchImages = async () => {
      try {
        const result = await db
          .select()
          .from(images)
          .where(eq(images.isPrivate, false)); // Filter out private images

        if (result.length === 0) {
          console.error("No images found in the database.");
          return;
        }

        setAllImages(result);
        initializeFloatingImages(result);
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };

    fetchImages();
  }, []);

  // Initialize floating images with random positions
  const initializeFloatingImages = (images: { id: number; url: string }[]) => {
    if (images.length === 0) return;

    const initialImages = images.map((image) => ({
      id: image.id,
      url: image.url,
      top: Math.random() * 100, // Random vertical position
      left: Math.random() * 100, // Random horizontal position
    }));

    setFloatingImages(initialImages);
  };

  useEffect(() => {
    // Control movement of floating images
    const interval = setInterval(() => {
      setFloatingImages((prevImages) =>
        prevImages.map((img) => {
          let newLeft = img.left + 0.1;
          if (newLeft > 100) {
            newLeft = -10;
          }
          return { ...img, left: newLeft };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="absolute w-[10vw] h-[10vh] bg-cover bg-center rounded-md opacity-80 transition-transform duration-200"
            style={{
              top: `${image.top}vh`,
              left: `${image.left}vw`,
              backgroundImage: `url(${image.url})`,
            }}
          ></div>
        ))}
      </div>

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
