"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import { fetchUserImages, deleteImages, updateImagePrivacy } from "./actions";
import { SimpleUploadButton } from "./simple-upload-button";

export default function UploadPage() {
    const { user } = useUser();
    const [uploadedImages, setUploadedImages] = useState<
        { name: string; id: number; url: string; isPrivate: boolean }[]
    >([]);
    const [isSelectionMode, setIsSelectionMode] = useState(false);
    const [selectedImages, setSelectedImages] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const fetchImages = async (newImages?: any[]) => {
        if (newImages) {
            setUploadedImages((prev) => [...newImages, ...prev]);
        } else if (user) {
            try {
                const images = await fetchUserImages();
                setUploadedImages(images);
            } catch (error) {
                console.error("Error fetching images:", error);
                toast.error("Failed to load images.");
            }
        }
    };

    useEffect(() => {
        fetchImages();
    }, [user]);

    const resetSelection = () => {
        setIsSelectionMode(false);
        setSelectedImages([]);
        setSelectAll(false);
    };

    const deleteSelectedImages = async () => {
        if (selectedImages.length === 0) return;
        if (!confirm(`Are you sure you want to delete ${selectedImages.length} file(s)?`)) return;

        try {
            await deleteImages(selectedImages);
            setUploadedImages((prev) => prev.filter((img) => !selectedImages.includes(img.id)));
            resetSelection();
            toast.success("🗑️ Images deleted successfully!");
        } catch (error) {
            console.error("Error deleting images:", error);
            toast.error("Failed to delete images.");
        }
    };

    const togglePrivacy = async (isPrivate: boolean) => {
        if (selectedImages.length === 0) return;
        if (!confirm(`Are you sure you want to make ${selectedImages.length} file(s) ${isPrivate ? "private" : "public"}?`))
            return;

        try {
            await updateImagePrivacy(selectedImages, isPrivate);
            setUploadedImages((prev) =>
                prev.map((img) => (selectedImages.includes(img.id) ? { ...img, isPrivate } : img))
            );
            resetSelection();
            toast.success(isPrivate ? "🔒 Images made private!" : "🔓 Images made public!");
        } catch (error) {
            console.error("Error updating privacy:", error);
            toast.error("Failed to update privacy.");
        }
    };

    const toggleSelectionMode = () => {
        setIsSelectionMode(!isSelectionMode);
        setSelectedImages([]);
        setSelectAll(false);
    };

    const toggleImageSelection = (id: number) => {
        setSelectedImages((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((selectedId) => selectedId !== id)
                : [...prevSelected, id]
        );
    };

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedImages([]);
        } else {
            setSelectedImages(uploadedImages.map((image) => image.id));
        }
        setSelectAll(!selectAll);
    };

    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 font-sans p-8 pb-24">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                Upload Your Memories
            </h1>

            <div className="flex justify-between items-center mb-6">
                <SimpleUploadButton onUploadComplete={fetchImages} />
                <div className="flex gap-3">
                    <button className="text-gray-600 hover:text-gray-900 font-medium" onClick={toggleSelectionMode}>
                        {isSelectionMode ? "Cancel" : "Select"}
                    </button>
                    {isSelectionMode && (
                        <button className="text-gray-600 hover:text-gray-900 font-medium" onClick={toggleSelectAll}>
                            {selectAll ? "Deselect All" : "Select All"}
                        </button>
                    )}
                </div>
            </div>

            {uploadedImages.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6">
                    {uploadedImages.map((image, index) => (
                        <div
                            key={image.id ?? `${image.name}-${index}`} 
                            className={`relative w-[140px] h-[140px] rounded-lg overflow-hidden shadow-md border-2 ${
                                image.isPrivate ? "border-red-500" : "border-gray-300"
                            } group`}
                        >
                            {isSelectionMode && (
                                <input
                                    type="checkbox"
                                    className="absolute top-2 left-2 w-5 h-5 accent-blue-600 z-10 cursor-pointer"
                                    checked={selectedImages.includes(image.id)}
                                    onChange={() => toggleImageSelection(image.id)}
                                />
                            )}
                            <Link href={`/img/${image.id}`}>
                                <img
                                    src={image.url}
                                    alt={`Uploaded Memory ${image.name}`}
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-40 rounded-t-lg"
                                />
                                <div className="text-center text-sm text-gray-700 mt-2">{image.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No images uploaded yet.</p>
            )}

            {isSelectionMode && selectedImages.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center items-center">
                    <button
                        className="w-10 h-10 bg-red-500 text-white rounded-full mx-2 hover:bg-red-600 transition"
                        onClick={deleteSelectedImages}
                    >
                        🗑️
                    </button>
                    <button
                        className="w-10 h-10 bg-yellow-500 text-white rounded-full mx-2 hover:bg-yellow-600 transition"
                        onClick={() => togglePrivacy(true)}
                    >
                        🔒
                    </button>
                    <button
                        className="w-10 h-10 bg-green-500 text-white rounded-full mx-2 hover:bg-green-600 transition"
                        onClick={() => togglePrivacy(false)}
                    >
                        🔓
                    </button>
                </div>
            )}
        </main>
    );
}
