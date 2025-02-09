/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { db } from "~/server/db"; // Import your Drizzle DB instance
import { images } from "~/server/db/schema"; // Import your schema
import { sql, desc, eq, inArray } from "drizzle-orm"; // Import sql helper and sorting utilities

export default function UploadPage() {
  const router = useRouter();
  const { user } = useUser(); // Access the current authenticated user
  const [uploadedImages, setUploadedImages] = useState<
    { id: number; url: string; isPrivate: boolean }[]
  >([]); // State to hold uploaded image data
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectionMode, setIsSelectionMode] = useState(false); // Toggle selection mode
  const [selectedImages, setSelectedImages] = useState<number[]>([]); // Track selected image IDs

  // Fetch images from the database
  useEffect(() => {
    if (user) {
      const fetchImages = async () => {
        try {
          const result = await db
            .select()
            .from(images)
            .where(sql`${images.userId} = ${user.id}`)
            .orderBy(desc(images.id));
          setUploadedImages(result.map((image) => ({ ...image, isPrivate: !!image.isPrivate })));
        } catch (error) {
          console.error("Failed to fetch images", error);
        }
      };
      fetchImages();
    } else {
      setUploadedImages([]);
    }
  }, [user]);

  // Handle image upload completion
  const handleUploadComplete = (res: { url: string }[]) => {
    const newImageUrl = res[0]?.url;
    if (newImageUrl && user) {
      setUploadedImages((prevImages) => [
        { id: Date.now(), url: newImageUrl, isPrivate: false },
        ...prevImages,
      ]);
    }
    setIsLoading(false);
  };

  // Toggle selection mode
  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    setSelectedImages([]);
  };

  // Handle image selection
  const toggleImageSelection = (id: number) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  // Delete selected images
  const deleteSelectedImages = async () => {
    try {
      if (selectedImages.length === 0) return;
      const ids = selectedImages.map(Number);
      await db.delete(images).where(inArray(images.id, ids));
      setUploadedImages((prevImages) =>
        prevImages.filter((image) => !ids.includes(image.id))
      );
      setSelectedImages([]);
    } catch (error) {
      console.error("Failed to delete images", error);
    }
  };

  // Make selected images private
  const makePrivate = async () => {
    try {
      if (selectedImages.length === 0) return;
      const ids = selectedImages.map(Number);
      await db
        .update(images)
        .set({ isPrivate: true })
        .where(inArray(images.id, ids));
      setUploadedImages((prevImages) =>
        prevImages.map((image) =>
          ids.includes(image.id) ? { ...image, isPrivate: true } : image
        )
      );
      setSelectedImages([]);
    } catch (error) {
      console.error("Failed to make images private", error);
    }
  };

  // Make selected images public
  const makePublic = async () => {
    try {
      if (selectedImages.length === 0) return;
      const ids = selectedImages.map(Number);
      await db
        .update(images)
        .set({ isPrivate: false })
        .where(inArray(images.id, ids));
      setUploadedImages((prevImages) =>
        prevImages.map((image) =>
          ids.includes(image.id) ? { ...image, isPrivate: false } : image
        )
      );
      setSelectedImages([]);
    } catch (error) {
      console.error("Failed to make images public", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Upload Your Memories</h1>
      <div className="flex justify-between items-center mb-6">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={handleUploadComplete}
        />
        <button
          className="text-gray-600 hover:text-black"
          onClick={toggleSelectionMode}
        >
          ☰ Select
        </button>
      </div>
      {isLoading && <p className="text-center text-blue-500">Uploading your image...</p>}
      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {uploadedImages.map((image) => (
            <div
              key={image.id}
              className={`relative rounded-lg shadow-md overflow-hidden ${
                image.isPrivate ? "border-2 border-red-500" : "border-2 border-black"
              }`}
            >
              {/* Checkbox for selection */}
              {isSelectionMode && (
                <input
                  type="checkbox"
                  className="absolute top-2 left-2 w-5 h-5"
                  checked={selectedImages.includes(image.id)}
                  onChange={() => toggleImageSelection(image.id)}
                />
              )}
              <Image
                src={image.url}
                alt={`Uploaded Memory ${image.id}`}
                width={300}
                height={200}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
      {isSelectionMode && selectedImages.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center items-center border-t border-gray-200">
          {/* Circular Buttons */}
          <button
            className="w-10 h-10 bg-red-500 text-white rounded-full flex justify-center items-center mx-2 hover:bg-red-600 transition-colors"
            onClick={deleteSelectedImages}
          >
            🗑️
          </button>
          <button
            className="w-10 h-10 bg-yellow-500 text-white rounded-full flex justify-center items-center mx-2 hover:bg-yellow-600 transition-colors"
            onClick={makePrivate}
          >
            🔒
          </button>
          <button
            className="w-10 h-10 bg-green-500 text-white rounded-full flex justify-center items-center mx-2 hover:bg-green-600 transition-colors"
            onClick={makePublic}
          >
            🔓
          </button>
        </div>
      )}
    </main>
  );
}