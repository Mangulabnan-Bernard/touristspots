"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";

type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const selectedFiles = Array.from(e.target.files);

        const result = await $ut.startUpload(selectedFiles);

        console.log("Uploaded files", result);

        return result || [];
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" > <path strokeLinecap="round" strokeLinejoin="round"
       d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
       </svg>
    );
}

export function SimpleUploadButton({onUploadComplete,}: {
    onUploadComplete?: (newImages: any[]) => void;
}) {
    const router = useRouter();
    const { inputProps } = useUploadThingInputProps("imageUploader");

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = await inputProps.onChange(e);

        if (uploadedFiles && uploadedFiles.length > 0) {
            onUploadComplete?.(uploadedFiles); 
            router.refresh();  
        }
    };

    return (
        <div>
            <label htmlFor="upload-button" className="cursor-pointer">
                <UploadSVG />
            </label>
            <input type="file" id="upload-button" {...inputProps} onChange={handleUpload} className="sr-only" />
        </div>
    );
}
