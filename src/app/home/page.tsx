"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';

// Define the Spot interface
interface Spot {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  path: string;
}

// Tourist spots data
const touristSpots: Spot[] = [
  { id: 1, name: "Mount Arayat", description: "A majestic mountain known for its lush greenery and hiking trails.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRN0M1enzFWsUatdyh7ejk9CBYMNTQ5b2ERH0L", path: "/spots/mta" },
  { id: 2, name: "San Guillermo Parish Church", description: "A historic church with stunning architecture and religious significance.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRv0W3RL4zgMROLJDYbxKeXrpGsmBVCt7Eu5oa", path: "/spots/church" },
  { id: 3, name: "Miyamit Falls", description: "A breathtaking waterfall surrounded by nature's beauty.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRrCfiebOHjSWVQmRqxLYBJtcbMUp75r2gN9If", path: "/spots/falls" },
  { id: 4, name: "Sandbox Pampanga", description: "An adventure park offering thrilling activities like zip-lining and ATV rides.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRFyQRvZcK0QeEqUDxv1kNtAyVBi5b384WZmXs", path: "/spots/sandbox" },
  { id: 5, name: "Clark Museum and 4D Theater", description: "A museum showcasing Pampanga's history with an immersive 4D theater experience.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRnjutE3vIk5pOnFGovmXjSa8twVUilb0WEPz7", path: "/spots/clark-museum" },
  { id: 6, name: "Nayong Pilipino Clark", description: "A cultural park featuring replicas of historic sites and indigenous houses.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRqrUP1nZGxXPFJdrV54Wj98BhQYqEzfck3Du2", path: "/spots/nayongpark" },
  { id: 7, name: "Mount Arayat", description: "A majestic mountain known for its lush greenery and hiking trails.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRN0M1enzFWsUatdyh7ejk9CBYMNTQ5b2ERH0L", path: "/spots/mta" },
  { id: 8, name: "San Guillermo Parish Church", description: "A historic church with stunning architecture and religious significance.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRv0W3RL4zgMROLJDYbxKeXrpGsmBVCt7Eu5oa", path: "/spots/church" },
  { id: 9, name: "Miyamit Falls", description: "A breathtaking waterfall surrounded by nature's beauty.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRrCfiebOHjSWVQmRqxLYBJtcbMUp75r2gN9If", path: "/spots/falls" },
  { id: 10, name: "Sandbox Pampanga", description: "An adventure park offering thrilling activities like zip-lining and ATV rides.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRFyQRvZcK0QeEqUDxv1kNtAyVBi5b384WZmXs", path: "/spots/sandbox" },
  { id: 11, name: "Clark Museum and 4D Theater", description: "A museum showcasing Pampanga's history with an immersive 4D theater experience.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRnjutE3vIk5pOnFGovmXjSa8twVUilb0WEPz7", path: "/spots/clark-museum" },
  { id: 12, name: "Nayong Pilipino Clark", description: "A cultural park featuring replicas of historic sites and indigenous houses.", imageUrl: "https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRqrUP1nZGxXPFJdrV54Wj98BhQYqEzfck3Du2", path: "/spots/nayongpark" },
];

// Reusable Spot Card Component
const SpotCard = ({ spot, onClick }: { spot: Spot; onClick: () => void }) => (
  <Card className="rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer bg-white dark:bg-gray-800 p-4">
    <Image src={spot.imageUrl} alt={spot.name} width={400} height={250} className="w-full h-48 object-cover rounded-md" />
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{spot.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{spot.description}</p>
      <Button variant="link" onClick={(e) => { e.stopPropagation(); onClick(); }} aria-label={`Explore ${spot.name}`} className="mt-2">
        Explore More
      </Button>
    </div>
  </Card>
);

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % touristSpots.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white flex flex-col items-center py-10">
      
      {/* Hero Section (Boxed) */}
      <section className="relative w-[90%] md:w-[80%] lg:w-[70%] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden mb-10">
        <div className="relative h-[350px]">
          {touristSpots.map((spot, index) => (
            <div key={spot.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}>
              <Image src={spot.imageUrl} alt={spot.name} fill className="object-cover" priority={index === 0} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-800 to-transparent">
                <h2 className="text-lg font-semibold text-white">{spot.name}</h2>
                <p className="text-sm text-gray-300">{spot.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Discover Pampanga</h1>
            <p className="text-lg">Explore the most beautiful tourist spots in Pampanga.</p>
          </div>
        </div>
      </section>
      

      {/* Featured Tourist Spots (Boxed Grid) */}
      <section className="w-[90%] md:w-[80%] lg:w-[70%] bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Featured Tourist Spots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {touristSpots.map((spot) => (
            <SpotCard key={spot.id} spot={spot} onClick={() => router.push(spot.path)} />
          ))}
        </div>
      </section>
    </main>
  );
}
