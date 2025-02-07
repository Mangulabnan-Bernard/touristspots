// src/app/spots/sandbox/page.tsx
"use client";
import Image from "next/image";

export default function SandboxPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutR6TFSCQUO35VxI1EZXPuYLRrU47aFC9wNdKfv" // Replace with your hero image
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
              About Sandbox Alviera
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sandbox Alviera is a two-hectare adventure destination located
              within the Alviera mixed-use development in Pampanga. It
              offers a unique selection of thrilling rides and attractions
              for people of all ages, making it a perfect getaway for
              families and friends.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Sandbox is home to Asia’s first roller coaster zip line and the
              tallest giant swing in the Philippines.  Other attractions
              include archery, ATV and UTV driving, an aerial walk challenge,
              an adventure tower, a splash tub obstacle course, and a state-of-the-art
              kart racing track.
            </p>
          </div>
          <div>
            <Image
              src="https://mxatayqbwx.ufs.sh/f/PwsLPXIQSutRvfgwUZzgMROLJDYbxKeXrpGsmBVCt7Eu5oal" // Replace with a landscape image
              alt="Sandbox Alviera Landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
          Fun Attractions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Giant Swing</h3>
            <p className="text-gray-600">The tallest swing in the Philippines, accommodating three guests at a time.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Aerial Walk Challenge</h3>
            <p className="text-gray-600">A high rope adventure course testing agility, balance, and flexibility.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Avatar One</h3>
            <p className="text-gray-600">The Philippines’ first roller coaster zip line.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">ATV/UTV Ride</h3>
            <p className="text-gray-600">Thrilling rides through the Pasig-Potrero river.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Outdoor Archery</h3>
            <p className="text-gray-600">A fun activity for all skill levels.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Adventure Tower</h3>
            <p className="text-gray-600">Wall climbing, rappelling, and free fall.</p>
          </div>
           <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Splash Tub</h3>
            <p className="text-gray-600">A water obstacle course for all ages.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">City Kart Racing</h3>
            <p className="text-gray-600">Go-karting on a state-of-the-art track.</p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
          Plan Your Visit
        </h2>
        <p className="text-lg text-gray-600">
          Sandbox Alviera is located in Porac, Pampanga.  You can find more
          information about tickets, schedules, and events on their website
          or by contacting them directly.  Camping sites are also available
          for those who want to stay overnight.
        </p>
      </section>
    </main>
  );
}