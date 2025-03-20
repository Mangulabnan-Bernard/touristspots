"use client" 
import { useRouter } from "next/navigation"
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal ({children } : {children: React.ReactNode}) {
     
    const router = useRouter ();
    const dialogRef = useRef<ElementRef<"dialog"> > (null);

    useEffect(() =>{
    if (!dialogRef.current?.open){
        dialogRef.current?.showModal();

    }    
 
});
function onDismiss(){
    
    router.back();
};

return createPortal(
    <dialog ref={dialogRef} 
   className="fixed inset-0 flex items-center justify-center bg-black/90"
    onClose={onDismiss}>
        <div className="bg-transparent text-white p-4 rounded-lg">
        {children}
      </div>
    </dialog>,
     document.getElementById("modal-root")!
);
}