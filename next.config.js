import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
        domains: [
                "mxatayqbwx.ufs.sh", // Correct domain
                "utfs.io",
              ],
  },
};const touristSpots = [
        {
          id: 1,
          name: "Mount Arayat",
          description:
            "A majestic mountain known for its lush greenery and hiking trails.",
          imageUrl: "https://example.com/images/mount-arayat.jpg", // Replace with a real image URL
        },
        {
          id: 2,
          name: "San Guillermo Parish Church",
          description:
            "A historic church with stunning architecture and religious significance.",
          imageUrl: "https://example.com/images/san-guillermo-church.jpg", // Replace with a real image URL
        },
        {
          id: 3,
          name: "Miyamit Falls",
          description:
            "A breathtaking waterfall surrounded by nature's beauty.",
          imageUrl: "https://example.com/images/miyamit-falls.jpg", // Replace with a real image URL
        },
      ];
      
   
export default config;
