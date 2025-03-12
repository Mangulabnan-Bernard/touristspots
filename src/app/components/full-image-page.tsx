import { clerkClient } from "@clerk/nextjs/server";
import { getMyImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
    const image = await getMyImage(props.id);

    const uploaderInfo = await (await clerkClient()).
        users.getUser(image.userId);

    return (
        <div className="flex h-full w-full min-w-0 bg-white text-black dark:bg-gray-800 dark:text-gray-200">
            {/* Image Section */}
            <div className="flex items-center justify-center w-1/2">
                <img
                    src={image.url}
                    alt={image.name}
                    className="max-h-full w-full w-auto object-contain"
                />
            </div>

            {/* Details Section */}
            <div className="flex flex-col w-1/2 border-l border-gray-300 dark:border-gray-700">
                <div className="border-b p-2 text-center text-lg">{image.name}</div>

                <div className="flex flex-col p-2">
                    <span className="text-gray-700 dark:text-gray-300">Uploaded By:</span>
                    <span>{uploaderInfo.fullName}</span>
                </div>

                <div className="flex flex-col p-2">
                    <span>Created at:</span>
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}
