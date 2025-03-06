"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";

// Inferred input type from useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useuploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File input changed:", e.target.files);
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("Uploaded files", result);
    // Optionally persist result in state if needed
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

function UploadSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3ZM9.75 6.75v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z" />
      <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
    </svg>
  );
}

type SimpleUploadButtonProps = {
  onUploadComplete: () => void;
};

export function SimpleUploadButton({ onUploadComplete }: SimpleUploadButtonProps) {
  // Pass the callback to our upload hook instead of using router.refresh()
  const { inputProps, isUploading } = useuploadThingInputProps("imageUploader", {
    onClientUploadComplete() {
      onUploadComplete();
    },
  });
  
  return (
    <div>
      <label htmlFor="upload-button" className="cursor-pointer flex items-center space-x-2">
        <UploadSVG />
        {!isUploading && <span>Upload Image</span>}
        {isUploading && <span>Uploading...</span>}
      </label>
      <input type="file" id="upload-button" {...inputProps} className="sr-only" />
    </div>
  );
}
