import "server-only"; // Ensures this runs only on the server
import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { eq } from "drizzle-orm";
 
export async function getMyImages() {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

 const images = await db.query.images.findMany({
    where: (model) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}


export async function getMyImage(id: number) {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

 const images = await db.query.images.findFirst({
    where: (model, {eq}) => eq(model.id, id),
   });

   if (!images) throw new Error("Image not found");
   if (images.userId !== user.userId) throw new Error("Unauthorized");
  return images;
}
