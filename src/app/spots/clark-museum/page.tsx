/* eslint-disable react/no-unescaped-entities */
// src/app/spots/clark-museum/page.tsx
"use client";
import Image from "next/image";

export default function ClarkMuseumPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 font-sans transition duration-300">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR95dxKMRcsQpayPXj3tq8TWdhlzmBOfG0n5gZ"
          alt="Clark Museum and 4D Theater"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          className="brightness-75 animate-fade-in"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Clark Museum and 4D Theater</h1>
            <p className="text-2xl mb-8 drop-shadow-lg">A Journey Through Clark's History</p>
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
              About Clark Museum and 4D Theater
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              The newly renovated Clark Museum features an expanded collection of artifacts, replicas, dioramas,
              photographs, murals, and interactive displays that showcase the history of Clark, Pampanga, and the
              surrounding areas.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              The museum tells the story of the Filipino spirit of bravery, industry, and ingenuity through four
              galleries. It covers Clark's growth and its social and economic advances. The 4D Theater offers a
              20-minute documentary film, <strong>"Risen from the Ashes,"</strong> which highlights Clark's rich history,
              including a spectacular recreation of the 1991 Mount Pinatubo eruption.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRj6hqhAkFU4ONBWSVlKRzfPaIZAHt7kJgqGnr"
              alt="Clark Museum Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-800 transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">Museum Galleries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Gallery 1: Between Arayat and Pinatubo",
              description: "The geological and geographical context of Clark.",
            },
            {
              title: "Gallery 2: People’s Industry and Ingenuity",
              description: "Pampanga's towns as networks for industry and trade.",
            },
            {
              title: "Gallery 3: Interregnum: Clark Air Field",
              description: "Clark Air Field as a US military facility.",
            },
            {
              title: "Gallery 4: Clark Freeport",
              description: "Clark Freeport's transformation and future vision.",
            },
          ].map((gallery, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{gallery.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{gallery.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">Plan Your Visit</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          The Clark Museum and 4D Theater is located on Sergio Osmena Street, Clark Freeport Zone, Philippines.
          Contact information and details about opening hours and admission can be found on their website or by
          contacting them directly.
        </p>
      </section>
    </main>
  );
}
