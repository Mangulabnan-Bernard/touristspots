/* eslint-disable react/no-unescaped-entities */
// src/app/spots/clark-museum/page.tsx
"use client";
import Image from "next/image";

export default function ClarkMuseumPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR95dxKMRcsQpayPXj3tq8TWdhlzmBOfG0n5gZ" // Replace with your hero image
          alt="Clark Museum and 4D Theater"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Clark Museum and 4D Theater
            </h1>
            <p className="text-2xl mb-8 drop-shadow-lg">
              A Journey Through Clark's History
            </p>
            <a
              href="#details"
              className="bg-white text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              About Clark Museum and 4D Theater
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The newly renovated Clark Museum features an expanded collection
              of artifacts, replicas, dioramas, photographs, murals, and
              interactive displays that showcase the history of Clark,
              Pampanga, and the surrounding areas.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              The museum tells the story of the Filipino spirit of bravery,
              industry, and ingenuity through four galleries.  It covers
              Clark's growth and its social and economic advances.  The
              4D Theater offers a 20-minute documentary film, "Risen from the
              Ashes," which highlights Clark's rich history, including a
              spectacular recreation of the 1991 Mount Pinatubo eruption.
            </p>
             <p className="text-lg text-gray-600 mb-6">
               A section on the ground floor houses changing thematic exhibits.
             </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRj6hqhAkFU4ONBWSVlKRzfPaIZAHt7kJgqGnr" // Replace with a landscape image
              alt="Clark Museum Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
          Museum Galleries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Gallery 1: Between Arayat and Pinatubo
            </h3>
            <p className="text-gray-600">
              The geological and geographical context of Clark.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Gallery 2: People’s Industry and Ingenuity
            </h3>
            <p className="text-gray-600">
              Pampanga's towns as networks for industry and trade.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Gallery 3: Interregnum: Clark Air Field
            </h3>
            <p className="text-gray-600">
              Clark Air Field as a US military facility.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Gallery 4: Clark Freeport
            </h3>
            <p className="text-gray-600">
              Clark Freeport's transformation and future vision.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
          Plan Your Visit
        </h2>
        <p className="text-lg text-gray-600">
          The Clark Museum and 4D Theater is located on Sergio Osmena Street,
          Clark Freeport Zone, Philippines. Contact information and details
          about opening hours and admission can be found on their website or
          by contacting them directly.
        </p>
      </section>
    </main>
  );
}