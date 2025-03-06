"use client" 
import { useRouter } from "next/navigation"
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal ({children } : {children: React.ReactNode}) {
     
    const router = useRouter ();
    const diaglogRef = useRef<ElementRef<"dialog"> > (null);

    useEffect(() =>{
    if (!diaglogRef.current?.open){
        diaglogRef.current?.showModal();

    }    
 
});
function onDismiss(){
    
    router.back();
};

return createPortal(
    <dialog ref={diaglogRef} 
    className="m-0 h-screen w-screen bg-black/90text-white "
    onClose={onDismiss}>
        {children}
     </dialog>,
     document.getElementById("modal-root")!
);
}