"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export default function HomePage() {
  const router = useRouter();

  const [floatingImages, setFloatingImages] = useState<
    { id: number; url: string; top: number; left: number }[]
  >([]);

  const [allImages, setAllImages] = useState<{ id: number; url: string }[]>([]);

  useEffect(() => {
    // Fetch images from the database
    const fetchImages = async () => {
      try {
        const result = await db.select().from(images);
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

    // Initialize with dynamic random positions for each image
    const initialImages = images.map((image) => ({
      id: image.id,
      url: image.url,
      top: Math.random() * 100, // Random vertical position between 0-100%
      left: Math.random() * 100, // Random horizontal position between 0-100%
    }));

    setFloatingImages(initialImages);
  };

  useEffect(() => {
    // This effect controls the movement of floating images
    const interval = setInterval(() => {
      setFloatingImages((prevImages) =>
        prevImages.map((img) => {
          // Adjust the speed of the horizontal movement by changing the increment
          let newLeft = img.left + 0.1; // Increase to make it move faster or decrease to slow down

          // When the image moves off the screen, it starts from the left side again
          if (newLeft > 100) {
            newLeft = -10; // Adjust this value to change when the image reappears
          }

          return { ...img, left: newLeft };
        })
      );
    }, 50); // This controls how fast the images move. Lower the value to speed up the movement, increase it to slow it down.

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingImages.map((image, index) =>
          image ? (
            <div
              key={`${image.id}-${index}`} // Ensured unique key for each image
              className="absolute w-[10vw] h-[10vh] bg-cover bg-center rounded-md opacity-80 transition-transform duration-200"
              style={{
                top: `${image.top}vh`, // Vertical position of the image
                left: `${image.left}vw`, // Horizontal position of the image
                backgroundImage: `url(${image.url})`, // Image source URL
              }}
            ></div>
          ) : null
        )}
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-6">Discover Pampanga</h1>
        <p className="text-lg text-gray-600 mb-8">Explore the most beautiful tourist spots in Pampanga.</p>
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
