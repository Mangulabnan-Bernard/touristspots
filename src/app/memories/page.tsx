"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
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

    useEffect(() => {
        if (user) fetchUserImages().then(setUploadedImages).catch(() => toast.error("Failed to load images."));
    }, [user]);

    const resetSelection = () => {
        setIsSelectionMode(false);
        setSelectedImages([]);
        setSelectAll(false);
    };

    const deleteSelectedImages = async () => {
        if (!selectedImages.length || !confirm(`Delete ${selectedImages.length} file(s)?`)) return;
        try {
            await deleteImages(selectedImages);
            setUploadedImages((prev) => prev.filter((img) => !selectedImages.includes(img.id)));
            resetSelection();
            toast.success("🗑️ Images deleted successfully!");
        } catch {
            toast.error("Failed to delete images.");
        }
    };

    const togglePrivacy = async (isPrivate: boolean) => {
        if (!selectedImages.length || !confirm(`Make ${selectedImages.length} file(s) ${isPrivate ? "private" : "public"}?`)) return;
        try {
            await updateImagePrivacy(selectedImages, isPrivate);
            setUploadedImages((prev) =>
                prev.map((img) => (selectedImages.includes(img.id) ? { ...img, isPrivate } : img))
            );
            resetSelection();
            toast.success(isPrivate ? "🔒 Images made private!" : "🔓 Images made public!");
        } catch {
            toast.error("Failed to update privacy.");
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans p-8 pb-24 transition">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">Upload Your Memories</h1>

            <div className="flex justify-between items-center mb-6">
            <SimpleUploadButton onUploadComplete={() => fetchUserImages().then(setUploadedImages)} />
            <div className="flex gap-3">
                    <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                        onClick={() => setIsSelectionMode(!isSelectionMode)}>
                        {isSelectionMode ? "Cancel" : "Select"}
                    </button>
                    {isSelectionMode && (
                        <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                            onClick={() => {
                                setSelectAll(!selectAll);
                                setSelectedImages(selectAll ? [] : uploadedImages.map((img) => img.id));
                            }}>
                            {selectAll ? "Deselect All" : "Select All"}
                        </button>
                    )}
                </div>
            </div>

            {uploadedImages.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-6">
                    {uploadedImages.map((image, index) => (
                        <div key={image.id ?? `${image.name}-${index}`} className={`relative w-[140px] h-[140px] rounded-lg overflow-hidden shadow-md border-2 
                            ${image.isPrivate ? "border-red-500" : "border-gray-300 dark:border-gray-600"} group transition`}>
                            {isSelectionMode && (
                                <input type="checkbox" className="absolute top-2 left-2 w-5 h-5 accent-blue-600 dark:accent-cyan-500 z-10 cursor-pointer"
                                    checked={selectedImages.includes(image.id)}
                                    onChange={() =>
                                        setSelectedImages((prev) =>
                                            prev.includes(image.id) ? prev.filter((id) => id !== image.id) : [...prev, image.id]
                                        )
                                    }
                                />
                            )}
                            <Link href={`/img/${image.id}`}>
                                <img src={image.url} alt={image.name} width={500} height={500}
                                    className="object-cover w-full h-40 rounded-t-lg" />
                                <div className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">{image.name}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">No images uploaded yet.</p>
            )}

            {isSelectionMode && selectedImages.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 z-50 p-4 flex justify-center items-center bg-white dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
                    <button className="w-10 h-10 bg-red-500 text-white rounded-full mx-2 hover:bg-red-600 transition"
                        onClick={deleteSelectedImages}>
                        🗑️
                    </button>
                    <button className="w-10 h-10 bg-yellow-500 text-white rounded-full mx-2 hover:bg-yellow-600 transition"
                        onClick={() => togglePrivacy(true)}>
                        🔒
                    </button>
                    <button className="w-10 h-10 bg-green-500 text-white rounded-full mx-2 hover:bg-green-600 transition"
                        onClick={() => togglePrivacy(false)}>
                        🔓
                    </button>
                </div>
            )}
        </main>
    );
}
