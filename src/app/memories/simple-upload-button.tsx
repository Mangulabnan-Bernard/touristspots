"use client";

import { useRouter } from "next/navigation";
import { usePostHog } from "posthog-js/react";
import{ use } from "react";
import { toast } from "sonner";
import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useuploadThing

type Input = Parameters<typeof useUploadThing>;


const useUploadThingInputProps =(...args:Input) => {

const $ut = useUploadThing(...args);

const onChange = async (e: React.ChangeEvent<HTMLInputElement>)=>{
if (!e.target.files) return;

const selectedFiles = Array.from(e.target.files);

const result = await $ut.startUpload(selectedFiles);

console.log("uploaded files", result);// TOD0: persist result in state maybe?
};

return { 
    inputProps: {
        onChange,
multiple:($ut.routeConfig?.image?.maxFileCount ??1)>1,
     accept: "image/*",
    },
     isuploading: $ut.isUploading,
};
};

function UploadSVG(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>

    );
}

function LoadingSpinnerSVG(){
  return (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white" >
    <g className="spinner_Wezc"><circle cx="12" cy="2.5" r="1.5" opacity=".14"/><circle cx="16.75" cy="3.77" r="1.5" opacity=".29"/>
    <circle cx="20.23" cy="7.25" r="1.5" opacity=".43"/><circle cx="21.50" cy="12.00" r="1.5" opacity=".57"/><circle cx="20.23" cy="16.75" r="1.5" opacity=".71"/><circle cx="16.75" cy="20.23" r="1.5" opacity=".86"/>
    <circle cx="12" cy="21.5" r="1.5"/></g></svg>);
}

export function SimpleUploadButton({
  onUploadComplete,
}: {
  onUploadComplete?: () => any;
}) {

    const router = useRouter();
    const posthog = usePostHog();

    const {inputProps} = useUploadThingInputProps("imageUploader", {
        onUploadBegin(){
          posthog.capture("Upload Begin");
            toast (
              <div className="flex item-center gap-2 text-white">
                <LoadingSpinnerSVG/>
                <span className="text-lg"> Uploading....</span>
              </div>,
              {
                duration: 100000,
                id: "upload-begin",
              });
      },
        onClientUploadComplete(){
          toast (<span className="text-lg">"Upload Complete!"</span>);
            toast.dismiss("upload-begin");
            // setTimeout(() => {
            //   toast.success("Upload Complete!");
            // }, 100); 
            onUploadComplete?.();
             router.refresh();
    },
});
    
    return(
        <div>
    
    <label htmlFor="upload-button" className="cursor-pointer">
        <UploadSVG/>
    </label>
    <input type="file" id="upload-button" {...inputProps}
    className="sr-only" />
    </div>

    );
}
    