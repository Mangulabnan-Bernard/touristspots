/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

export default function HomePage() {
  const router = useRouter();
  
  // State to store images that will be displayed
  const [uploadedImages, setUploadedImages] = useState<
    { id: number; url: string; top: string; left: string; direction: string }[]
  >([]);
  
  // State to store all fetched images from the database
  const [allFetchedImages, setAllFetchedImages] = useState<
    { id: number; url: string }[]
  >([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch images from the database
        const result = await db.select().from(images);
        const shuffledImages = result.sort(() => Math.random() - 0.5);
        setAllFetchedImages(shuffledImages);
        updateDisplayedImages(shuffledImages.slice(0, 30));
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };
    fetchImages();
  }, []);

  // Function to update the displayed images with random positions and directions
  const updateDisplayedImages = (imagesToDisplay: { id: number; url: string }[]) => {
    const newImages = imagesToDisplay.map((image) => ({
      id: image.id,
      url: image.url,
      top: `${Math.random() * 200}vh`,
      left: `${Math.random() * 150}vw`,
      direction: Math.random() < 0.5 ? "left" : "right",
    }));
    setUploadedImages(newImages);
  };

  useEffect(() => {
    // Interval to periodically update the displayed images
    const interval = setInterval(() => {
      if (allFetchedImages.length > 30) {
        const shuffledImages = [...allFetchedImages].sort(() => Math.random() - 0.5);
        updateDisplayedImages(shuffledImages.slice(0, 20));
      }
    }, 40000);
    return () => clearInterval(interval);
  }, [allFetchedImages]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      {/* Background floating images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {uploadedImages.map((image) => (
          <div
            key={image.id}
            className={`absolute w-32 h-32 bg-cover bg-center rounded-lg opacity-75 animate-float-${image.direction}`}
            style={{
              top: image.top,
              left: image.left,
              backgroundImage: `url(${image.url})`,
            }}
          ></div>
        ))}
      </div>
      {/* Main content section */}
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
