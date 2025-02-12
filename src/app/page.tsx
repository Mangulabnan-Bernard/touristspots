"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { eq } from "drizzle-orm";

export default function HomePage() {
  const router = useRouter();
  const [allImages, setAllImages] = useState<{ id: number; url: string }[]>([]);
  const [videoUrl, setVideoUrl] = useState<string>("");

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
        const shuffledImages = result.sort(() => Math.random() - 0.5);
        setAllImages(shuffledImages);
      } catch (error) {
        console.error("Failed to fetch images", error);
      }
    };

    const fetchVideo = async () => {
      setVideoUrl(
        "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRn1JM6RvIk5pOnFGovmXjSa8twVUilb0WEPz7"
      );
    };

    fetchImages();
    fetchVideo();
  }, []);

  return (
    <main className="relative w-full h-screen flex flex-col items-center justify-center text-gray-800 overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {videoUrl && (
          <video
            className="w-full h-full object-cover translate-y-[4%]"
            autoPlay
            muted
            loop
            playsInline
            src={videoUrl}
          />
        )}
      </div>

      {/* Floating Images */}
      <div className="absolute bottom-24 left-0 w-full overflow-hidden z-10">
        <div className="flex animate-float-left space-x-8">
          {[...allImages, ...allImages].map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="w-[35vw] sm:w-[30vw] md:w-[25vw] lg:w-[20vw] h-[20vw] bg-cover bg-center rounded-md opacity-90"
              style={{ backgroundImage: `url(${image.url})`, height: "auto" }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content Without Div */}
      <h1 className="text-5xl font-serif font-bold text-blue-900 drop-shadow-lg">
        Discover Pampanga
      </h1>
      <p className="text-lg font-mono text-blue-500 drop-shadow-lg mt-2">
        Explore the most beautiful tourist spots in Pampanga.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          className="w-36 h-10 flex items-center justify-center bg-blue-900 text-white rounded-lg text-lg font-semibold font-sans transition-transform transform hover:scale-105"
          onClick={() => router.push("/home")}
        >
          Explore More
        </button>

        <button
          className="w-36 h-10 flex items-center justify-center bg-green-700 text-white rounded-lg text-lg font-semibold font-sans transition-transform transform hover:scale-105"
          onClick={() => router.push("/highlights")}
        >
          View Highlights
        </button>
      </div>
    </main>
  );
}
