"use server";

import { getMyImages } from "~/server/queries";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { inArray } from "drizzle-orm";

export async function fetchUserImages() {
  return getMyImages();
}

export async function deleteImages(ids: number[]) {
  await db.delete(images).where(inArray(images.id, ids));
}

export async function updateImagePrivacy(ids: number[], isPrivate: boolean) {
  await db.update(images).set({ isPrivate }).where(inArray(images.id, ids));
}
