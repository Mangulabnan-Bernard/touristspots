"use client";
import Image from "next/image";

export default function SandboxPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans transition duration-300">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR6TFSCQUO35VxI1EZXPuYLRrU47aFC9wNdKfv"
          alt="Sandbox Alviera"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Sandbox Alviera</h1>
            <p className="text-2xl mb-8 drop-shadow-lg">
              Exciting Outdoor Activities in Pampanga
            </p>
            <a
              href="#details"
              className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              About Sandbox Alviera
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Sandbox Alviera is a two-hectare adventure destination located within the Alviera mixed-use development in Pampanga. 
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              It offers a unique selection of thrilling rides and attractions for people of all ages, making it a perfect getaway for families and friends.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRvfgwUZzgMROLJDYbxKeXrpGsmBVCt7Eu5oal"
              alt="Sandbox Alviera Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-800 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Fun Attractions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Giant Swing", description: "The tallest swing in the Philippines, accommodating three guests at a time." },
            { title: "Aerial Walk Challenge", description: "A high rope adventure course testing agility, balance, and flexibility." },
            { title: "Avatar One", description: "The Philippines’ first roller coaster zip line." },
            { title: "ATV/UTV Ride", description: "Thrilling rides through the Pasig-Potrero river." },
            { title: "Outdoor Archery", description: "A fun activity for all skill levels." },
            { title: "Adventure Tower", description: "Wall climbing, rappelling, and free fall." },
            { title: "Splash Tub", description: "A water obstacle course for all ages." },
            { title: "City Kart Racing", description: "Go-karting on a state-of-the-art track." },
          ].map((attraction, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{attraction.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{attraction.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Plan Your Visit
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Sandbox Alviera is located in Porac, Pampanga. You can find more information about tickets, schedules, and events on their website or by contacting them directly.
        </p>
      </section>
    </main>
  );
}
