
import { getMyImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default async function PhotoModal({
    params,
}: {
    params : {
        id:string;

    };
}){
    const photoId = (await params).id;  
    const idAsNumber =Number (photoId);
   
   if (Number.isNaN(idAsNumber)) throw new Error ("Invalid photo ID");
   const images = await getMyImage(idAsNumber);

   return (
    <Modal>
        {/* <img src={images.url} alt={images.name} className="w-96"/> */}
        <FullPageImageView id={idAsNumber}/>

   </Modal>
    
   );
}
