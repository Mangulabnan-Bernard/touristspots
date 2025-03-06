/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const touristSpots = [
  {
    id: 1,
    name: "Mount Arayat",
    description: "A majestic mountain known for its lush greenery and hiking trails.",
    imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRN0M1enzFWsUatdyh7ejk9CBYMNTQ5b2ERH0L",
    path: "/spots/mta",
  },
  {
    id: 2,
    name: "San Guillermo Parish Church",
    description: "A historic church with stunning architecture and religious significance.",
    imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRv0W3RL4zgMROLJDYbxKeXrpGsmBVCt7Eu5oa",
    path: "/spots/church",
  },
  {
    id: 3,
    name: "Miyamit Falls",
    description: "A breathtaking waterfall surrounded by nature's beauty.",
    imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRrCfiebOHjSWVQmRqxLYBJtcbMUp75r2gN9If",
    path: "/spots/falls",
  },
  {
    id: 4,
    name: "Sandbox Pampanga",
    description: "An adventure park offering thrilling activities like zip-lining and ATV rides.",
    imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRFyQRvZcK0QeEqUDxv1kNtAyVBi5b384WZmXs",
    path: "/spots/sandbox",
  },
  {
    id: 5,
    name: "Clark Museum and 4D Theater",
    description: "A museum showcasing Pampanga's history with an immersive 4D theater experience.",
    imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRnjutE3vIk5pOnFGovmXjSa8twVUilb0WEPz7",
    path: "/spots/clark-museum",
  },
  {
    id: 6,
    name: "Nayong Pilipino Clark",
    description: "A cultural park featuring replicas of historic sites and indigenous houses.",
    imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRqrUP1nZGxXPFJdrV54Wj98BhQYqEzfck3Du2",
    path: "/spots/nayongpark",
  },
];

// Reusable SpotCard Component
const SpotCard = ({ spot, onClick }: { spot: any; onClick: () => void }) => (
  <div
    className="bg-white rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={spot.imageUrl}
      alt={spot.name}
      width={400}
      height={250}
      className="w-full h-48 object-cover"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{spot.name}</h3>
      <p className="text-gray-500 text-sm">{spot.description}</p>
      <button
        className="mt-4 inline-block text-blue-600 underline hover:text-blue-800 transition-colors duration-200"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        aria-label={`Explore ${spot.name}`}
      >
        Explore More
      </button>
    </div>
  </div>
);

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % touristSpots.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-40">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4">Discover Pampanga</h1>
            <p className="text-xl">Explore the most beautiful tourist spots in Pampanga.</p>
          </div>
        </div>
        {/* Slideshow */}
        <div className="absolute inset-0">
          {touristSpots.map((spot, index) => (
            <div
              key={spot.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={spot.imageUrl}
                alt={spot.name}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-700 to-transparent">
                <h2 className="text-lg font-semibold text-white">{spot.name}</h2>
                <p className="text-sm text-white">{spot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tourist Spots */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Featured Tourist Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {touristSpots.map((spot) => (
            <SpotCard
              key={spot.id}
              spot={spot}
              onClick={() => router.push(spot.path)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
