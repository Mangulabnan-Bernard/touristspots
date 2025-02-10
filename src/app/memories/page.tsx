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
  const { user } = useUser();
  const [uploadedImages, setUploadedImages] = useState<
    { id: number; url: string; isPrivate: boolean }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);

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

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
    setSelectedImages([]);
  };

  const toggleImageSelection = (id: number) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((selectedId) => selectedId !== id)
        : [...prevSelected, id]
    );
  };

  const deleteSelectedImages = async () => {
    if (selectedImages.length === 0) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete these ${selectedImages.length} file(s)?`
    );
    if (!confirmed) return;

    try {
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

  const makePrivate = async () => {
    if (selectedImages.length === 0) return;

    const confirmed = window.confirm(
      `Are you sure you want to make these ${selectedImages.length} file(s) private?`
    );
    if (!confirmed) return;

    try {
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

  const makePublic = async () => {
    if (selectedImages.length === 0) return;

    const confirmed = window.confirm(
      `Are you sure you want to make these ${selectedImages.length} file(s) public?`
    );
    if (!confirmed) return;

    try {
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
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Upload Your Memories
      </h1>

      {/* Upload Button and Selection Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
        <UploadButton
  endpoint="imageUploader"
  onClientUploadComplete={handleUploadComplete}
  className="border-blue-600 text-blue-600 bg-white px-1 py-0.5 text-sm rounded shadow-sm hover:bg-blue-100 transition-colors"
/>

        
        <button
        
          className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
          onClick={toggleSelectionMode}
        >
          {isSelectionMode ? (
            <>
              <span>Cancel</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          ) : (
            <>
              <span>Select</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </>
          )}
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <p className="text-center text-blue-500 font-medium">Uploading your image...</p>
      )}

      {/* Image Grid */}
      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6">
          {uploadedImages.map((image) => (
            <div
            key={image.id}
            className={`relative w-[140px] h-[140px] rounded-lg overflow-hidden shadow-md border-2 ${
              image.isPrivate ? "border-red-500" : "border-gray-300"
            } group`}
          >
              {/* Checkbox for Selection */}
              {isSelectionMode && (
                <input
                  type="checkbox"
                  className="absolute top-2 left-2 w-5 h-5 accent-blue-600 z-10 cursor-pointer"
                  checked={selectedImages.includes(image.id)}
                  onChange={() => toggleImageSelection(image.id)}
                />
              )}
              <Image
                src={image.url}
                alt={`Uploaded Memory ${image.id}`}
                width={500}
                height={500}
                className="object-cover w-full h-40 rounded-t-lg"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  image.isPrivate ? "border-red-500" : ""
                }`}
              >
                <p className="text-white font-medium">{image.isPrivate ? "Private" : "Public"}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons (Delete, Make Private, Make Public) */}
      {isSelectionMode && selectedImages.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-center items-center border-t border-gray-200 shadow-md">
          <button
            className="w-10 h-10 bg-red-500 text-white rounded-full flex justify-center items-center mx-2 hover:bg-red-600 transition-colors shadow-md"
            onClick={deleteSelectedImages}
          >
            🗑️
          </button>
          <button
            className="w-10 h-10 bg-yellow-500 text-white rounded-full flex justify-center items-center mx-2 hover:bg-yellow-600 transition-colors shadow-md"
            onClick={makePrivate}
          >
            🔒
          </button>
          <button
            className="w-10 h-10 bg-green-500 text-white rounded-full flex justify-center items-center mx-2 hover:bg-green-600 transition-colors shadow-md"
            onClick={makePublic}
          >
            🔓
          </button>
        </div>
      )}
    </main>
  );
}