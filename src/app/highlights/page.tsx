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
    const fetchImages = async () => {
      try {
        const result = await db
          .select()
          .from(images)
          .where(eq(images.isPrivate, false));

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

  const initializeFloatingImages = (images: { id: number; url: string }[]) => {
    if (images.length === 0) return;

    const initialImages = images.map((image) => ({
      id: image.id,
      url: image.url,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));

    setFloatingImages(initialImages);
  };

  useEffect(() => {
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
      {/* Floating Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="absolute w-[15vw] h-[15vh] bg-cover bg-center rounded-md transition-transform duration-200"
            style={{
              top: `${image.top}vh`,
              left: `${image.left}vw`,
              backgroundImage: `url(${image.url})`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Without Div */}
      <h1 className="text-5xl font-serif text-blue-900 drop-shadow-lg">
      A Journey to Remember
      </h1>

      <p className="text-lg font-serif text-blue-500 drop-shadow-lg mt-2">
       Immerse yourself in the heart of Pampanga, where adventure and tradition come together.
      </p>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          className="w-32 h-10 flex items-center justify-center bg-blue-800 text-white rounded-lg text-md font-semibold transition-transform transform hover:scale-105"
          onClick={() => router.push("/home")}
        >
          Explore More
        </button>

        <button
          className="w-32 h-10 flex items-center justify-center bg-green-800 text-white rounded-lg text-md font-semibold transition-transform transform hover:scale-105"
          onClick={() => router.push("/")}
        >
          Return
        </button>
      </div>
    </main>
  );
}
