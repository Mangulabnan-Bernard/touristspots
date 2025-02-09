/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "~/server/db"; // Import your Drizzle DB instance
import { images } from "~/server/db/schema"; // Import your schema

export default function HomePage() {
  const router = useRouter();
  const [uploadedImages, setUploadedImages] = useState<
    { id: number; url: string; top: string; left: string; animationDelay: string; direction: string }[]
  >([]);
  const [allFetchedImages, setAllFetchedImages] = useState<
    { id: number; url: string }[]
  >([]);

  // Fetch images from the database
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch all images from the database (uploaded by all users)
        const result = await db.select().from(images);

        // Log the fetched images for debugging
        console.log("Fetched images:", result);

        // Shuffle the images randomly
        const shuffledImages = result.sort(() => Math.random() - 0.5);

        // Store all fetched images in state
        setAllFetchedImages(shuffledImages);

        // Display the first 20 images
        updateDisplayedImages(shuffledImages.slice(0, 20));
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };

    fetchImages();
  }, []);

  // Function to update displayed images
  const updateDisplayedImages = (imagesToDisplay: { id: number; url: string }[]) => {
    const newImages = imagesToDisplay.map((image) => ({
      id: image.id,
      url: image.url,
      top: `${Math.random() * 200}vh`, // Random vertical position
      left: `${Math.random() * 150}vw`, // Random horizontal position
      animationDelay: `${Math.random() * 10}s`, // Random delay for animation
      direction: Math.random() < 0.5 ? "left" : "right", // Random movement direction
    }));

    setUploadedImages(newImages);
  };

  // Rotate images every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (allFetchedImages.length > 20) {
        // Shuffle the images again
        const shuffledImages = [...allFetchedImages].sort(() => Math.random() - 0.5);

        // Update the displayed images with the next 20 images
        updateDisplayedImages(shuffledImages.slice(0, 20));
      }
    }, 5000); // Change images every 30 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [allFetchedImages]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      {/* Floating and Moving Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {uploadedImages.map((image) => (
          <div
            key={image.id}
            className={`absolute w-32 h-32 bg-cover bg-center rounded-lg opacity-75 ${
              image.direction === "left" ? "animate-float-left" : "animate-float-right"
            }`}
            style={{
              top: image.top,
              left: image.left,
              animationDelay: image.animationDelay,
              backgroundImage: `url(${image.url})`,
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