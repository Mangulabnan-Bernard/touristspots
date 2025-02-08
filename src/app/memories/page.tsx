// src/app/memories/page.tsx
/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { db } from "~/server/db"; // Import your Drizzle DB instance
import { images } from "~/server/db/schema"; // Import your schema
import { sql } from "drizzle-orm"; // Import sql helper for custom queries

export default function UploadPage() {
  const router = useRouter();
  const { user } = useUser(); // Access the current authenticated user
  const [uploadedImages, setUploadedImages] = useState<string[]>([]); // State to hold uploaded image URLs
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchImages = async () => {
        try {
          const result = await db
            .select()
            .from(images)
            .where(sql`${images.userId} = ${user.id}`);
          const imageUrls = result.map((image) => image.url);
          setUploadedImages(imageUrls);
        } catch (error) {
          console.error("Failed to fetch images", error);
        }
      };
      fetchImages();
    } else {
      setUploadedImages([]); // Clear images if user is not logged in
    }
  }, [user]); // Run when `user` state changes (on login/logout)

  const handleUploadComplete = (res: { url: string }[]) => {
    const newImageUrl = res[0]?.url;
    if (newImageUrl) {
      setUploadedImages((prevImages) => [...prevImages, newImageUrl]);
    }
    setIsLoading(false);
    router.refresh();
  };

  // If the user is not logged in, display a message
  if (!user) {
    return (
      <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Please log in to upload images
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Upload Your Memories</h1>
      <div className="text-center mb-6">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={handleUploadComplete}
        />
      </div>
      {isLoading && <p className="text-center text-blue-500">Uploading your image...</p>}
      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {uploadedImages.map((imageUrl, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-black">
              <Image
                src={imageUrl}
                alt={`Uploaded Memory ${index + 1}`}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}